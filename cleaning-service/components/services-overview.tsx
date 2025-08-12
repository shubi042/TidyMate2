import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Complete home cleaning services including regular maintenance, deep cleaning, and move-in/out cleaning.",
    features: ["Kitchen & Bathroom Deep Clean", "Dusting & Vacuuming", "Window Cleaning"],
  },
  {
    icon: Building,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning to maintain a pristine work environment.",
    features: ["Office Spaces", "Retail Stores", "Medical Facilities"],
  },
  {
    icon: Sparkles,
    title: "Post-Construction",
    description:
      "Specialized cleaning for newly constructed or renovated properties to remove all construction debris.",
    features: ["Dust Removal", "Paint Splatter Cleanup", "Final Polish"],
  },
  {
    icon: Clock,
    title: "Hourly Services",
    description: "Flexible hourly cleaning services tailored to your specific needs and schedule.",
    features: ["Flexible Scheduling", "$40/Hour Rate", "Minimum 2 Hours"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Our Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive cleaning solutions for every need, from regular maintenance to specialized deep
            cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
