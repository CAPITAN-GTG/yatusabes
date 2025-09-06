"use client"
import { Camera, Mic, Users, Calendar } from "lucide-react";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-black">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Behind the scenes at YA TU SABES STUDIO
        </p>
      </div>

      {/* Gallery Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Studio Photos</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Our professional recording studio and equipment
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mic size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Podcast Recordings</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Behind the scenes of our podcast interviews
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Community Events</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Community gatherings and networking events
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border h-full flex flex-col text-center">
          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Special Events</h3>
          <p className="text-black text-sm sm:text-base flex-grow">
            Pop-up events and special occasions
          </p>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Studio Photo 1</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Podcast Recording 1</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Community Event 1</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Studio Photo 2</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Podcast Recording 2</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Special Event 1</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Studio Photo 3</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Community Event 2</span>
        </div>
        <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">Podcast Recording 3</span>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Videos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Featured Video 1</span>
          </div>
          <div className="bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Featured Video 2</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Want to Be Featured?</h2>
          <p className="text-black text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          Join our community and be part of our gallery. Whether you're an entrepreneur, artist, or community leader, 
          we'd love to showcase your story and work.
        </p>
        <div className="space-x-4">
          <a 
            href="/pages/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
          <a 
            href="/pages/start-your-own-podcast" 
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
          >
            Start Your Podcast
          </a>
        </div>
      </div>
    </div>
  );
}
