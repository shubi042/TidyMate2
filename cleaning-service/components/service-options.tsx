"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, CheckCircle, Star } from "lucide-react"

const hourlyFeatures = [
  "Flexible scheduling to fit your needs",
  "Perfect for regular maintenance cleaning",
  "Minimum 2-hour booking required",
  "Bring your own supplies or we provide them",
  "Same-day availability often possible",
]

const flatRateServices = [
  {
    category: "Airbnb Cleaning",
    services: [
      { name: "1-Bedroom", price: 140 },
      { name: "2-Bedroom", price: 180 },
      { name: "3-Bedroom", price: 270 },
      { name: "4+ Bedrooms", price: 320 },
    ],
  },
  {
    category: "Post-Construction Residential",
    services: [
      { name: "1-Bedroom", price: 350 },
      { name: "2-Bedroom", price: 450 },
      { name: "3-Bedroom", price: 650 },
      { name: "4+ Bedrooms", price: 800 },
      { name: "5+ Bedrooms", price: 1000 },
    ],
  },
  {
    category: "Post-Construction Non-Residential",
    services: [
      { name: "Small Space", price: 900 },
      { name: "Medium Space", price: 1300 },
      { name: "Large Space", price: 2000 },
    ],
  },
]

export default function ServiceOptions() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Choose Your Cleaning Option</h2>
          <p className="text-xl text-gray-600">
            We offer two flexible pricing models to suit different needs and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Hourly Cleaning */}
          <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
              <span className="text-sm font-medium">Most Flexible</span>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="font-serif text-2xl text-gray-900">Hourly Cleaning</CardTitle>
              <div className="text-4xl font-bold text-blue-600 mt-2">
                $40<span className="text-lg text-gray-500">/hour</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-center mb-6">
                Perfect for regular maintenance, touch-ups, or when you need cleaning help for a specific amount of
                time.
              </p>

              <ul className="space-y-3 mb-8">
                {hourlyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToBooking} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Book Hourly Service
              </Button>
            </CardContent>
          </Card>

          {/* Flat Rate Cleaning */}
          <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-bl-lg">
              <span className="text-sm font-medium">Best Value</span>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="font-serif text-2xl text-gray-900">Flat-Rate Cleaning</CardTitle>
              <div className="text-4xl font-bold text-green-600 mt-2">
                Fixed<span className="text-lg text-gray-500"> Price</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-center mb-6">
                Transparent, upfront pricing for specific cleaning services. No surprises, just quality results.
              </p>

              <div className="space-y-6 mb-8">
                {flatRateServices.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                          <span className="text-gray-700">{service.name}</span>
                          <span className="font-semibold text-gray-900">${service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Button onClick={scrollToBooking} className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Book Flat-Rate Service
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Not sure which option is right for you?</h3>
          <p className="text-gray-600 mb-6">
            Contact us for a free consultation and we'll help you choose the best cleaning solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToBooking} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
