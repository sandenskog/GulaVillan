import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sumdog - Evidence-Based Learning for Every Child',
  description: 'Proven efficacy in boosting maths progress. Adaptive learning with strategic engagement for ages 5-14.',
  keywords: ['maths', 'learning', 'education', 'efficacy', 'evidence-based'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-gb">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
