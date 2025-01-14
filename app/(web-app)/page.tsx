
import FeaturedCategories from '@/components/featured-categories';
import { Hero } from '@/components/Hero';
import PopularProducts from '@/components/popular-products';
import SellGames from '@/components/sell-games';


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

