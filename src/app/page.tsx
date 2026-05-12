import HeroSection from '@/components/sections/home/HeroSection'
import RunningSection from '@/components/sections/home/RunningSection'
import EventSpotlight from '@/components/sections/home/EventSpotlight'
import WhoWeAre from '@/components/sections/home/WhoWeAre'
import SixPillars from '@/components/sections/home/SixPillars'
import DonateCTA from '@/components/sections/home/DonateCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <RunningSection />
      <EventSpotlight />
      <WhoWeAre />
      <SixPillars />
      <DonateCTA />
    </>
  )
}
