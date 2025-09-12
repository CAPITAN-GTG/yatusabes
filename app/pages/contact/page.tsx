"use client"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

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
    <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <MessageCircle className="w-8 h-8 mr-3 text-cyan-400" />
        Send Us a Message
      </h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-colors"
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
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors resize-none"
            placeholder="Tell us about your project or questions..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 text-black py-4 px-6 font-semibold hover:bg-cyan-300 transition-colors duration-200 flex items-center justify-center group"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Professional Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Studio Image Background */}
        <div className="absolute inset-0">
          <Image 
            src="/studios.png" 
            alt="YA TU SABES Studio" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Contact
                <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mt-2">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                Ready to amplify your voice? Get in touch with our professional team at YA TU SABES STUDIO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:214-562-7755"
                  className="inline-flex items-center bg-cyan-400 text-black px-8 py-4 font-semibold hover:bg-cyan-300 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 214-562-7755
                </a>
                <a 
                  href="mailto:yatusabesstudio@gmail.com"
                  className="inline-flex items-center border-2 border-pink-400 text-pink-400 px-8 py-4 font-semibold hover:bg-pink-400 hover:text-black transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're here to help bring your vision to life. Reach out to us through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-4 mr-6 flex-shrink-0">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:214-562-7755" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                      214-562-7755
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Available by appointment</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-4 mr-6 flex-shrink-0">
                    <Mail size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:yatusabesstudio@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
                      yatusabesstudio@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-4 mr-6 flex-shrink-0">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Studio Location</h3>
                    <p className="text-gray-300 text-lg">
                      3201 W. DAVIS ST<br />
                      Dallas, TX 75211
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Professional recording studio</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-4 mr-6 flex-shrink-0">
                    <Clock size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Studio Hours</h3>
                    <p className="text-gray-300 text-lg">
                      By appointment only
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Contact us to schedule your session</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Suspense fallback={
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <div className="animate-pulse">
                  <div className="h-8 bg-white/20 mb-6"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20"></div>
                    <div className="h-12 bg-white/20"></div>
                  </div>
                </div>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Professional Studio Information */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-12 text-center border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">About Our Studio</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Located in the heart of Dallas, YA TU SABES STUDIO is your premier destination for professional podcast production, 
              commercial advertising, and community storytelling. Our state-of-the-art facility is equipped with the latest 
              technology to bring your vision to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-cyan-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-cyan-400"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Equipment</h3>
                <p className="text-gray-300">State-of-the-art recording technology</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-pink-400"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Experienced professionals dedicated to your success</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-400"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Full Service</h3>
                <p className="text-gray-300">From concept to distribution, we handle it all</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
