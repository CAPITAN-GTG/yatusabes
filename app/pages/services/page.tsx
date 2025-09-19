"use client"
import { Mic, Radio, Zap } from "lucide-react";
import Image from "next/image";
import PodcastPackages from "../../components/podcast-packages";
import CommercialAdvertising from "../../components/commercial-advertising";
import ContactSection from "../../components/contact-section";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/YTStudio-2.webp" 
            alt="Our Services" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-pink-400/30 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border border-yellow-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 border border-purple-400/30 rotate-12 animate-bounce"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* Animated Title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Our
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mt-2 animate-pulse">
                    Services
                  </span>
                </h1>
                <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
                Professional podcast production and commercial advertising solutions designed to amplify your voice and grow your audience.
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/10 border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-200 hover:transform hover:scale-102">
                  <div className="w-16 h-16 bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Podcast Packages</h3>
                  <p className="text-gray-300 text-sm">Professional interviews starting at $200</p>
                </div>
                
                <div className="bg-white/10 border border-white/20 p-6 hover:border-pink-400/50 transition-all duration-200 hover:transform hover:scale-102">
                  <div className="w-16 h-16 bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                    <Radio className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Commercial Advertising</h3>
                  <p className="text-gray-300 text-sm">Radio commercials from $2,400</p>
                </div>
                
                <div className="bg-white/10 border border-white/20 p-6 hover:border-purple-400/50 transition-all duration-200 hover:transform hover:scale-102">
                  <div className="w-16 h-16 bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm">Tailored packages for your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Import Components */}
      <PodcastPackages />
      <CommercialAdvertising />
      <ContactSection />
    </div>
  );
}
