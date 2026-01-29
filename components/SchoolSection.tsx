export default function SchoolSection() {
  const benefits = [
    {
      icon: '📊',
      title: 'Real Progress Data',
      description: 'See what\'s actually happening. Clear reports on progress, gaps, and intervention needs. No complex dashboards.',
    },
    {
      icon: '⏱️',
      title: 'Strategic Friction Controls',
      description: 'Customize "Don\'t Rush" prompts by pupil, class, or year group. Teachers report this refocuses learners effectively.',
    },
    {
      icon: '🔧',
      title: 'Easy Customization',
      description: 'Timer options, content filtering, and accessibility settings. Configure once, benefit all year.',
    },
    {
      icon: '📚',
      title: 'Curriculum Aligned',
      description: 'Content mapped to White Rose and other established schemes. Less setup, faster adoption.',
    },
    {
      icon: '♿',
      title: 'Inclusive by Design',
      description: 'SEN pupils saw 2x+ progress with accessibility options. Universal design benefits all learners.',
    },
    {
      icon: '✅',
      title: 'Proven Impact',
      description: 'England efficacy study validates every feature. Evidence-based, not trend-based.',
    },
  ]

  return (
    <section id="for-schools" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Built for Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teachers told us what they needed. Our efficacy study validated what works.
            Here's what you get.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2x+</div>
              <p className="text-blue-100">SEN pupils at/above expected standard</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%+</div>
              <p className="text-blue-100">Teachers rate interface as intuitive</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Accessible to all learners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
