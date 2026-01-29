export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Evidence-Based Learning
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Proven Progress for Every Child
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our England efficacy study shows students using Sumdog achieve significantly better results.
              Adaptive learning, strategic engagement, and powerful accessibility features work together.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">2x+</div>
                <p className="text-blue-100 text-sm">SEN pupils at/above expected standard</p>
              </div>
              <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">95%</div>
                <p className="text-blue-100 text-sm">Teachers rate interface as intuitive</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-secondary hover:bg-pink-700 text-white font-bold rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-bold rounded-lg transition-colors">
                View Full Report
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-800 bg-opacity-40 rounded-2xl p-8 border border-blue-400">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold">Intuitive from Day One</p>
                    <p className="text-blue-100 text-sm">Pupils learn independently with minimal setup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold">Strategic Pacing</p>
                    <p className="text-blue-100 text-sm">Built-in prompts encourage accuracy over rushing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">♿</span>
                  <div>
                    <p className="font-bold">Fully Accessible</p>
                    <p className="text-blue-100 text-sm">Customizable timers and non-timed options included</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold">Adaptive & Invisible</p>
                    <p className="text-blue-100 text-sm">Differentiation works best when pupils don't notice it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
