'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="font-bold text-lg text-primary">Sumdog</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#evidence" className="text-gray-700 hover:text-primary font-medium">
            Evidence & Impact
          </Link>
          <Link href="#for-schools" className="text-gray-700 hover:text-primary font-medium">
            For Schools
          </Link>
          <Link href="#for-families" className="text-gray-700 hover:text-primary font-medium">
            For Families
          </Link>
          <Link href="#support" className="text-gray-700 hover:text-primary font-medium">
            Support
          </Link>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-900 transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#evidence" className="text-gray-700 hover:text-primary font-medium">
                Evidence & Impact
              </Link>
              <Link href="#for-schools" className="text-gray-700 hover:text-primary font-medium">
                For Schools
              </Link>
              <Link href="#for-families" className="text-gray-700 hover:text-primary font-medium">
                For Families
              </Link>
              <Link href="#support" className="text-gray-700 hover:text-primary font-medium">
                Support
              </Link>
              <button className="w-full px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-900">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
