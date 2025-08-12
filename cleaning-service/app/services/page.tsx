import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceOptions from "@/components/service-options"
import ServiceFeatures from "@/components/service-features"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-6">Our Cleaning Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our flexible cleaning options designed to meet your specific needs and budget. Professional
            results guaranteed every time.
          </p>
        </div>
      </section>

      <ServiceOptions />
      <ServiceFeatures />
      <Footer />
    </main>
  )
}
