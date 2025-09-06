"use client"
import { Mic, Users, Star, CheckCircle, DollarSign, Clock, Volume2, Radio } from "lucide-react";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Professional podcast production and commercial advertising solutions
        </p>
      </div>

      {/* Podcast Packages Section */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Podcast Packages</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Starter Package */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-2 border-blue-200 relative flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
                Starter Package
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">The Launch Pad</h3>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">$200</div>
              <p className="text-black">Perfect for individuals or small brands</p>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">🎙️ 1 Recorded FB Live Interview (60 minutes)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">3 DIGITAL REELS for TikTok, FB or IG</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">DIGITAL FLYER to promote you coming on the show</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Logo on screen during podcast</span>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/pages/contact?service=starter-package"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Get Started - $200
              </a>
            </div>
          </div>

          {/* Pro Package */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-2 border-blue-500 relative flex flex-col h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
                Pro Package
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">The Amplifier</h3>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">$600</div>
              <p className="text-black">Enhanced visibility and reach</p>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">🎙️ 1 Recorded FB Live Interview (60 minutes)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">3 DIGITAL REELS for TikTok, FB or IG</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">DIGITAL FLYER to promote you coming on the show</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Show branding - The Sponsored Ad (8 times a month)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">3-5 Social media posts for 2 months</span>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/pages/contact?service=pro-package"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Get Started - $600
              </a>
            </div>
          </div>

          {/* Elite Package */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-2 border-yellow-400 relative flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="bg-yellow-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
                Elite Package
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">The Empire Builder</h3>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-4">$1200</div>
              <p className="text-black">Complete business growth solution</p>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">🎙️ 4 Interviews (Once a week)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Strategy session & monthly content planning</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Ongoing support for 3 months</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">3-5 Social media posts</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Logo on screen during podcast</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">3 DIGITAL REELS for TikTok, FB or IG</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Show branding - The Sponsored Ad</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">Pop up event at your location for 3 hours</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">DJ included</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">FLYER to promote on social media</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">RECORDED VIDEO at your location for social media</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black">VENDORS included</span>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/pages/contact?service=elite-package"
                className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors inline-block text-center"
              >
                Get Started - $1200
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Advertising Section */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Commercial Advertising</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-2 border-green-500 mb-8">
          <div className="text-center mb-6">
            <div className="bg-green-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
              Radio Advertising
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Professional Radio Commercials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">$2400</div>
              <div className="text-lg text-black">6 Months</div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">$4000</div>
              <div className="text-lg text-black">Yearly (Save $800)</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Long term commitment savings</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">What's Included:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">A 30 to 60 second edited commercial</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Copy of commercial for your marketing needs</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">20 SECOND COMMERCIAL for FB and IG Stories</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Professional voice over provided</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Personalized script in English and/or Spanish</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Up to 2 edits to change anything</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Instrumental song in background</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Runs on Ya Tu Sabes Podcast weekly and ALL podcasts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Items Needed:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black">
              <li>• Business Name</li>
              <li>• Address</li>
              <li>• Phone Number/Email Address</li>
              <li>• Days and Hours of Operation</li>
              <li>• Products/Services offered</li>
              <li>• Business Logo</li>
              <li>• Short description of what you want to advertise</li>
              <li>• Plan of action (The who, what, when, where and why)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-gray-900">Why Radio Advertising Works:</h4>
          <p className="text-black mb-3">
            Radio reaches your target customers with frequency. Advertising works by repetition. 
            Your target customer may well need to hear your commercial three or four times before 
            they respond to your call of action.
          </p>
          <p className="text-black font-semibold">
            To reach this level of frequency, radio advertising is usually more cost-effective than other media.
          </p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="/pages/contact?service=commercial-advertising"
            className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Get Started - Commercial Advertising
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-black mb-6">
          Contact us to discuss which package is right for your business
        </p>
        <div className="space-x-4">
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
