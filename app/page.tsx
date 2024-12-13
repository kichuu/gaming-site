import { Hero } from '@/components/hero'
import FeaturedCategories from '@/components/featured-categories'
import PopularProducts from '@/components/popular-products'
import SellGames from '@/components/sell-games'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <PopularProducts />
      <SellGames />
    </>
  )
}

