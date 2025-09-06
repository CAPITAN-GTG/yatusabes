"use client"
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="flex mb-5 items-center space-x-3 justify-center sm:justify-start">
                <Image 
                  src="/studios.png" 
                  alt="YA TU SABES STUDIO Logo" 
                  width={80} 
                  height={80}
                  className="rounded-lg"
                />
              </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Amplifying voices of entrepreneurs, artists, and changemakers in our community.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-normal mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pages/community-resources" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Community Resources
                </Link>
              </li>
              <li>
                <Link href="/pages/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pages/start-your-own-podcast" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Start Your Own Podcast
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-normal mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center sm:justify-start">
                <Mail size={16} className="mr-2 text-gray-300" />
                <a 
                  href="mailto:yatusabesstudio@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  yatusabesstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone size={16} className="mr-2 text-gray-300" />
                <a 
                  href="tel:+12145627755"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  214-562-7755
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin size={16} className="mr-2 text-gray-300" />
                <a 
                  href="https://maps.google.com/?q=3201+W.+DAVIS+ST,+Dallas,+TX+75211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  3201 W. DAVIS ST, Dallas, TX 75211
                </a>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-normal mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-normal mb-4">Follow Us</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start">
                <Instagram size={16} className="mr-2" />
                <a 
                  href="https://www.instagram.com/yatusabesradio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  @yatusabesradio
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-sm mr-2">📱</span>
                <a 
                  href="https://tiktok.com/@yatusabesradio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  TikTok: @yatusabesradio
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Facebook size={16} className="mr-2" />
                <a 
                  href="https://www.facebook.com/jose.huerta.595385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Jose Huerta
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 w-full mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 YA TU SABES STUDIO. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center sm:text-right">
            powered by{" "}
            <Link
              href="https://grimo-dev.vercel.app"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              GrimoDev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
