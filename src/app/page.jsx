import Link from 'next/link'
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Smart Invoicing',
    description: 'Create and manage professional invoices with automated payment tracking.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Expense Management',
    description: 'Track and categorize expenses with receipt scanning and reporting.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Financial Analytics',
    description: 'Real-time insights into your business performance and cash flow.',
    icon: ChartBarIcon,
  },
  {
    name: 'Leave Management',
    description: 'Streamline employee time-off requests and approvals.',
    icon: CalendarIcon,
  },
]

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-light to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 sm:pb-24 pt-2 sm:pt-6 lg:pb-32">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
            <div className="mt-2 sm:mt-12">
              <a href="/pricing" className="inline-flex space-x-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Just shipped v1.0</span>
                </span>
              </a>
            </div>
            <h1 className="mt-4 sm:mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Business tools that work for you
            </h1>
            <p className="mt-3 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Streamline your business operations with our all-in-one productivity suite. From invoicing to expense tracking, we've got you covered.
            </p>
            <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-center"
              >
                Get started
              </Link>
              <Link 
                href="/features" 
                className="text-sm font-semibold leading-6 text-gray-900 text-center sm:text-left"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-light to-primary-lighter opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 sm:mt-16 mb-8 sm:mb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All-in-one business suite
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Manage your entire business operations from a single platform designed to scale with you.
          </p>
        </div>
        <div className="mx-auto mt-8 sm:mt-16 lg:mt-20">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  )
}
