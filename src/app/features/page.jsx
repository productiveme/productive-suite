import { 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CalendarIcon,
  CalculatorIcon,
  ClockIcon,
  DocumentChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Smart Invoicing',
    description: 'Create professional invoices, track payments, and automate reminders.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Expense Tracking',
    description: 'Capture receipts, categorize expenses, and manage reimbursements.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Financial Analytics',
    description: 'Real-time insights into cash flow, revenue, and business performance.',
    icon: ChartBarIcon,
  },
  {
    name: 'Leave Management',
    description: 'Streamline time-off requests and manage team availability.',
    icon: CalendarIcon,
  },
  {
    name: 'Tax Calculator',
    description: 'Automated tax calculations and reporting for your business.',
    icon: CalculatorIcon,
  },
  {
    name: 'Time Tracking',
    description: 'Track billable hours and monitor project progress.',
    icon: ClockIcon,
  },
  {
    name: 'Financial Reports',
    description: 'Generate detailed financial reports and forecasts.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Team Management',
    description: 'Manage your team, roles, and permissions efficiently.',
    icon: UserGroupIcon,
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for your business
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Our comprehensive suite of tools helps you manage every aspect of your business efficiently.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
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
    </div>
  )
}
