import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PracticeAreasSection from '@/components/PracticeAreas'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import EducationalSeries from '@/components/Educational'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PracticeAreasSection/>
      <EducationalSeries />
      <Awards/>
      <Footer />
    </main>
  )
}