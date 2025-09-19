"use client";

import { useState } from "react";
import { Send, ArrowRight, Upload, Building2, MapPin, Phone, Mail, Clock, Package, Image as ImageIcon, FileText } from "lucide-react";

export default function CommercialAdvertisingForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    phoneNumber: "",
    email: "",
    daysHours: "",
    productsServices: "",
    businessLogo: null as File | null,
    advertisingDescription: "",
    planOfAction: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileError("");
    
    if (file) {
      // Check file size (5MB limit for email attachments)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setFileError("File size must be less than 5MB for email delivery. Please compress your image or use a smaller file.");
        return;
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload a valid image file (JPG, PNG, SVG, or WebP).");
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      businessLogo: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for file errors before submission
    if (fileError) {
      alert("Please fix the file upload error before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Thank you for your submission! We'll get back to you soon.");
      // Reset form
      setFormData({
        businessName: "",
        address: "",
        phoneNumber: "",
        email: "",
        daysHours: "",
        productsServices: "",
        businessLogo: null,
        advertisingDescription: "",
        planOfAction: ""
      });
      setFileError("");
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-md p-6 border border-gray-600/30 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 mb-3 shadow-md">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Commercial Advertising Request
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          Provide your business information and advertising requirements to get started with your professional commercial campaign.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Information Section */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 p-4 md:p-6 border border-gray-600/40 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500/20 flex items-center justify-center mr-3">
              <Building2 className="w-4 h-4 text-green-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              Business Information
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessName" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="Your business name"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="Business address"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="daysHours" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Days and Hours of Operation *
              </label>
              <input
                type="text"
                id="daysHours"
                name="daysHours"
                value={formData.daysHours}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="e.g., Mon-Fri 9AM-6PM, Sat 10AM-4PM"
              />
            </div>

            <div>
              <label htmlFor="productsServices" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
                Products/Services Offered *
              </label>
              <input
                type="text"
                id="productsServices"
                name="productsServices"
                value={formData.productsServices}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 shadow-sm hover:border-gray-500/50 text-sm"
                placeholder="Describe your products or services"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="businessLogo" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
              Business Logo
            </label>
            <div className="relative">
              <input
                type="file"
                id="businessLogo"
                name="businessLogo"
                onChange={handleFileChange}
                accept="image/jpeg,image/jpg,image/png,image/svg+xml,image/webp"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className={`w-full px-3 py-2 bg-gray-800/50 border transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-700/50 ${
                fileError 
                  ? "border-red-400 focus:ring-2 focus:ring-red-400" 
                  : "border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 hover:border-gray-500/50"
              }`}>
                <Upload className="w-4 h-4 mr-2 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  {formData.businessLogo ? formData.businessLogo.name : "Upload Business Logo"}
                </span>
              </div>
            </div>
            {fileError ? (
              <p className="text-xs text-red-400 mt-1 flex items-center">
                <span className="w-1 h-1 bg-red-400 mr-2"></span>
                {fileError}
              </p>
            ) : (
              <p className="text-xs text-gray-400 mt-1 flex items-center">
                <span className="w-1 h-1 bg-gray-400 mr-2"></span>
                PNG, JPG, SVG, or WebP files accepted. Maximum size: 5MB (for email delivery)
              </p>
            )}
          </div>
        </div>

        {/* Advertising Details Section */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 p-4 md:p-6 border border-gray-600/40 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500/20 flex items-center justify-center mr-3">
              <FileText className="w-4 h-4 text-green-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              Advertising Details
            </h3>
          </div>
          
          <div>
            <label htmlFor="advertisingDescription" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
              Short Description of What You Want to Advertise *
            </label>
            <textarea
              id="advertisingDescription"
              name="advertisingDescription"
              value={formData.advertisingDescription}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 resize-none shadow-sm hover:border-gray-500/50 text-sm"
              placeholder="Describe what you want to advertise and your key message..."
            />
          </div>

          <div className="mt-4">
            <label htmlFor="planOfAction" className="block text-xs md:text-sm font-semibold text-gray-200 mb-2">
              Plan of Action (The Who, What, When, Where and Why) *
            </label>
            <textarea
              id="planOfAction"
              name="planOfAction"
              value={formData.planOfAction}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-400 transition-all duration-200 resize-none shadow-sm hover:border-gray-500/50 text-sm"
              placeholder="Provide details about:
• WHO is your target audience?
• WHAT do you want to achieve?
• WHEN do you want to launch?
• WHERE do you want to advertise?
• WHY should customers choose you?"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !!fileError}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 font-semibold text-sm md:text-base transition-all duration-200 flex items-center justify-center group shadow-md hover:shadow-green-500/25 disabled:shadow-none"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting Request...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Advertising Request
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-center text-xs md:text-sm text-gray-400 mt-3">
            We'll review your request and get back to you within 24 hours
          </p>
        </div>
      </form>
    </div>
  );
}
