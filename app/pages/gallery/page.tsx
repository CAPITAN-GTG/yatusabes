"use client"
import { Camera, Mic, Users, Play, Eye, Heart, Share2, Video, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    { src: "/potcast-1.webp", alt: "Studio Session 1", category: "studio" },
    { src: "/potcast-2.webp", alt: "Interview Session", category: "interview" },
    { src: "/potcast-3.webp", alt: "Community Event", category: "event" },
    { src: "/potcast-4.webp", alt: "Behind the Scenes", category: "behind" },
    { src: "/potcast-5.webp", alt: "Recording Session", category: "studio" },
    { src: "/potcast-6.webp", alt: "Guest Interview", category: "interview" },
    { src: "/potcast-7.webp", alt: "Team Meeting", category: "behind" },
    { src: "/potcast-8.webp", alt: "Live Event", category: "event" },
    { src: "/potcast-9.webp", alt: "Studio Setup", category: "studio" },
    { src: "/potcast-10.webp", alt: "Community Gathering", category: "event" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/potcast-1.webp" 
            alt="Gallery Hero" 
            fill
            className="object-cover opacity-30"
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
                Gallery
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto lg:mx-0 mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Behind the scenes at YA TU SABES STUDIO - capturing the energy, creativity, and community that makes us special.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-sm p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-400 p-3 mr-4">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Visual Stories</h3>
                </div>
                <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    200+
                  </span>
                </div>
                <p className="text-lg text-gray-300">Captured Moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Gallery Categories</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Studio Photos</h3>
              <p className="text-gray-300 text-lg">
                Our professional recording studio and equipment
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-6"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mic className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Podcast Recordings</h3>
              <p className="text-gray-300 text-lg">
                Behind the scenes of our podcast interviews
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-6"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Community Events</h3>
              <p className="text-gray-300 text-lg">
                Community gatherings and networking events
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mt-6"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Special Events</h3>
              <p className="text-gray-300 text-lg">
                Pop-up events and special occasions
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-6"></div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-400 flex items-center justify-center">
                        {image.category === 'studio' && <Mic className="w-6 h-6 text-white" />}
                        {image.category === 'interview' && <Users className="w-6 h-6 text-white" />}
                        {image.category === 'event' && <Camera className="w-6 h-6 text-white" />}
                        {image.category === 'behind' && <Play className="w-6 h-6 text-white" />}
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: 'Lexend Deca, sans-serif' }}>{image.alt}</p>
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & CTA Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Our Visual Journey</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Every image tells a story of connection, creativity, and community impact.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    200+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Episodes Recorded</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-4"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    150+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Guests Featured</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-4"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    50+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Events Hosted</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-4"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    1M+
                  </span>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Total Views</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent mt-4"></div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Want to Be Featured?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                Join our community and be part of our gallery. Whether you're an entrepreneur, artist, or community leader, 
                we'd love to showcase your story and work.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/pages/contact" 
                  className="bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-10 py-4 font-bold hover:from-cyan-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25 inline-flex items-center justify-center text-lg"
                  style={{ fontFamily: 'Lexend Deca, sans-serif' }}
                >
                  Contact Us
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
                <a 
                  href="/pages/start-your-own-podcast" 
                  className="border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
                  style={{ fontFamily: 'Lexend Deca, sans-serif' }}
                >
                  Start Your Podcast
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}