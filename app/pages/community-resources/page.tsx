"use client"
import { Users, BookOpen, Heart, Lightbulb } from "lucide-react";

export default function CommunityResources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-black">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Community Resources</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Supporting our community with valuable resources and connections
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Community Mission</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
            At YA TU SABES STUDIO, we believe in the power of community. Our mission is to amplify the voices of entrepreneurs, 
            artists, and changemakers within our community by providing a platform for meaningful conversations and impactful storytelling.
          </p>
          <p className="text-base sm:text-lg text-black leading-relaxed">
            We are dedicated to shining a spotlight on individuals making a difference, offering them the visibility and exposure 
            they deserve through authentic interviews, community-driven dialogue, and support that fuels growth.
          </p>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Networking</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Connect with local entrepreneurs, artists, and community leaders
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Education</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Learn from industry experts and successful community members
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Support</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Get support for your business, creative projects, and community initiatives
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Opportunities</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Discover new opportunities for growth and collaboration
          </p>
        </div>
      </div>

      {/* Featured Community Members */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Community Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border">
            <div className="bg-gray-100 h-32 sm:h-40 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Community Member Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Local Entrepreneur</h3>
            <p className="text-black text-sm sm:text-base">
              Successfully launched their business with help from our community resources and podcast platform.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border">
            <div className="bg-gray-100 h-32 sm:h-40 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Community Member Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Local Artist</h3>
            <p className="text-black text-sm sm:text-base">
              Gained recognition and built their audience through our podcast interviews and community support.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border sm:col-span-2 lg:col-span-1">
            <div className="bg-gray-100 h-32 sm:h-40 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Community Member Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Leader</h3>
            <p className="text-black text-sm sm:text-base">
              Making a difference in our community with initiatives supported by YA TU SABES STUDIO.
            </p>
          </div>
        </div>
      </div>

      {/* How to Get Involved */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">How to Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">For Entrepreneurs</h3>
            <ul className="space-y-2 text-black">
              <li>• Share your business story on our podcast</li>
              <li>• Connect with other local business owners</li>
              <li>• Get featured in our community spotlight</li>
              <li>• Access business development resources</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">For Artists & Creatives</h3>
            <ul className="space-y-2 text-black">
              <li>• Showcase your work to a wider audience</li>
              <li>• Collaborate with other creatives</li>
              <li>• Get exposure through our platform</li>
              <li>• Access creative development tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
