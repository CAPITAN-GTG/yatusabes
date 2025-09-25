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
      <section className="relative min-h-screen overflow-hidden street-bg graffiti-texture">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/newpics-1.jpeg" 
            alt="Our Services" 
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
        </div>

        {/* Main Content - Centered Minimalistic Layout */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            
            {/* Main Title with BOZART Font and Gradient */}
            <div className="mb-8 relative inline-block">
              {/* Black backdrop text - offset behind */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight absolute top-2 left-2 animate-fade-in" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    color: '#000000',
                    zIndex: 1,
                    whiteSpace: 'nowrap'
                  }}>
                OUR SERVICES
              </h1>
              
              {/* Main gradient text */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in relative z-10" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)',
                    whiteSpace: 'nowrap'
                  }}>
                OUR SERVICES
              </h1>
            </div>
              
            {/* Quote - Small White Text */}
            <div className="mb-12 max-w-2xl mx-auto">
              <blockquote className="text-sm md:text-base text-white leading-relaxed font-normal">
                "Professional podcast production and commercial advertising solutions designed to amplify your voice and grow your audience."
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('podcast-packages')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group relative bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-3 font-bold hover:scale-105 transition-all duration-300 text-center transform rounded"
                style={{ fontFamily: 'Bungee, cursive' }}
              >
                <span className="relative z-10">VIEW PACKAGES</span>
              </button>
              <button 
                onClick={() => {
                  document.getElementById('commercial-advertising')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group relative border-2 border-pink-500 text-pink-500 px-8 py-3 font-bold hover:scale-105 hover:bg-pink-500 hover:text-black transition-all duration-300 text-center transform rounded"
                style={{ fontFamily: 'Bungee, cursive' }}
              >
                <span className="relative z-10">COMMERCIAL ADS</span>
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Import Components */}
      <div id="podcast-packages">
        <PodcastPackages />
      </div>
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      
      <div id="commercial-advertising">
        <CommercialAdvertising />
      </div>
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <ContactSection />
    </div>
  );
}
