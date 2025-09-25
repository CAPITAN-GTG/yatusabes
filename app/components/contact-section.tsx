"use client"
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-32 bg-black">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
              style={{ 
                fontFamily: 'BOZART, cursive',
                background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            READY TO GET STARTED?
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
            Contact us to discuss which package is right for your business and start amplifying your voice today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:214-562-7755" 
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-4 font-bold hover:scale-105 transition-all duration-300 inline-flex items-center justify-center rounded"
            style={{ fontFamily: 'Bungee, cursive' }}
          >
            CALL NOW: 214-562-7755
          </a>
          <a 
            href="mailto:yatusabesstudio@gmail.com" 
            className="border-2 border-pink-500 text-pink-500 px-8 py-4 font-bold hover:bg-pink-500 hover:text-black transition-all duration-300 inline-flex items-center justify-center rounded"
            style={{ fontFamily: 'Bungee, cursive' }}
          >
            EMAIL US
          </a>
        </div>
      </div>
    </section>
  );
}
