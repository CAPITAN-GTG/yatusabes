"use client"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowRight, Mic, Users, Zap } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { toast } from 'react-toastify';

function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !selectedService) {
      toast.error('Please fill in all required fields and select a service');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Thank you for your message! We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSelectedService('');
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 p-8 border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center" 
          style={{ 
            fontFamily: 'BOZART, cursive',
            background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
          }}>
        <MessageCircle className="w-8 h-8 mr-3 text-cyan-400" />
        SEND US A MESSAGE
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors rounded"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors rounded"
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
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors rounded"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-colors rounded"
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
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-colors resize-none rounded"
            placeholder="Tell us about your project or questions..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-4 px-6 font-bold hover:from-cyan-300 hover:to-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group rounded shadow-lg hover:shadow-cyan-400/25"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
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
            src="/newpics-6.jpeg" 
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" 
                  style={{ 
                    fontFamily: 'BOZART, cursive',
                    background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                  }}>
                CONTACT US
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                Ready to amplify your voice? Get in touch with our professional team at YA TU SABES STUDIO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:214-562-7755"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-4 font-bold hover:from-cyan-300 hover:to-cyan-500 transition-all duration-300 rounded shadow-lg hover:shadow-cyan-400/25"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 214-562-7755
                </a>
                <a 
                  href="mailto:yatusabesstudio@gmail.com"
                  className="inline-flex items-center border-2 border-pink-500 text-pink-500 px-8 py-4 font-bold hover:bg-pink-500 hover:text-black transition-all duration-300 rounded"
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4" 
                    style={{ 
                      fontFamily: 'BOZART, cursive',
                      background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                    }}>GET IN TOUCH</h2>
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
              <div className="bg-gray-900 p-8 border border-gray-700">
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
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 p-12 text-center border border-gray-700">
            <h2 className="text-4xl font-bold text-white mb-6" 
                style={{ 
                  fontFamily: 'BOZART, cursive',
                  background: 'linear-gradient(to bottom, #00ffff, #ff1493)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(1px 1px 0 #ffffff) drop-shadow(-1px -1px 0 #ffffff) drop-shadow(1px -1px 0 #ffffff) drop-shadow(-1px 1px 0 #ffffff)'
                }}>ABOUT OUR STUDIO</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Located in the heart of Dallas, YA TU SABES STUDIO is your premier destination for professional podcast production, 
              commercial advertising, and community storytelling. Our state-of-the-art facility is equipped with the latest 
              technology to bring your vision to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-cyan-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Equipment</h3>
                <p className="text-gray-300">State-of-the-art recording technology</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Experienced professionals dedicated to your success</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
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
