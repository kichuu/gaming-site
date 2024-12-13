import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const products = [
  { id: 1, name: 'PlayStation 5', price: 499.99, image: '/ps5.jpg', badge: 'Best Seller' },
  { id: 2, name: 'Xbox Series X', price: 499.99, image: '/xbox-series-x.jpg', badge: 'New' },
  { id: 3, name: 'Nintendo Switch OLED', price: 349.99, image: '/switch-oled.jpg', badge: 'Popular' },
  { id: 4, name: 'Razer BlackShark V2 Pro', price: 179.99, image: '/gaming-headset.jpg', badge: 'Top Rated' },
]

export default function PopularProducts() {
  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
  Popular Products
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-[#242424] border-green-800 overflow-hidden">
              <div className="relative">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={400} 
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-green-600">{product.badge}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-[#00a000] font-bold text-xl">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-[#008000] hover:bg-[#006000] text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

