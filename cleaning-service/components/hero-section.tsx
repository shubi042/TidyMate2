import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Toronto's Trusted
              <span className="text-blue-600"> Cleaning Partner</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience exceptional cleaning services across Toronto and the GTA. TidyMate delivers spotless results
              for your home or business with personalized care and attention to detail.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Same Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Link href="#booking">Book Your Cleaning Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <img
              src="/professional-cleaning-team.png"
              alt="TidyMate professional cleaning team in Toronto"
              className="rounded-2xl shadow-2xl w-full"
            />
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Toronto Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
