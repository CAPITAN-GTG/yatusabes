"use client"
import { Mic, TrendingUp, Star, CheckCircle, ArrowRight, Target, Award } from "lucide-react";
import Image from "next/image";

export default function PodcastPackages() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/30 to-gray-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/5 via-transparent to-pink-400/5"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Podcast
              <span className="block text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Packages
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect package to amplify your voice and grow your audience with professional podcast production.
          </p>
        </div>
        
        {/* Dynamic Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Package */}
          <div className="relative group max-h-[750px]">
            {/* Decorative Squares - Keep these */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-cyan-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border border-cyan-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/10 border border-white/20 hover:border-cyan-400/50 transition-all duration-200 hover:transform hover:scale-102 overflow-hidden h-full flex flex-col">
              {/* Header with Image */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <Image 
                  src="/potcast-7.webp" 
                  alt="Starter Package" 
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mr-4">
                        <Mic className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Starter Package</div>
                        <h3 className="text-xl font-bold text-white">The Launch Pad</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">$200</div>
                      <div className="text-sm text-gray-300">One-time</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col min-h-0">
                <p className="text-gray-300 text-sm mb-6 flex-shrink-0">Perfect for individuals or small brands looking to get started</p>
                
                <div className="space-y-3 mb-8 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2 min-h-0">
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">1 Recorded FB Live Interview (60 minutes)</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">3 DIGITAL REELS for TikTok, FB or IG</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">DIGITAL FLYER to promote you coming on the show</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Logo on screen during podcast</span>
                  </div>
                </div>

                <a 
                  href="/pages/contact?service=starter-package"
                  className="w-full bg-cyan-400 text-black py-3 px-6 font-semibold hover:bg-cyan-300 transition-all duration-300 inline-flex items-center justify-center text-sm flex-shrink-0"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Pro Package */}
          <div className="relative group max-h-[750px]">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-pink-500 text-white px-6 py-2 text-sm font-semibold">
                Most Popular
              </div>
            </div>
            
            {/* Decorative Squares - Keep these */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-pink-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border border-pink-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/10 border border-white/20 hover:border-pink-400/50 transition-all duration-200 hover:transform hover:scale-102 overflow-hidden h-full flex flex-col">
              {/* Header with Image */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <Image 
                  src="/potcast-8.webp" 
                  alt="Pro Package" 
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pink-500/20 border border-pink-400/30 flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-pink-400 uppercase tracking-wider">Pro Package</div>
                        <h3 className="text-xl font-bold text-white">The Amplifier</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-pink-400">$600</div>
                      <div className="text-sm text-gray-300">One-time</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col min-h-0">
                <p className="text-gray-300 text-sm mb-6 flex-shrink-0">Enhanced visibility and reach for growing businesses</p>
                
                <div className="space-y-3 mb-8 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2 min-h-0">
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">1 Recorded FB Live Interview (60 minutes)</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">3 DIGITAL REELS for TikTok, FB or IG</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">DIGITAL FLYER to promote you coming on the show</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Show branding - The Sponsored Ad (8 times a month)</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">3-5 Social media posts for 2 months</span>
                  </div>
                </div>

                <a 
                  href="/pages/contact?service=pro-package"
                  className="w-full bg-pink-400 text-black py-3 px-6 font-semibold hover:bg-pink-300 transition-all duration-300 inline-flex items-center justify-center text-sm flex-shrink-0"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Elite Package */}
          <div className="relative group max-h-[750px]">
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-yellow-500 text-black px-6 py-2 text-sm font-semibold">
                Premium Elite
              </div>
            </div>
            
            {/* Decorative Squares - Keep these */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-yellow-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border border-yellow-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-1/2 left-4 w-4 h-4 border border-purple-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-1/2 right-4 w-4 h-4 border border-purple-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/10 border border-white/20 hover:border-yellow-400/50 transition-all duration-200 hover:transform hover:scale-102 overflow-hidden h-full flex flex-col">
              {/* Header with Image */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <Image 
                  src="/potcast-9.webp" 
                  alt="Elite Package" 
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center mr-6">
                        <Star className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">Elite Package</div>
                        <h3 className="text-2xl font-bold text-white">The Empire Builder</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-yellow-400">$1200</div>
                      <div className="text-sm text-gray-300">One-time</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col min-h-0">
                <p className="text-gray-300 text-sm mb-6 text-center flex-shrink-0">Complete business growth solution with premium features</p>
                
                {/* Scrollable content area */}
                <div className="space-y-3 mb-8 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2 min-h-0">
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">4 Interviews (Once a week)</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Strategy session & monthly content planning</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Ongoing support for 3 months</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">3-5 Social media posts</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Logo on screen during podcast</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">3 DIGITAL REELS for TikTok, FB or IG</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Show branding - The Sponsored Ad</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">Pop up event at your location for 3 hours</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">DJ included</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">FLYER to promote on social media</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">RECORDED VIDEO at your location for social media</span>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/30 transition-colors">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">VENDORS included</span>
                  </div>
                </div>

                <a 
                  href="/pages/contact?service=elite-package"
                  className="w-full bg-yellow-400 text-black py-3 px-6 font-semibold hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center text-sm flex-shrink-0"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
