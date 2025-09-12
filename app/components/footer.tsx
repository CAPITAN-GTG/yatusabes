"use client"
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black/95 backdrop-blur-md border-t border-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section - Takes more space and larger logo */}
          <div className="lg:col-span-2 text-center lg:text-left mb-8 lg:mb-0">
            <Link 
              href="/" 
              className="block hover:opacity-80 transition-opacity duration-300 mb-6"
            >
              <Image 
                src="/studios.png" 
                alt="YA TU SABES STUDIO Logo" 
                width={200} 
                height={200}
                className="mx-auto lg:mx-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
              />
            </Link>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6 lg:hidden"></div>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Amplifying voices of entrepreneurs, artists, and changemakers in our community.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 bg-white rounded-full mr-3 hidden lg:block"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/pages/services", label: "Services" },
                { href: "/pages/contact", label: "Contact" },
                { href: "/pages/community-resources", label: "Community Resources" },
                { href: "/pages/gallery", label: "Gallery" },
                { href: "/pages/start-your-own-podcast", label: "Start Your Own Podcast" }
              ].map((link) => (
                <li key={link.href} className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 hidden lg:block"></span>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 bg-white rounded-full mr-3 hidden lg:block"></span>
              Connect
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center lg:justify-start">
                <Mail size={16} className="mr-3 text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:yatusabesstudio@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base hover:underline"
                >
                  yatusabesstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+12145627755"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base hover:underline"
                >
                  214-562-7755
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={16} className="mr-3 text-indigo-400 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=3201+W.+DAVIS+ST,+Dallas,+TX+75211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base hover:underline"
                >
                  Dallas, TX
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 mb-6"></div>

            {/* Social Media */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <Instagram size={16} className="mr-3 text-purple-400 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/yatusabesradio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  @yatusabesradio
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <FaTiktok size={16} className="mr-3 text-pink-400 flex-shrink-0" />
                <a 
                  href="https://tiktok.com/@yatusabesradio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  @yatusabesradio
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Facebook size={16} className="mr-3 text-rose-400 flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/jose.huerta.595385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Jose Huerta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2024 YA TU SABES STUDIO. All rights reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <div className="flex space-x-4 text-sm">
                <Link 
                  href="/pages/privacy-policy" 
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/pages/terms-conditions" 
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center sm:text-right">
              powered by{" "}
              <Link
                href="https://grimo-dev.vercel.app"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GrimoDev
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
