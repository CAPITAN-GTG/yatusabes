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
    <div className={`dark-card-hover p-4 sm:p-6 border-2 h-full flex flex-col ${isPopular ? 'border-blue-400 glow-blue' : 'border-gray-700'} vibrant-hover`}>
      {isPopular && (
        <div className="miami-gradient text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{title}</h3>
      <div className="text-2xl sm:text-3xl font-bold miami-text-blue mb-4">{price}</div>
      <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
