"use client"
import Link from "next/link";
import Image from "next/image";
import { Mic, Users, Heart, Play, TrendingUp, ArrowRight, Star, Headphones, Radio, Volume2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Count-up animation component
function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Fresh Creative Hero Section */}
      <section className="relative min-h-screen overflow-hidden street-bg graffiti-texture">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            src="https://fs73aumn4wabpfc3.public.blob.vercel-storage.com/bg-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
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
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight absolute top-2 left-2 animate-fade-in" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    color: '#000000',
                    zIndex: 1,
                    whiteSpace: 'nowrap'
                  }}>
                YA TU SABES STUDIO
              </h1>
              
              {/* Main gradient text */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in relative z-10" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)',
                    whiteSpace: 'nowrap'
                  }}>
                YA TU SABES STUDIO
              </h1>
              
              {/* 100K Viewers Counter */}
              <div className="mt-8 relative inline-block">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fade-in relative z-10" 
                     style={{ 
                       fontFamily: 'BOZART, cursive',
                       color: '#00C3D0',
                       filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)',
                       whiteSpace: 'nowrap'
                     }}>
                  <CountUpAnimation end={100} />K VIEWERS
                </div>
              </div>
            </div>

            {/* Quote - Small White Text */}
            <div className="mb-12 max-w-2xl mx-auto">
              <blockquote className="text-sm md:text-base text-white leading-relaxed font-normal">
                "If you're doing something real, this is your platform."
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pages/services" 
                className="group relative bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-3 font-bold hover:scale-110 transition-all duration-300 text-center transform"
                style={{ fontFamily: 'Bungee, cursive' }}
              >
                <span className="relative z-10">VIEW OUR SERVICES</span>
              </Link>
              <Link 
                href="/pages/contact" 
                className="group relative border-2 border-pink-500 text-pink-500 px-8 py-3 font-bold hover:scale-110 hover:bg-pink-500 hover:text-black transition-all duration-300 text-center transform"
                style={{ fontFamily: 'Bungee, cursive' }}
              >
                <span className="relative z-10">GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-cyan-400 neon-glow flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Mission Section */}
      <section className="relative py-32 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
                style={{ 
                  fontFamily: 'BOZART, cursive',
                  background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                }}>
              OUR MISSION
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
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
            src="/studios.png" 
            alt="Our Mission" 
            width={1200} 
            height={1200}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="text-center mt-20">
              <div className="text-4xl md:text-5xl font-bold" 
                   style={{ 
                     fontFamily: 'BOZART, cursive',
                     background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                     filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                   }}>
                YA TU SABES!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      {/* Services Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
                style={{ 
                  fontFamily: 'BOZART, cursive',
                  background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                }}>
              OUR SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto font-medium">
              Professional podcast and advertising solutions designed to amplify your voice and grow your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Podcast Packages */}
            <div className="bg-gray-900 border border-cyan-400 hover:border-cyan-300 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/newpics-3.jpeg" 
                  alt="Podcast Packages" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Mic className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold neon-text" style={{ fontFamily: 'Bungee, cursive' }}>PODCAST PACKAGES</h3>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow font-medium" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  Professional podcast interviews and promotion packages starting at $200.
                </p>
                <Link 
                  href="/pages/services" 
                  className="inline-flex items-center neon-text hover:hot-pink-text font-bold transition-colors" style={{ fontFamily: 'Righteous, cursive' }}
                >
                  VIEW PACKAGES <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Commercial Advertising */}
            <div className="bg-gray-900 border border-pink-500 hover:border-pink-300 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/newpics-4.jpeg" 
                  alt="Commercial Advertising" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Volume2 className="w-6 h-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold hot-pink-text" style={{ fontFamily: 'Bungee, cursive' }}>COMMERCIAL ADVERTISING</h3>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow font-medium" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  Professional radio commercials and advertising solutions for maximum reach.
                </p>
                <Link 
                  href="/pages/services" 
                  className="inline-flex items-center hot-pink-text hover:neon-text font-bold transition-colors" style={{ fontFamily: 'Righteous, cursive' }}
                >
                  LEARN MORE <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Start Your Own Podcast */}
            <div className="bg-gray-900 border border-purple-500 hover:border-purple-300 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/newpics-5.jpeg" 
                  alt="Start Your Own Podcast" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-purple-400" style={{ fontFamily: 'Bungee, cursive', textShadow: '0 0 3px rgba(138, 43, 226, 0.4)' }}>START YOUR OWN PODCAST</h3>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow font-medium" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  Create your podcast with our one-time setup fee of $175. No contracts required.
                </p>
                <Link 
                  href="/pages/start-your-own-podcast" 
                  className="inline-flex items-center text-purple-400 hover:neon-text font-bold transition-colors" style={{ fontFamily: 'Righteous, cursive', textShadow: '0 0 2px rgba(138, 43, 226, 0.3)' }}
                >
                  GET STARTED <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Community Resources */}
            <div className="bg-gray-900 border border-yellow-400 hover:border-yellow-300 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/newpics-6.jpeg" 
                  alt="Community Resources" 
                  width={400} 
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-400" style={{ fontFamily: 'Bungee, cursive', textShadow: '0 0 3px rgba(204, 255, 0, 0.4)' }}>COMMUNITY RESOURCES</h3>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow font-medium" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  Supporting our community with valuable resources and meaningful connections.
                </p>
                <Link 
                  href="/pages/community-resources" 
                  className="inline-flex items-center text-yellow-400 hover:hot-pink-text font-bold transition-colors" style={{ fontFamily: 'Righteous, cursive', textShadow: '0 0 2px rgba(204, 255, 0, 0.3)' }}
                >
                  EXPLORE <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                  }}>
                READY TO AMPLIFY YOUR VOICE?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed font-medium">
                Join the movement of entrepreneurs, artists, and changemakers making a real impact in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pages/services" 
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-4 font-bold hover:scale-105 transition-all duration-300 text-center rounded"
                  style={{ fontFamily: 'Bungee, cursive' }}
                >
                  VIEW OUR SERVICES
                </Link>
                <Link 
                  href="/pages/contact" 
                  className="border-2 border-pink-500 text-pink-500 px-8 py-4 font-bold hover:bg-pink-500 hover:text-black transition-all duration-300 text-center rounded"
                  style={{ fontFamily: 'Bungee, cursive' }}
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src="/newpics-12.jpg" 
                    alt="Ready to Amplify Your Voice" 
                    width={1900} 
                    height={1900}
                    quality={100}
                    priority
                    className="w-full h-full object-cover rounded-tr-full rounded-tl-full"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Bungee, cursive' }}>SPONSORS</h3>
          </div>
          
          {/* Infinite Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of sponsors */}
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-cyan-400 rounded">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-pink-500 rounded">
                  <Mic className="w-8 h-8 text-pink-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-yellow-400 rounded">
                  <Radio className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-purple-500 rounded">
                  <Headphones className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-red-400 rounded">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-green-400 rounded">
                  <Play className="w-8 h-8 text-green-400" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-cyan-400 rounded">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-pink-500 rounded">
                  <Mic className="w-8 h-8 text-pink-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-yellow-400 rounded">
                  <Radio className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-purple-500 rounded">
                  <Headphones className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-red-400 rounded">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 p-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-green-400 rounded">
                  <Play className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
