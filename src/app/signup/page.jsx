'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const packages = {
  starter: {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses just getting started.',
  },
  professional: {
    name: 'Professional',
    price: '$79',
    description: 'Everything you need to grow your business.',
  },
  enterprise: {
    name: 'Enterprise',
    price: '$199',
    description: 'Advanced features for larger organizations.',
  }
}

export default function SignupPage() {
  const searchParams = useSearchParams()
  const [selectedPackage, setSelectedPackage] = useState('starter')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: ''
  })

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan && packages[plan]) {
      setSelectedPackage(plan)
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { ...formData, package: selectedPackage })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white/70 backdrop-blur-sm shadow-sm ring-1 ring-gray-900/5 rounded-xl px-6 py-8 sm:p-12">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 border-b pb-4 mb-8">Create your account</h2>
            
            {/* Package Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Selected Package</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(packages).map(([key, pkg]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPackage(key)}
                    className={`relative rounded-lg p-4 text-left ring-1 ring-inset ${
                      selectedPackage === key
                        ? 'bg-primary/10 ring-primary'
                        : 'ring-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900">
                      {pkg.name}
                      <span className="ml-2 text-primary">{pkg.price}</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{pkg.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
