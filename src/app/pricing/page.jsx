const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Basic invoicing',
      'Expense tracking',
      'Simple reports',
      '1 team member',
      '5GB storage',
      'Email support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$79',
    description: 'Everything you need to grow your business.',
    features: [
      'Advanced invoicing',
      'Custom expense categories',
      'Detailed analytics',
      '5 team members',
      '25GB storage',
      'Priority support',
      'Tax calculator',
      'Time tracking'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$199',
    description: 'Advanced features for larger organizations.',
    features: [
      'Custom invoicing',
      'Advanced analytics',
      'Custom reports',
      'Unlimited team members',
      'Unlimited storage',
      '24/7 phone support',
      'API access',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div key={tier.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-primary">{tier.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`/signup?plan=${tier.id}`}
                className="mt-8 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
