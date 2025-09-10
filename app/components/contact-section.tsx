"use client"
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/30 to-gray-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/5 via-transparent to-pink-400/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 border border-purple-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-yellow-400/20 rotate-12 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="block text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Get Started?
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Contact us to discuss which package is right for your business and start amplifying your voice today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:214-562-7755" 
            className="bg-cyan-400 text-black px-8 py-4 font-semibold hover:bg-cyan-300 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-cyan-400/25"
          >
            Call Now: 214-562-7755
          </a>
          <a 
            href="mailto:yatusabesstudio@gmail.com" 
            className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
