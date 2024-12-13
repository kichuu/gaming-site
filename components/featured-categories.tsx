import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Gamepad, Joystick, Headphones } from 'lucide-react'

const categories = [
  { name: 'Consoles', icon: Gamepad, description: 'Latest gaming consoles and bundles' },
  { name: 'Games', icon: Joystick, description: 'Wide selection of games for all platforms' },
  { name: 'Accessories', icon: Headphones, description: 'Enhance your gaming experience' },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 px-4 bg-[#181818]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="bg-[#242424] border-4 border-green-800 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-green-800 rounded-full">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-2 border-green-600 text-white bg-[#242424] hover:bg-green-800 hover:text-white py-3 px-6 rounded-lg font-semibold text-base transition-all duration-300">
                  <Link href={`/category/${category.name.toLowerCase()}`}>
                    Explore {category.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
