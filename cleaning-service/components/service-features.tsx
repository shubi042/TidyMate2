import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete peace of mind with comprehensive insurance coverage for all our cleaning services.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book cleaning services that fit your schedule, including evenings and weekends.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our experienced team undergoes thorough background checks and professional training.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Not satisfied? We'll return within 24 hours to make it right at no extra charge.",
  },
]

export default function ServiceFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Why Choose TidyMate?</h2>
          <p className="text-xl text-gray-600">
            We're committed to delivering exceptional cleaning services with unmatched reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h3 className="font-serif font-bold text-2xl text-gray-900 mb-6">Service Areas</h3>
          <p className="text-gray-600 mb-4">We proudly serve the Greater Toronto Area including:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Downtown Toronto",
              "North York",
              "Scarborough",
              "Etobicoke",
              "Mississauga",
              "Markham",
              "Richmond Hill",
              "Vaughan",
            ].map((area, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
