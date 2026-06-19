import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
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
        <FeaturesSection />
        <StatementSection />
        <PricingSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
