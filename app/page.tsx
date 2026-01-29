import HeroSection from '@/components/HeroSection'
import EfficacyFindings from '@/components/EfficacyFindings'
import FeaturesSection from '@/components/FeaturesSection'
import SchoolSection from '@/components/SchoolSection'
import StudentSection from '@/components/StudentSection'
import AccessibilityShowcase from '@/components/AccessibilityShowcase'
import TeacherTestimonials from '@/components/TeacherTestimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EfficacyFindings />
      <FeaturesSection />
      <SchoolSection />
      <StudentSection />
      <AccessibilityShowcase />
      <TeacherTestimonials />
      <CTASection />
    </>
  )
}
