"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, DollarSign, CreditCard, CheckCircle } from "lucide-react"

// Flat rate pricing structure
const flatRateServices = {
  "Airbnb 1-Bedroom": 140,
  "Airbnb 2-Bedroom": 180,
  "Airbnb 3-Bedroom": 270,
  "Airbnb 4+ Bedrooms": 320,
  "Post-Construction Residential 1-Bedroom": 350,
  "Post-Construction Residential 2-Bedroom": 450,
  "Post-Construction Residential 3-Bedroom": 650,
  "Post-Construction Residential 4+ Bedrooms": 800,
  "Post-Construction Residential 5+ Bedrooms": 1000,
  "Post-Construction Non-Residential Small": 900,
  "Post-Construction Non-Residential Medium": 1300,
  "Post-Construction Non-Residential Large": 2000,
}

// Time slots for hourly booking
const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

export default function BookingSystem() {
  const [bookingType, setBookingType] = useState<"hourly" | "flat-rate" | "">("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [hours, setHours] = useState(2)
  const [selectedService, setSelectedService] = useState("")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [totalPrice, setTotalPrice] = useState(0)
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)

  // Calculate total price based on booking type
  useEffect(() => {
    if (bookingType === "hourly") {
      setTotalPrice(hours * 40)
    } else if (bookingType === "flat-rate" && selectedService) {
      setTotalPrice(flatRateServices[selectedService as keyof typeof flatRateServices] || 0)
    } else {
      setTotalPrice(0)
    }
  }, [bookingType, hours, selectedService])

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  const handleBookingTypeChange = (type: "hourly" | "flat-rate") => {
    setBookingType(type)
    // Reset form when switching types
    setSelectedDate("")
    setSelectedTime("")
    setHours(2)
    setSelectedService("")
    setTotalPrice(0)
  }

  const handleCustomerInfoChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const isFormValid = () => {
    const hasCustomerInfo = customerInfo.name && customerInfo.email && customerInfo.phone
    if (bookingType === "hourly") {
      return hasCustomerInfo && selectedDate && selectedTime && hours >= 2
    } else if (bookingType === "flat-rate") {
      return hasCustomerInfo && selectedService
    }
    return false
  }

  const handlePayment = (method: "stripe" | "paypal") => {
    console.log(`Processing ${method} payment for $${totalPrice}`)

    // TODO: Integrate with actual payment processors
    // For Stripe: Use environment variable STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    // For PayPal: Use PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, and PAYPAL_ENVIRONMENT

    // Enhanced payment processing would redirect to:
    // - Stripe Checkout: https://checkout.stripe.com/...
    // - PayPal: https://www.paypal.com/checkoutnow?...

    // After successful payment, redirect back to confirmation page
    // with booking details and payment confirmation

    // Simulate successful payment for demo
    setTimeout(() => {
      setIsBookingConfirmed(true)
      // In production, this would be handled by payment webhook
    }, 1500)
  }

  if (isBookingConfirmed) {
    return (
      <section id="booking" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Booking Confirmed!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for choosing TidyMate! Your cleaning service has been successfully booked.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Booking Details</h3>
                <div className="space-y-2 text-left">
                  <p>
                    <strong>Service:</strong> {bookingType === "hourly" ? `${hours} Hour Cleaning` : selectedService}
                  </p>
                  {bookingType === "hourly" && (
                    <>
                      <p>
                        <strong>Date:</strong> {selectedDate}
                      </p>
                      <p>
                        <strong>Time:</strong> {selectedTime}
                      </p>
                    </>
                  )}
                  <p>
                    <strong>Total:</strong> ${totalPrice}
                  </p>
                  <p>
                    <strong>Customer:</strong> {customerInfo.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {customerInfo.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {customerInfo.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                You will receive a confirmation email shortly with all the details. Our team will contact you 24 hours
                before your scheduled service.
              </p>
              <Button
                onClick={() => {
                  setIsBookingConfirmed(false)
                  setBookingType("")
                  setCustomerInfo({ name: "", email: "", phone: "" })
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Book Another Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Book Your Cleaning Service</h2>
          <p className="text-xl text-gray-600">Choose your preferred service type and schedule your cleaning today</p>
        </div>

        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Service Booking</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Service Type Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">Choose Service Type</Label>
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant={bookingType === "hourly" ? "default" : "outline"}
                  className="h-20 text-left p-4"
                  onClick={() => handleBookingTypeChange("hourly")}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Hourly Cleaning</div>
                      <div className="text-sm opacity-75">$40/hour • Flexible scheduling</div>
                    </div>
                  </div>
                </Button>
                <Button
                  variant={bookingType === "flat-rate" ? "default" : "outline"}
                  className="h-20 text-left p-4"
                  onClick={() => handleBookingTypeChange("flat-rate")}
                >
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Flat-Rate Cleaning</div>
                      <div className="text-sm opacity-75">Fixed pricing • Specialized services</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Hourly Booking Options */}
            {bookingType === "hourly" && (
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-base font-medium mb-2 block">
                      Select Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      min={getMinDate()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-base font-medium mb-2 block">
                      Select Time
                    </Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="hours" className="text-base font-medium mb-2 block">
                    Number of Hours (Minimum 2)
                  </Label>
                  <Select value={hours.toString()} onValueChange={(value) => setHours(Number.parseInt(value))}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[2, 3, 4, 5, 6, 7, 8].map((hour) => (
                        <SelectItem key={hour} value={hour.toString()}>
                          {hour} {hour === 1 ? "hour" : "hours"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Flat Rate Service Options */}
            {bookingType === "flat-rate" && (
              <div className="mb-8">
                <Label className="text-base font-medium mb-4 block">Select Service</Label>
                <div className="space-y-4">
                  {/* Airbnb Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Airbnb Cleaning</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {Object.entries(flatRateServices)
                        .filter(([service]) => service.startsWith("Airbnb"))
                        .map(([service, price]) => (
                          <Button
                            key={service}
                            variant={selectedService === service ? "default" : "outline"}
                            className="justify-between h-12"
                            onClick={() => setSelectedService(service)}
                          >
                            <span>{service.replace("Airbnb ", "")}</span>
                            <span className="font-bold">${price}</span>
                          </Button>
                        ))}
                    </div>
                  </div>

                  {/* Post-Construction Residential */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Post-Construction Residential</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {Object.entries(flatRateServices)
                        .filter(([service]) => service.startsWith("Post-Construction Residential"))
                        .map(([service, price]) => (
                          <Button
                            key={service}
                            variant={selectedService === service ? "default" : "outline"}
                            className="justify-between h-12"
                            onClick={() => setSelectedService(service)}
                          >
                            <span>{service.replace("Post-Construction Residential ", "")}</span>
                            <span className="font-bold">${price}</span>
                          </Button>
                        ))}
                    </div>
                  </div>

                  {/* Post-Construction Non-Residential */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Post-Construction Non-Residential</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {Object.entries(flatRateServices)
                        .filter(([service]) => service.startsWith("Post-Construction Non-Residential"))
                        .map(([service, price]) => (
                          <Button
                            key={service}
                            variant={selectedService === service ? "default" : "outline"}
                            className="justify-between h-12"
                            onClick={() => setSelectedService(service)}
                          >
                            <span>{service.replace("Post-Construction Non-Residential ", "")}</span>
                            <span className="font-bold">${price}</span>
                          </Button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Customer Information */}
            {bookingType && (
              <div className="space-y-6 mb-8">
                <h3 className="text-lg font-semibold">Customer Information</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => handleCustomerInfoChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleCustomerInfoChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleCustomerInfoChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Price Summary and Payment */}
            {bookingType && totalPrice > 0 && (
              <div className="border-t pt-8">
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total Amount:</span>
                    <span className="text-3xl font-bold text-blue-600">${totalPrice}</span>
                  </div>
                  {bookingType === "hourly" && (
                    <p className="text-sm text-gray-600">
                      {hours} hours × $40/hour = ${totalPrice}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Payment Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => handlePayment("stripe")}
                      disabled={!isFormValid()}
                      className="h-14 bg-blue-600 hover:bg-blue-700"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Pay with Stripe
                    </Button>
                    <Button
                      onClick={() => handlePayment("paypal")}
                      disabled={!isFormValid()}
                      variant="outline"
                      className="h-14 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                    >
                      <div className="w-5 h-5 mr-2 bg-yellow-400 rounded"></div>
                      Pay with PayPal
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Secure payment processing. Your information is protected.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
