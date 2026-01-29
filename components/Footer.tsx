import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">S</span>
              </div>
              <span className="font-bold text-lg">Sumdog</span>
            </div>
            <p className="text-blue-100 text-sm">Evidence-based learning for every child.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Schools</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link href="#" className="hover:text-white">Features</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Families</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link href="#" className="hover:text-white">Home Learning</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="mailto:support@sumdog.com" className="hover:text-white">support@sumdog.com</a></li>
              <li><a href="tel:01312261511" className="hover:text-white">0131 226 1511</a></li>
              <li><Link href="#" className="hover:text-white">Help Centre</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">&copy; 2024 Sumdog. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-blue-100">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
