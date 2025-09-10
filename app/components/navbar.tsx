"use client"
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image 
                src="/studios.png" 
                alt="YA TU SABES STUDIO Logo" 
                width={40} 
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/pages/services" className="text-white hover:text-pink-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/pages/contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link href="/pages/community-resources" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
              Community Resources
            </Link>
            <Link href="/pages/gallery" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Gallery
            </Link>
            <Link href="/pages/start-your-own-podcast" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
              Start Your Own Podcast
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pages/services" 
                className="block px-3 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/pages/contact" 
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/pages/community-resources" 
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Community Resources
              </Link>
              <Link 
                href="/pages/gallery" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/pages/start-your-own-podcast" 
                className="block px-3 py-2 text-white hover:text-orange-400 transition-colors duration-300 font-medium"
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
