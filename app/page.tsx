import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Marquee from '@/components/Marquee'
import FeaturesSection from '@/components/FeaturesSection'
import MovementsSection from '@/components/MovementsSection'
import StatementSection from '@/components/StatementSection'
import PricingSection from '@/components/PricingSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <FeaturesSection />
        <MovementsSection />
        <StatementSection />
        <PricingSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
