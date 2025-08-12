export default function ServiceAreaMap() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">Our Service Area</h3>
        <p className="text-gray-600">We proudly serve the greater metropolitan area and surrounding communities</p>
      </div>

      <div className="relative h-80">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CleanPro Service Area Map"
        />
      </div>

      <div className="p-4 bg-gray-50">
        <div className="flex flex-wrap gap-2">
          {[
            "Downtown",
            "Midtown",
            "Uptown",
            "East Side",
            "West End",
            "Suburbs",
            "Business District",
            "University Area",
            "Airport Area",
            "Industrial Zone",
          ].map((area, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {area}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Don't see your area listed? Contact us - we may still be able to serve you!
        </p>
      </div>
    </div>
  )
}
