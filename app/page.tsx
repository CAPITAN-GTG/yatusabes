import Link from "next/link";
import Image from "next/image";
import { Mic, Users, Heart, Play, TrendingUp, ArrowRight, Star, Headphones, Radio, Volume2, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fresh Creative Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/potcast-1.webp" 
            alt="YA TU SABES STUDIO" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Subtle Moving Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400/60 animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400/60 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400/60 animate-bounce"></div>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content - Takes 7 columns */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Main Title */}
                <div className="mb-12">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    YA TU SABES
                  </h1>
                  <div className="relative inline-block">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400" style={{ fontFamily: 'Nabla, sans-serif' }}>
                      STUDIO
                    </h2>
                    <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400"></div>
                  </div>
                </div>
                
                {/* Mission Statement */}
                <div className="mb-12 max-w-2xl mx-auto lg:mx-0">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                    Amplifying voices of entrepreneurs, artists, and changemakers in our community.
                  </p>
                  <div className="text-lg text-gray-400 italic">
                    "If you're doing something real, this is your platform."
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link 
                    href="/pages/services" 
                    className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-10 py-4 font-bold hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                    style={{ fontFamily: 'Lexend Deca, sans-serif' }}
                  >
                    <span className="relative z-10">View Our Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    href="/pages/contact" 
                    className="group relative border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-black transition-all duration-300 text-center transform hover:scale-105 backdrop-blur-sm"
                    style={{ fontFamily: 'Lexend Deca, sans-serif' }}
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>

              {/* Right Content - Takes 5 columns with creative positioning */}
              <div className="lg:col-span-5 relative">
                {/* Floating Stats Card */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-pink-400/5 to-yellow-400/10"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-400 p-3 mr-4">
                          <TrendingUp className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Monthly Reach</h3>
                      </div>
                      
                      <div className="text-8xl md:text-9xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                        <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                          100K+
                        </span>
                      </div>
                      
                      <p className="text-xl text-gray-300 font-semibold mb-6">Listeners & Viewers</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 h-3">
                        <div className="h-3 bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-3">Growing Strong</p>
                    </div>
                  </div>
                  
                  {/* Floating Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-400 animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/50 mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">Trusted By</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Mic className="w-8 h-8 text-pink-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Radio className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Headphones className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Heart className="w-8 h-8 text-red-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 p-4 hover:bg-white/20 transition-colors">
              <Play className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/potcast-2.webp" 
            alt="Mission Background" 
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Our Mission</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Mission Text */}
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  At YA TU SABES STUDIO, our mission is to amplify the voices of entrepreneurs, artists, and other changemakers within our community by providing a platform for meaningful conversations and impactful storytelling.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  We are dedicated to shining a spotlight on individuals making a difference, offering them the visibility and exposure they deserve through authentic interviews, community-driven dialogue, and support that fuels growth.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  This is more than just a podcast, it's a movement to uplift, empower and connect our people. If you're doing something real, this is your platform.
                </p>
              </div>
              
              {/* Right: Mission Visual */}
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src="/potcast-3.webp" 
                    alt="Our Mission" 
                    width={600} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="text-center mt-20">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400" style={{ fontFamily: 'Nabla, sans-serif' }}>
                YA TU SABES!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Our Services</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Professional podcast and advertising solutions designed to amplify your voice and grow your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Podcast Packages */}
            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/potcast-7.webp" 
                  alt="Podcast Packages" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Mic className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Podcast Packages</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Professional podcast interviews and promotion packages starting at $200.
                </p>
                <Link 
                  href="/pages/services" 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View Packages <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Commercial Advertising */}
            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/potcast-8.webp" 
                  alt="Commercial Advertising" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Volume2 className="w-6 h-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Commercial Advertising</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Professional radio commercials and advertising solutions for maximum reach.
                </p>
                <Link 
                  href="/pages/services" 
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Start Your Own Podcast */}
            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/potcast-9.webp" 
                  alt="Start Your Own Podcast" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Start Your Own Podcast</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Create your podcast with our one-time setup fee of $175. No contracts required.
                </p>
                <Link 
                  href="/pages/start-your-own-podcast" 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Community Resources */}
            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/potcast-10.webp" 
                  alt="Community Resources" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Community Resources</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Supporting our community with valuable resources and meaningful connections.
                </p>
                <Link 
                  href="/pages/community-resources" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Ready to Amplify Your Voice?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join the movement of entrepreneurs, artists, and changemakers making a real impact in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pages/services" 
                  className="bg-cyan-400 text-black px-8 py-4 font-semibold hover:bg-cyan-300 transition-all duration-300 text-center"
                >
                  View Our Services
                </Link>
                <Link 
                  href="/pages/contact" 
                  className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <Image 
                  src="/potcast-4.webp" 
                  alt="Ready to Amplify Your Voice" 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
