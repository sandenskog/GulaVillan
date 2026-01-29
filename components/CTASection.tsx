export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to See Evidence-Based Results?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Start a free trial and experience the same evidence-backed features and strategic design
          that improved pupil progress in our efficacy study.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-secondary hover:bg-pink-700 text-white font-bold rounded-lg transition-colors text-lg">
            Start Free Trial for Schools
          </button>
          <button className="px-8 py-4 bg-secondary hover:bg-pink-700 text-white font-bold rounded-lg transition-colors text-lg">
            Start Free Trial for Families
          </button>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <p className="text-blue-100 mb-4">Questions?</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-blue-100">
            <a href="mailto:support@sumdog.com" className="hover:text-white font-medium">
              support@sumdog.com
            </a>
            <span>•</span>
            <a href="tel:01312261511" className="hover:text-white font-medium">
              0131 226 1511
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
