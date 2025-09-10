"use client";

import Image from "next/image";

const packages = [
  {
    name: "6 Months Package",
    duration: "6 Months",
    price: 2400,
    features: [
      "30-60 second edited commercial",
      "Professional voice over provided",
      "Personalized script in English and/or Spanish",
      "Up to 2 edits included",
      "Instrumental background music",
      "Weekly airplay on Ya Tu Sabes Podcast",
      "Copy of commercial for your marketing needs"
    ],
    bestValue: false,
  },
  {
    name: "Yearly Package",
    duration: "12 Months",
    price: 4000,
    features: [
      "30-60 second edited commercial",
      "20-second commercial for FB and IG Stories",
      "Professional voice over provided",
      "Personalized script in English and/or Spanish",
      "Up to 2 edits included",
      "Instrumental background music",
      "Weekly airplay on Ya Tu Sabes Podcast",
      "Copy of commercial for your marketing needs",
      "Runs on ALL podcasts at Ya Tu Sabes Studio"
    ],
    bestValue: true,
  },
];

export default function CommercialAdvertising() {
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        <Image
          src="/potcast-3.webp"
          alt="Podcast Advertising"
          fill
          className="object-cover object-center opacity-20"
          priority
          placeholder="blur"
          blurDataURL="/potcast-3.webp"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-[6]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading with underline */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 relative inline-block">
            Commercial Advertising
            <span className="block w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-green-400 to-green-600" />
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Professional radio commercials designed to reach your target audience with maximum impact and frequency.
          </p>
          <p className="text-base text-gray-400 max-w-4xl mx-auto">
            Radio reaches your target customers with frequency. Advertising works by repetition. 
            Your target customer may need to hear your commercial three or four times before 
            they respond to your call to action. Radio advertising is more cost-effective than 
            other media for reaching this level of frequency.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto mb-16">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Advertising Packages</caption>
            <thead>
              <tr className="bg-gradient-to-r from-green-800 to-green-600">
                <th className="px-4 py-4 text-base font-bold">Package</th>
                <th className="px-4 py-4 text-base font-bold">Duration</th>
                <th className="px-4 py-4 text-base font-bold">Price</th>
                <th className="px-4 py-4 text-base font-bold">Features</th>
                <th className="px-4 py-4 text-base font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr
                  key={pkg.name}
                  className="border-b border-gray-700 hover:bg-green-900/30 transition"
                >
                  <td className="px-4 py-4 font-semibold whitespace-nowrap w-1/5">
                    {pkg.name}
                    {pkg.bestValue && (
                      <div className="text-xs bg-green-500 text-white px-2 py-1 mt-1 inline-block">
                        Best Value
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 w-1/5">{pkg.duration}</td>
                  <td className="px-4 py-4 font-bold w-1/5">
                    ${pkg.price.toLocaleString()}
                    {pkg.bestValue && (
                      <div className="text-sm text-green-400 font-semibold">
                        Save $800
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 w-2/5">
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 w-1/5">
                    <a
                      href="#"
                      aria-label={`Get Started with ${pkg.name}`}
                      className={`inline-block px-4 py-2 text-sm font-semibold transition ${
                        pkg.bestValue
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                    >
                      Get Started
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden mb-16">
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-gray-900/70 p-6 border border-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-green-400 font-medium">{pkg.duration}</p>
                  </div>
                  {pkg.bestValue && (
                    <div className="text-xs bg-green-500 text-white px-2 py-1">
                      Best Value
                    </div>
                  )}
                </div>
                <p className="text-3xl font-extrabold mb-2">
                  ${pkg.price.toLocaleString()}
                </p>
                {pkg.bestValue && (
                  <p className="text-sm text-green-400 font-semibold mb-4">
                    Save $800
                  </p>
                )}
                <ul className="list-disc list-inside text-gray-400 mb-6 text-sm space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  aria-label={`Get Started with ${pkg.name}`}
                  className={`block text-center px-6 py-3 font-semibold transition ${
                    pkg.bestValue
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-8 md:hidden mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-gray-900/70 p-6 shadow-lg border border-gray-800"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-green-400 font-medium">{pkg.duration}</p>
                </div>
                {pkg.bestValue && (
                  <div className="text-xs bg-green-500 text-white px-2 py-1">
                    Best Value
                  </div>
                )}
              </div>
              <p className="text-3xl font-extrabold mb-2">
                ${pkg.price.toLocaleString()}
              </p>
              {pkg.bestValue && (
                <p className="text-sm text-green-400 font-semibold mb-4">
                  Save $800
                </p>
              )}
              <ul className="list-disc list-inside text-gray-400 mb-6 text-sm space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                aria-label={`Get Started with ${pkg.name}`}
                className={`block text-center px-6 py-3 font-semibold transition ${
                  pkg.bestValue
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* What You Need to Provide Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What You Need to Provide</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-900/50 p-6 border border-gray-700">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-green-400">Business Information</h4>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>• Business Name & Address</li>
                <li>• Phone Number/Email Address</li>
                <li>• Days and Hours of Operation</li>
                <li>• Products/Services offered</li>
                <li>• Business Logo</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 border border-gray-700">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-green-400">Advertising Details</h4>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>• Short description of what you want to advertise</li>
                <li>• Plan of action (The who, what, when, where and why)</li>
                <li>• Target audience information</li>
                <li>• Call to action preferences</li>
                <li>• Any specific messaging requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text + Buttons */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            Ready to take your brand to the next level? Choose a package and let
            us help tell your story in a way that resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 font-bold transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 font-bold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
