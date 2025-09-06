import Link from "next/link";
import Image from "next/image";
import { Mic, Users, Heart, Play, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-900">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center mb-6">
          <Image 
            src="/studios.png" 
            alt="YA TU SABES STUDIO Logo" 
            width={120} 
            height={120}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          YA TU SABES STUDIO
        </h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
          Amplifying voices of entrepreneurs, artists, and changemakers in our community
        </p>
        
        {/* Listener Counter */}
        <div className="miami-gradient text-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg vibrant-hover">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp size={32} className="mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold">Monthly Listeners & Viewers</h2>
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            100,000+
          </div>
          <p className="text-lg opacity-90">Growing community of engaged listeners</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Mission</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
            At YA TU SABES STUDIO, our mission is to amplify the voices of entrepreneurs, artists, and other changemakers within our community by providing a platform for meaningful conversations and impactful storytelling. We are dedicated to shining a spotlight on individuals making a difference, offering them the visibility and exposure they deserve through authentic interviews, community-driven dialogue, and support that fuels growth.
          </p>
          <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
            This is more than just a podcast, it's a movement to uplift, empower and connect our people. If you're doing something real, this is your platform.
          </p>
          <p className="text-lg sm:text-xl font-bold miami-text text-center">YA TU SABES!</p>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col vibrant-hover">
            <div className="flex items-center mb-3">
              <Mic size={24} className="text-blue-600 mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold">Podcast Packages</h3>
            </div>
            <p className="text-black mb-4 text-sm sm:text-base flex-grow">Professional podcast interviews and promotion packages starting at $200.</p>
            <Link href="/pages/services" className="text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
              View Packages →
            </Link>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col vibrant-hover">
            <div className="flex items-center mb-3">
              <Play size={24} className="text-green-600 mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold">Commercial Advertising</h3>
            </div>
            <p className="text-black mb-4 text-sm sm:text-base flex-grow">Professional radio commercials and advertising solutions.</p>
            <Link href="/pages/services" className="text-green-600 hover:text-green-800 font-semibold text-sm sm:text-base">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col vibrant-hover">
            <div className="flex items-center mb-3">
              <Users size={24} className="text-purple-600 mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold">Start Your Own Podcast</h3>
            </div>
            <p className="text-black mb-4 text-sm sm:text-base flex-grow">Create the name of your podcast with our one-time setup fee of $175.</p>
            <Link href="/pages/start-your-own-podcast" className="text-purple-600 hover:text-purple-800 font-semibold text-sm sm:text-base">
              Get Started →
            </Link>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col vibrant-hover">
            <div className="flex items-center mb-3">
              <Heart size={24} className="text-pink-600 mr-3" />
              <h3 className="text-lg sm:text-xl font-semibold">Community Resources</h3>
            </div>
            <p className="text-black mb-4 text-sm sm:text-base flex-grow">Supporting our community with valuable resources and connections.</p>
            <Link href="/pages/community-resources" className="text-pink-600 hover:text-pink-800 font-semibold text-sm sm:text-base">
              Explore →
            </Link>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white rounded-lg p-6 sm:p-8 border">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Partners</h2>
        <div className="text-center">
          <p className="text-black mb-6 text-sm sm:text-base">
            We're proud to work with amazing businesses and organizations in our community.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 items-center">
            <div className="bg-gray-100 h-16 sm:h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">Partner Logo</span>
            </div>
            <div className="bg-gray-100 h-16 sm:h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">Partner Logo</span>
            </div>
            <div className="bg-gray-100 h-16 sm:h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">Partner Logo</span>
            </div>
            <div className="bg-gray-100 h-16 sm:h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">Partner Logo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
