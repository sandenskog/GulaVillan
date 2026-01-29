export default function TeacherTestimonials() {
  const testimonials = [
    {
      quote: "It's been so straightforward from my experience, I haven't really needed that much communication. The interface is intuitive.",
      author: 'Teacher, Efficacy Study',
      role: 'Primary School',
      focus: 'Intuitive Design',
    },
    {
      quote: "The 'Don't Rush' feature is really useful, particularly for the boys who want to get through quickly. It refocuses them on accuracy.",
      author: 'Teacher, Efficacy Study',
      role: 'Primary School',
      focus: 'Strategic Friction',
    },
    {
      quote: "Pupils just get their logins and they're straight in. There's never any reluctance to use it. The engagement is natural and sustained.",
      author: 'Teacher, Efficacy Study',
      role: 'Primary School',
      focus: 'Engagement',
    },
    {
      quote: "The customizable timer options and non-timed games made a real difference for our SEN pupils. They could finally succeed.",
      author: 'Teacher, Efficacy Study',
      role: 'SEN Specialist',
      focus: 'Accessibility',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Teachers Know What Works
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real feedback from educators in our England efficacy study
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800 bg-opacity-50 rounded-xl p-8 border border-blue-400">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-300">★</span>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-blue-400 pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-blue-100 text-sm">{testimonial.role}</p>
                <div className="mt-3 inline-block bg-blue-900 px-3 py-1 rounded-full text-xs">
                  {testimonial.focus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
