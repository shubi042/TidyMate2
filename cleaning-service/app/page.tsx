import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import Testimonials from "@/components/testimonials"
import BookingSystem from "@/components/booking-system"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <BookingSystem />
      <Footer />
    </main>
  )
}
