export default function AboutPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering businesses with smart tools
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're on a mission to simplify business operations for companies of all sizes. Our platform brings together essential tools that every business needs, making it easier to manage your operations efficiently.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide businesses with intuitive, powerful tools that simplify their operations and drive growth. We believe in making professional-grade business management accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Values</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Simplicity in everything we do</li>
                <li>• Customer success is our success</li>
                <li>• Continuous innovation</li>
                <li>• Transparency and trust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
