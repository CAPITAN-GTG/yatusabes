"use client"
import { Users, BookOpen, Heart, Lightbulb, ArrowRight, Star, Target, Award, Zap, Globe, TrendingUp, Handshake } from "lucide-react";
import Image from "next/image";

export default function CommunityResources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/YTStudio-6.webp" 
            alt="Community Resources" 
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Community Resources
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto lg:mx-0 mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-8">
                Supporting our community with valuable resources and meaningful connections to help entrepreneurs, artists, and changemakers thrive.
              </p>
              <div className="text-lg text-gray-400 italic">
                "This is more than just a podcast, it's a movement to uplift, empower and connect our people."
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-400 p-4 mr-6">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Community Strong</h3>
                </div>
                <div className="text-8xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    500+
                  </span>
                </div>
                <p className="text-xl text-gray-300">Active Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>How We Support You</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Networking</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Connect with local entrepreneurs, artists, and community leaders
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Education</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Learn from industry experts and successful community members
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Support</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Get support for your business, creative projects, and community initiatives
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Opportunities</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Discover new opportunities for growth and collaboration
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>How to Get Involved</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-sm p-10">
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                For Entrepreneurs
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Share your business story on our podcast</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Connect with other local business owners</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Get featured in our community spotlight</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Access business development resources</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-10">
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                For Artists & Creatives
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Showcase your work to a wider audience</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Collaborate with other creatives</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Get exposure through our platform</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Star size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-gray-300">Access creative development tools</span>
                    <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Stats */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Our Community Impact</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Together, we're building a stronger, more connected community where everyone has the opportunity to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-white bg-clip-text text-transparent">
                    500+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Community Members</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-4"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-white bg-clip-text text-transparent">
                    100+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Successful Collaborations</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-4"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-white bg-clip-text text-transparent">
                    50+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Workshops Hosted</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Be part of a movement that's making a real difference. Connect, collaborate, and grow with like-minded individuals.
          </p>
          <a 
            href="/pages/contact" 
            className="bg-white text-black px-12 py-5 font-bold hover:from-cyan-300 hover:to-pink-300 transition-all duration-300 inline-flex items-center text-xl transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            style={{ fontFamily: 'Lexend Deca, sans-serif' }}
          >
            Get Involved <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </section>
    </div>
  );
}