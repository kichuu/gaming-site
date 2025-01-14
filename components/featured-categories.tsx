import Link from 'next/link'
import { Gamepad, Joystick, Headphones } from 'lucide-react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'

const categories = [
  { name: 'Consoles', icon: Gamepad, description: 'Latest gaming consoles and bundles' },
  { name: 'Games', icon: Joystick, description: 'Wide selection of games for all platforms' },
  { name: 'Accessories', icon: Headphones, description: 'Enhance your gaming experience' },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#22C55E]">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="bg-[#1C1917] border-green-800 hover:border-green-600 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#22C55E] rounded-full">
                    <category.icon className="h-8 w-8 text-[#121212]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#22C55E] mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-[#121212]">
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

