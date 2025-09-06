"use client"
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Get in touch with YA TU SABES STUDIO
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-black">214-562-7755</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-black">yatusabesstudio@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-black">
                  3201 W. DAVIS ST<br />
                  Dallas, TX 75211
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Clock size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Studio Hours</h3>
                <p className="text-black">
                  By appointment only<br />
                  Contact us to schedule your session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              >
                <option value="">Select a service</option>
                <option value="starter-package">Starter Package - The Launch Pad ($200)</option>
                <option value="pro-package">Pro Package - The Amplifier ($600)</option>
                <option value="elite-package">Elite Package - The Empire Builder ($1200)</option>
                <option value="commercial-advertising">Commercial Advertising</option>
                <option value="start-podcast">Start Your Own Podcast</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600"
                placeholder="Tell us about your project or questions..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Studio Information */}
      <div className="mt-12 sm:mt-16">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Our Studio</h2>
          <p className="text-black text-lg leading-relaxed max-w-4xl mx-auto">
            Located in the heart of Dallas, YA TU SABES STUDIO is your premier destination for professional podcast production, 
            commercial advertising, and community storytelling. Our state-of-the-art facility is equipped with the latest 
            technology to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
}
