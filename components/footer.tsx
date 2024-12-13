import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#00a000] mb-4">TechGear</h3>
          <p className="text-sm">Your one-stop shop for all things gaming. We&apos;re passionate about delivering the best gaming experience to our customers.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[#00a000] transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-[#00a000] transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-[#00a000] transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-[#00a000] transition-colors"><Youtube size={20} /></Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Products', 'Build PC', 'Support', 'FAQs'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-[#00a000] transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone size={16} className="mr-2 text-[#00a000]" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2 text-[#00a000]" />
              <span>info@techgear.com</span>
            </li>
            <li className="flex items-center">
              <MapPin size={16} className="mr-2 text-[#00a000]" />
              <span>1234 Gaming Street, Pixel City, GN 12345</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
          <p className="text-sm mb-4">Stay up to date with our latest offers and updates</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#00a000] w-full"
            />
            <button
              type="submit"
              className="bg-[#008000] text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-[#006000] transition-colors w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-[#2a2a2a] text-center text-sm">
        <p>&copy; 2024 TechGear. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

