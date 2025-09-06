"use client"
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function ServiceCard({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false 
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 sm:p-6 border-2 h-full flex flex-col ${isPopular ? 'border-blue-500' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <p className="text-black mb-6 text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-black text-sm sm:text-base leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
