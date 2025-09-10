"use client"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <MessageCircle className="w-8 h-8 mr-3 text-cyan-400" />
        Send Us a Message
      </h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
          >
            <option value="" className="bg-gray-800">Select a service</option>
            <option value="starter-package" className="bg-gray-800">Starter Package - The Launch Pad ($200)</option>
            <option value="pro-package" className="bg-gray-800">Pro Package - The Amplifier ($600)</option>
            <option value="elite-package" className="bg-gray-800">Elite Package - The Empire Builder ($1200)</option>
            <option value="commercial-advertising" className="bg-gray-800">Commercial Advertising</option>
            <option value="start-podcast" className="bg-gray-800">Start Your Own Podcast</option>
            <option value="other" className="bg-gray-800">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Tell us about your project or questions..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
}

export default function Contact() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="block text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mt-2">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Get in touch with YA TU SABES STUDIO and let's amplify your voice together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-4 rounded-full mr-6">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:214-562-7755" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      214-562-7755
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-4 rounded-full mr-6">
                    <Mail size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:yatusabesstudio@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                      yatusabesstudio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-4 rounded-full mr-6">
                    <MapPin size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300">
                      3201 W. DAVIS ST<br />
                      Dallas, TX 75211
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-4 rounded-full mr-6">
                    <Clock size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Studio Hours</h3>
                    <p className="text-gray-300">
                      By appointment only<br />
                      Contact us to schedule your session
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Suspense fallback={<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"><div className="animate-pulse text-white">Loading form...</div></div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">About Our Studio</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Located in the heart of Dallas, YA TU SABES STUDIO is your premier destination for professional podcast production, 
              commercial advertising, and community storytelling. Our state-of-the-art facility is equipped with the latest 
              technology to bring your vision to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
