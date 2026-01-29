export default function AccessibilityShowcase() {
  const features = [
    {
      title: 'Customizable Timers',
      description: 'Choose from multiple timer lengths or use no timer at all. SEN pupils showed 2x+ progress when given timer options.',
      icon: '⏲️',
    },
    {
      title: 'Non-Timed Game Modes',
      description: 'Let pupils work at their own pace with dedicated non-timed games. Perfect for building confidence and reducing anxiety.',
      icon: '🎮',
    },
    {
      title: 'Clear Visual Feedback',
      description: 'Large, readable text. High contrast. Color-blind safe. Keyboard navigation. Full screen reader support.',
      icon: '👁️',
    },
    {
      title: 'Flexible Difficulty',
      description: 'Start where learners are. Progress invisibly. No embarrassment. Automatic adjustment based on performance.',
      icon: '📈',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Accessibility for All Learners
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our efficacy study revealed that customizable timers and non-timed options significantly improved outcomes for SEN pupils.
              Accessibility isn't an add-on—it's core to our design.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-12 border-2 border-dashed border-secondary">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary">
                <p className="font-bold text-primary mb-1">2x+ Progress</p>
                <p className="text-sm text-gray-600">SEN pupils who used customizable timer options</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary">
                <p className="font-bold text-primary mb-1">100% WCAG 2.1 AA</p>
                <p className="text-sm text-gray-600">Full accessibility compliance</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary">
                <p className="font-bold text-primary mb-1">Universal Design</p>
                <p className="text-sm text-gray-600">Benefits all learners, not just those with identified needs</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary">
                <p className="font-bold text-primary mb-1">Teacher Configurable</p>
                <p className="text-sm text-gray-600">Set options per pupil, class, or whole school</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
