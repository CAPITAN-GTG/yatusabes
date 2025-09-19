"use client"
import { Mic, Clock, DollarSign, CheckCircle, Star, ArrowRight, Play, Headphones, Zap, Users, Award } from "lucide-react";
import Image from "next/image";

export default function StartYourOwnPodcast() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/YTStudio-9.webp" 
            alt="Start Your Podcast" 
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Subtle Moving Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400/60 animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400/60 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <Image 
                  src="/studios.png" 
                  alt="YA TU SABES STUDIO Logo" 
                  width={120} 
                  height={120}
                  className="shadow-2xl"
                />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Start Your Own Podcast
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto lg:mx-0 mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Create the name of your podcast and launch your voice into the world with our professional setup and support.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-400 p-4 mr-6">
                    <Mic className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Launch Package</h3>
                </div>
                <div className="text-8xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    $175
                  </span>
                </div>
                <p className="text-2xl text-gray-300">One-time setup fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Package */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-12">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-500 text-black py-3 px-8 font-bold mb-6" style={{ fontFamily: 'Lexend Deca, sans-serif' }}>
                One Time Setup Fee
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Podcast Launch Package</h2>
              <div className="text-7xl font-bold text-cyan-400 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>$175</div>
              <p className="text-xl text-gray-300">Everything you need to get started</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  What's Included:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300">Recording and editing your intro for your Podcast</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent mt-2"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300">Training (answer all & any questions you may have)</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent mt-2"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300">Includes Commercials, drops and music for smooth transitions into breaks</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  Requirements:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Star size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300">Minimum of 3 shows a month is required</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Star size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300">No Contracts - Month to Month</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Time Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Studio Time Fees</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-10 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>1 Hour Session</h3>
              </div>
              <div className="text-6xl font-bold text-cyan-400 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>$125</div>
              <p className="text-lg text-gray-300 leading-relaxed">Perfect for shorter interviews or focused content creation</p>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-6"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>2 Hour Session</h3>
              </div>
              <div className="text-6xl font-bold text-pink-400 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>$175</div>
              <p className="text-lg text-gray-300 leading-relaxed">Ideal for longer interviews, multiple segments, or detailed discussions</p>
              <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Studio Time */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Studio Time Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Professional Producer</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent mt-2"></div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Copy of your show</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent mt-2"></div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Software to access FB live streaming</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-2"></div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Complimentary refreshments for host & guest</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mt-2"></div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Professional recording equipment</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-orange-400 to-transparent mt-2"></div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg text-gray-300">Post-production support</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-red-400 to-transparent mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Ready to Launch Your Podcast?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Take the first step towards sharing your voice with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/pages/contact?service=start-podcast"
              className="bg-white text-black px-10 py-5 font-bold hover:from-cyan-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25 inline-flex items-center justify-center text-lg"
              style={{ fontFamily: 'Lexend Deca, sans-serif' }}
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
            <a 
              href="tel:214-562-7755" 
              className="border-2 border-white text-white px-10 py-5 font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
              style={{ fontFamily: 'Lexend Deca, sans-serif' }}
            >
              Call Now: 214-562-7755
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}