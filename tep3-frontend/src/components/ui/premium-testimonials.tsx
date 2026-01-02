import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  profit?: string;
}

interface PremiumTestimonialsProps {
  testimonials: Testimonial[];
}

export const PremiumTestimonials: React.FC<PremiumTestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
            {testimonial.profit && (
              <div className="text-green-400 font-bold">{testimonial.profit}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
