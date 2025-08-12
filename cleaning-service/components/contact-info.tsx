import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Get in Touch</CardTitle>
        <p className="text-gray-600">Reach out to our friendly team</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600 mb-1">hello@tidymate.ca</p>
            <p className="text-sm text-gray-500">We respond within 24 hours</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
            <p className="text-gray-600 mb-1">Greater Toronto Area</p>
            <p className="text-sm text-gray-500">Serving all surrounding communities</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
