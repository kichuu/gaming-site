import Link from 'next/link'
import { Button } from './ui/button'

export default function SellGames() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
      {/* Gemini-inspired background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22none%22 stroke=%22%23008000%22 stroke-width=%220.25%22%3E%3Cpath d=%22M0 50 H100 M50 0 V100%22%2F%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] animate-[spin_20s_linear_infinite]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-green-400 tracking-tight">Sell Your Pre-owned Games</h2>
        <p className="mb-10 text-xl text-gray-300 max-w-2xl mx-auto">Turn your old games into cash or store credit. It&apos;s quick, easy, and eco-friendly!</p>
        <div className="flex justify-center">
        <Button
  asChild
  size="lg"
  className="relative text-secondary-foreground font-bold w-[200px] h-[60px] rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 text-xl hover:bg-transparent bg-transparent"
>
  <Link href="/sell" className="relative flex items-center justify-center space-x-2">
    <span className="tracking-wider uppercase relative animate-pulse">
      <span className="relative z-10">Start Selling Now</span>
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </Link>
</Button>




        </div>
      </div>
    </section>
  )
}

