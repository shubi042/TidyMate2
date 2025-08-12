import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown Resident",
    rating: 5,
    text: "TidyMate transformed my home! Their attention to detail is incredible and the team is always professional and punctual.",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Mike Chen",
    location: "Office Manager",
    rating: 5,
    text: "We use TidyMate for our office building and they consistently deliver excellent results. Highly recommend their commercial services.",
    image: "/professional-businessman.png",
  },
  {
    name: "Lisa Rodriguez",
    location: "Homeowner",
    rating: 5,
    text: "After our kitchen renovation, TidyMate did an amazing post-construction cleanup. They made our home move-in ready!",
    image: "/happy-woman-at-home.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
