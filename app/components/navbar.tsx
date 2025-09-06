"use client"
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/studios.png" 
                alt="YA TU SABES STUDIO Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/pages/services" className="text-black hover:text-gray-600 transition-colors">
              Services
            </Link>
            <Link href="/pages/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Link href="/pages/community-resources" className="text-black hover:text-gray-600 transition-colors">
              Community Resources
            </Link>
            <Link href="/pages/gallery" className="text-black hover:text-gray-600 transition-colors">
              Gallery
            </Link>
            <Link href="/pages/start-your-own-podcast" className="text-black hover:text-gray-600 transition-colors">
              Start Your Own Podcast
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pages/services" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/pages/contact" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/pages/community-resources" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community Resources
              </Link>
              <Link 
                href="/pages/gallery" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/pages/start-your-own-podcast" 
                className="block px-3 py-2 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Own Podcast
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
