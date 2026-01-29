export default function EfficacyFindings() {
  const findings = [
    {
      icon: '🎓',
      title: 'Engagement Without Compromise',
      description: 'Gamification drives enthusiasm, but our strategic friction features ensure pupils focus on accuracy. The "Don\'t Rush" prompt proved highly effective.',
      stat: '85% of teachers',
      statDesc: 'found friction features valuable for refocusing attention',
    },
    {
      icon: '🧠',
      title: 'Invisible Differentiation',
      description: 'Adaptive difficulty works best when students remain unaware. Our intelligent system adjusts seamlessly without signposting.',
      stat: 'Highest engagement',
      statDesc: 'when pupils perceive equal challenge levels',
    },
    {
      icon: '♿',
      title: 'Accessibility at the Core',
      description: 'Customizable timers and non-timed game modes are essential. SEN pupils showed 2x+ progress when given these options.',
      stat: '2x+ progress',
      statDesc: 'for SEN pupils with accessibility features',
    },
    {
      icon: '🔄',
      title: 'Curriculum Alignment',
      description: 'Teachers report faster adoption when content aligns with established schemes like White Rose. Less friction in implementation.',
      stat: 'Faster adoption',
      statDesc: 'with aligned curriculum mapping',
    },
  ]

  return (
    <section id="evidence" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Evidence-Based Design
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature in Sumdog is informed by our England efficacy study.
            Here's what we learned about effective learning platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {findings.map((finding, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{finding.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {finding.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {finding.description}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary">{finding.stat}</p>
                <p className="text-sm text-gray-600">{finding.statDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
