export default function StudentSection() {
  return (
    <section id="for-families" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-secondary to-pink-600 rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Mindful Learning</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">⚡</span>
                  <div>
                    <p className="font-bold">No Rushing Required</p>
                    <p className="text-pink-100 text-sm">Take your time. Think deeply. Get it right.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎮</span>
                  <div>
                    <p className="font-bold">Fun, Not Frantic</p>
                    <p className="text-pink-100 text-sm">Engaging games designed for real learning, not speed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✨</span>
                  <div>
                    <p className="font-bold">Your Own Pace</p>
                    <p className="text-pink-100 text-sm">Choose timer lengths or play with no timer. You're in control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Learning That Feels Right
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our efficacy study showed something important: when students feel rushed, they rush their thinking.
              Sumdog is designed differently.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With strategic pacing features and timer flexibility, you can focus on actually understanding maths,
              not just getting through problems quickly. The result? Better learning and better results.
            </p>
            <div className="bg-light rounded-xl p-6 border-l-4 border-secondary">
              <p className="font-bold text-primary mb-2">Why This Matters</p>
              <p className="text-gray-600">
                Students who pause and think carefully before answering show stronger conceptual understanding
                and better long-term retention. We've built that pause into Sumdog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
