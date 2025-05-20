import { HomeHero } from "@/components/home/home-hero"
import { HomeFeatures } from "@/components/home/home-features"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HomeHero />
      <HomeFeatures />
    </div>
  )
}
