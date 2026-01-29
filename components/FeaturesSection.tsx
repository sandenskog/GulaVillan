export default function FeaturesSection() {
  const features = [
    {
      title: 'Strategic Friction',
      description: 'Our "Don\'t Rush" prompts encourage careful problem-solving. Pupils slow down, think deeply, and get better results—all without reducing engagement.',
      icon: '⏱️',
      benefits: ['Improves accuracy', 'Maintains engagement', 'Teacher-configurable'],
    },
    {
      title: 'Invisible Adaptation',
      description: 'Intelligent difficulty adjustment works silently. Pupils stay motivated because they perceive consistent challenge—no visible "easier" or "harder" modes.',
      icon: '🎯',
      benefits: ['Seamless progression', 'Maintains confidence', 'Data-driven adjustment'],
    },
    {
      title: 'Accessibility First',
      description: 'Customizable timers, non-timed modes, and flexible settings ensure all learners—including SEN pupils—can succeed and progress significantly.',
      icon: '♿',
      benefits: ['Multiple timer options', 'Non-timed games', 'Inclusive design'],
    },
    {
      title: 'Curriculum Mapping',
      description: 'Content aligned with White Rose and other established schemes. Teachers spend less time on setup and more time seeing results.',
      icon: '📚',
      benefits: ['White Rose aligned', 'Easy implementation', 'Faster adoption'],
    },
    {
      title: 'Intuitive Interface',
      description: 'Pupils jump in immediately with minimal instruction. Teachers praised the straightforward design that requires almost no onboarding.',
      icon: '✨',
      benefits: ['Zero learning curve', 'Instant engagement', 'Self-explanatory'],
    },
    {
      title: 'Progress Analytics',
      description: 'Teachers get clear data without complexity. Track progress, identify intervention needs, and celebrate wins with actionable insights.',
      icon: '📊',
      benefits: ['Real-time insights', 'Intervention alerts', 'Celebration moments'],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Built on What Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature designed to maximize learning outcomes while maintaining engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-secondary font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
