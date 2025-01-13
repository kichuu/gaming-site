"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

type Product = {
  id: number
  name: string
  price: number
  badge: string
  image?: string
}

const placeholderProducts: Product[] = [
  { id: 1, name: "PlayStation 5", price: 499.99, badge: "Best Seller" },
  { id: 2, name: "Xbox Series X", price: 499.99, badge: "New" },
  { id: 3, name: "Nintendo Switch OLED", price: 349.99, badge: "Popular" },
  { id: 4, name: "Razer BlackShark V2 Pro", price: 179.99, badge: "Top Rated" },
  {
    id: 5,
    name: "RTX 3080 Graphics Card",
    price: 699.99,
    badge: "High Performance",
  },
  {
    id: 6,
    name: "SteelSeries Arctis Pro",
    price: 179.99,
    badge: "Premium Audio",
  },
  {
    id: 7,
    name: "Logitech G Pro X Superlight",
    price: 149.99,
    badge: "Ultra Lightweight",
  },
  { id: 8, name: "Samsung Odyssey G7", price: 699.99, badge: "Curved Gaming" },
]

// Replace with your Unsplash keys
const UNSPLASH_ACCESS_KEY = "hYc6QDtFBjAlr9TiSM_oDwuU2sAVLVDhkDUB5tlGenw"

export default function PopularProducts() {
  const [products, setProducts] = useState(placeholderProducts)
  const [currentIndex, setCurrentIndex] = useState(0)
  const productsPerPage = 4

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const queries = [
          "PlayStation 5",
          "Xbox Series X",
          "Nintendo Switch",
          "Gaming Headset",
          "Graphics Card",
          "Gaming Mouse",
          "Gaming Monitor",
          "Gaming Keyboard",
        ]
        const responses = await Promise.all(
          queries.map((query) =>
            axios.get("https://api.unsplash.com/search/photos", {
              params: {
                query,
                per_page: 1,
              },
              headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
              },
            })
          )
        )
        const updatedProducts = placeholderProducts.map((product, index) => ({
          ...product,
          image:
            responses[index]?.data?.results[0]?.urls?.regular ||
            "/placeholder.jpg",
        }))
        setProducts(updatedProducts)
      } catch (error) {
        console.error("Error fetching images:", error)
      }
    }

    fetchImages()
  }, [])

  const nextProducts = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + productsPerPage) % products.length
    )
  }

  const prevProducts = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - productsPerPage + products.length) % products.length
    )
  }

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + productsPerPage
  )

  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#22C55E]">
          Popular Products
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-[#1C1917] border-green-800 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={product.image ?? ""}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#22C55E] text-[#121212]">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-[#22C55E] font-bold text-xl">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#22C55E] hover:bg-[#1a9f4d] text-[#121212]">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button
            onClick={prevProducts}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[#22C55E] text-[#121212] hover:bg-[#1a9f4d] rounded-full p-2"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextProducts}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-[#22C55E] text-[#121212] hover:bg-[#1a9f4d] rounded-full p-2"
            aria-label="Next products"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
