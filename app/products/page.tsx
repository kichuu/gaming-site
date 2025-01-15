"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilterSection } from '@/components/FilterSection'
import axios from 'axios'
import { ItemCard } from '@/components/ItemCard'

const UNSPLASH_ACCESS_KEY = "hYc6QDtFBjAlr9TiSM_oDwuU2sAVLVDhkDUB5tlGenw" // Replace with your Unsplash API key

const initialProducts = [
  { id: 1, name: 'Gaming Mouse', price: 59.99, category: 'Peripherals', brand: 'Razer', rating: 4.5, featured: true, image: '' },
  { id: 2, name: 'Mechanical Keyboard', price: 129.99, category: 'Peripherals', brand: 'Corsair', rating: 4.8, featured: true, image: '' },
  { id: 3, name: 'Gaming Headset', price: 99.99, category: 'Audio', brand: 'SteelSeries', rating: 4.3, featured: false, image: '' },
  { id: 4, name: 'Gaming Monitor', price: 299.99, category: 'Monitors', brand: 'ASUS', rating: 4.7, featured: true, image: '' },
  { id: 5, name: 'Gaming Chair', price: 249.99, category: 'Furniture', brand: 'SecretLab', rating: 4.6, featured: false, image: '' },
  { id: 6, name: 'RGB Mouse Pad', price: 29.99, category: 'Accessories', brand: 'Razer', rating: 4.2, featured: false, image: '' },
  { id: 7, name: 'Gaming Laptop', price: 1499.99, category: 'Computers', brand: 'MSI', rating: 4.9, featured: true, image: '' },
  { id: 8, name: 'Wireless Controller', price: 69.99, category: 'Peripherals', brand: 'Microsoft', rating: 4.4, featured: false, image: '' },
  { id: 9, name: 'Graphics Card (GPU)', price: 799.99, category: 'Components', brand: 'NVIDIA', rating: 4.8, featured: true, image: '' },
  { id: 10, name: '16GB RAM', price: 89.99, category: 'Components', brand: 'Corsair', rating: 4.7, featured: false, image: '' },
  { id: 11, name: 'Gaming PC Case', price: 129.99, category: 'Components', brand: 'NZXT', rating: 4.6, featured: true, image: '' },
  { id: 12, name: '1TB SSD', price: 119.99, category: 'Components', brand: 'Samsung', rating: 4.9, featured: false, image: '' },
  { id: 13, name: 'Motherboard (ATX)', price: 149.99, category: 'Components', brand: 'MSI', rating: 4.5, featured: false, image: '' },
  { id: 14, name: '750W Power Supply', price: 89.99, category: 'Components', brand: 'EVGA', rating: 4.7, featured: true, image: '' },
  { id: 15, name: '27" 144Hz Gaming Monitor', price: 399.99, category: 'Monitors', brand: 'Acer', rating: 4.8, featured: true, image: '' },
  { id: 16, name: 'RGB Gaming Keyboard', price: 79.99, category: 'Peripherals', brand: 'Logitech', rating: 4.6, featured: false, image: '' },
  { id: 17, name: 'Wireless Gaming Headset', price: 159.99, category: 'Audio', brand: 'SteelSeries', rating: 4.9, featured: true, image: '' },
  { id: 18, name: '4K Ultra HD Monitor', price: 499.99, category: 'Monitors', brand: 'LG', rating: 4.7, featured: false, image: '' },
  { id: 19, name: 'Gaming Desk', price: 199.99, category: 'Furniture', brand: 'Arozzi', rating: 4.4, featured: true, image: '' },
  { id: 20, name: 'Gaming Mousepad XL', price: 39.99, category: 'Accessories', brand: 'Corsair', rating: 4.6, featured: false, image: '' },
]

const categories = ['All', 'Peripherals', 'Audio', 'Monitors', 'Furniture', 'Accessories', 'Computers', 'Components']
const brands = ['All', 'Razer', 'Corsair', 'SteelSeries', 'ASUS', 'SecretLab', 'MSI', 'Microsoft', 'NVIDIA', 'NZXT', 'Samsung', 'Logitech', 'Acer', 'EVGA', 'LG', 'Arozzi']

export default function ProductPage() {
  const [products, setProducts] = useState(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [selectedCategories, setSelectedCategories] = useState(['All'])
  const [selectedBrands, setSelectedBrands] = useState(['All'])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const updatedProducts = await Promise.all(
          products.map(async (product) => {
            const response = await axios.get("https://api.unsplash.com/search/photos", {
              params: {
                query: product.name,
                per_page: 1,
              },
              headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
              },
            })
            const imageUrl = response.data.results[0]?.urls?.regular || '/images/placeholder.jpg'
            return { ...product, image: imageUrl }
          })
        )
        setProducts(updatedProducts)
      } catch (error) {
        console.error("Error fetching product images:", error)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesCategory = selectedCategories.includes('All') || selectedCategories.includes(product.category)
      const matchesBrand = selectedBrands.includes('All') || selectedBrands.includes(product.brand)
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesPrice && matchesCategory && matchesBrand && matchesSearch
    })

    // Sort products
    switch (sortBy) {
      case 'priceLowToHigh':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'priceHighToLow':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }, [priceRange, selectedCategories, selectedBrands, searchTerm, sortBy, products])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      category === 'All'
        ? ['All']
        : prev.includes(category)
        ? prev.filter((c) => c !== category && c !== 'All')
        : [...prev.filter((c) => c !== 'All'), category]
    )
  }

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      brand === 'All'
        ? ['All']
        : prev.includes(brand)
        ? prev.filter((b) => b !== brand && b !== 'All')
        : [...prev.filter((b) => b !== 'All'), brand]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Gaming Products</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        {/* Filters */}
        <div
  className={`lg:w-1/4 bg-[#1a1a1a] p-4 rounded-lg shadow-lg sticky top-4 h-fit`}
>
  <h1 className="text-3xl font-semibold text-center text-secondary-foreground mb-4">Filters</h1>

  <FilterSection title="">
    <Input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full bg-[#2a2a2a] text-secondary-foreground border-primary focus:ring-2 focus:ring-primary rounded-md transition-all duration-300"
    />
  </FilterSection>

  <FilterSection title="Price Range">
    <div className="space-y-2">
      <Slider
        min={0}
        max={1500}
        step={10}
        value={priceRange}
        onValueChange={setPriceRange}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-secondary-foreground">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  </FilterSection>

  <FilterSection title="Categories">
    <div className="space-y-1">
      {categories.map((category) => (
        <div
          key={category}
          className="flex items-center hover:bg-[#2a2a2a] rounded-md p-2 transition-all duration-300"
        >
          <Checkbox
            id={`category-${category}`}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
            className="border-primary focus:ring-2 focus:ring-primary"
          />
          <Label
            htmlFor={`category-${category}`}
            className="ml-2 text-sm text-secondary-foreground"
          >
            {category}
          </Label>
        </div>
      ))}
    </div>
  </FilterSection>

  <FilterSection title="Brands">
    <div className="space-y-1">
      {brands.map((brand) => (
        <div
          key={brand}
          className="flex items-center hover:bg-[#2a2a2a] rounded-md p-2 transition-all duration-300"
        >
          <Checkbox
            id={`brand-${brand}`}
            checked={selectedBrands.includes(brand)}
            onCheckedChange={() => handleBrandChange(brand)}
            className="border-primary focus:ring-2 focus:ring-primary"
          />
          <Label
            htmlFor={`brand-${brand}`}
            className="ml-2 text-sm text-secondary-foreground"
          >
            {brand}
          </Label>
        </div>
      ))}
    </div>
  </FilterSection>

  <Button
    onClick={() => {
      setPriceRange([0, 1500])
      setSelectedCategories(['All'])
      setSelectedBrands(['All'])
      setSearchTerm('')
    }}
    className="w-full bg-primary text-black mt-4 hover:bg-[#1a1a1a] hover:text-primary border border-primary transition-all duration-300"
  >
    Reset Filters
  </Button>
</div>



        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="sort" className="text-secondary-foreground">Sort by:</Label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#2a2a2a] text-secondary-foreground border-primary rounded-md p-2 focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                <option value="featured">Featured</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ItemCard item={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
