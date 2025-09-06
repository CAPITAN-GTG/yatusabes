"use client"
import { Mic, Clock, DollarSign, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export default function StartYourOwnPodcast() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-black">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-6">
          <Image 
            src="/studios.png" 
            alt="YA TU SABES STUDIO Logo" 
            width={80} 
            height={80}
            className="rounded-xl shadow-md"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Start Your Own Podcast</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Create the name of your podcast and launch your voice into the world
        </p>
      </div>

      {/* Main Package */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-2 border-blue-500 mb-8 sm:mb-12">
        <div className="text-center mb-6">
          <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
            One Time Setup Fee
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Podcast Launch Package</h2>
          <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">$175</div>
          <p className="text-lg text-black">Everything you need to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What's Included:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Recording and editing your intro for your Podcast</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Training (answer all & any questions you may have)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Includes Commercials, drops and music for smooth transitions into breaks</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Requirements:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Minimum of 3 shows a month is required</span>
              </li>
              <li className="flex items-start">
                <Star size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">No Contracts - Month to Month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Studio Time Pricing */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Studio Time Fees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Clock size={24} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">1 Hour Session</h3>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">$125</div>
            <p className="text-black">Perfect for shorter interviews or focused content creation</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Clock size={24} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">2 Hour Session</h3>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">$175</div>
            <p className="text-black">Ideal for longer interviews, multiple segments, or detailed discussions</p>
          </div>
        </div>
      </div>

      {/* What's Included in Studio Time */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Studio Time Includes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Professional Producer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Copy of your show</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Software to access FB live streaming</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Complimentary refreshments for host & guest</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Professional recording equipment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Post-production support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Podcast?</h2>
        <p className="text-lg text-black mb-6">
          Take the first step towards sharing your voice with the world
        </p>
        <div className="space-x-4">
          <a 
            href="/pages/contact?service=start-podcast"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Get Started - $175
          </a>
          <a 
            href="tel:214-562-7755" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Call Now: 214-562-7755
          </a>
          <a 
            href="mailto:yatusabesstudio@gmail.com" 
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
