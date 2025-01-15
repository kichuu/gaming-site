import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'

interface ItemCardProps {
  item: {
    id: number
    name: string
    price: number
    category: string
    brand: string
    rating: number
    image: string
  }
  layoutMode?: 'grid' | 'list'
}

export function ItemCard({ item, layoutMode = 'grid' }: ItemCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className={`bg-[#1a1a1a] border-primary hover:border-primary hover:shadow-lg transition-all ${layoutMode === 'list' ? 'flex' : ''}`}>
        <CardContent className={`p-4 ${layoutMode === 'list' ? 'flex-1' : ''}`}>
          <div className={layoutMode === 'list' ? 'flex gap-4' : ''}>
            <div className={layoutMode === 'list' ? 'w-1/3' : 'mb-4'}>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <div className={layoutMode === 'list' ? 'w-2/3' : ''}>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">{item.name}</h3>
              <p className="text-primary font-bold mb-2">${item.price.toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-secondary-foreground">{item.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-400 text-sm">{item.category} | {item.brand}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className={`p-4 ${layoutMode === 'list' ? 'flex-shrink-0' : ''}`}>
          <div className={`flex ${layoutMode === 'list' ? 'flex-col' : ''} gap-2 w-full`}>
            {/* Updated Add to Cart Button */}
            <Button className="flex-1 bg-primary text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:-secondary focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
