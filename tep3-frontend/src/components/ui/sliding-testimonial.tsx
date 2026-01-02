import React from 'react';
import { Star } from 'lucide-react';

const FUITestimonialWithSlide: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Prop Trader',
      content: 'Cleared my FTMO challenge in just 3 weeks with their guidance. The risk management tools are exceptional.',
      rating: 5,
      profit: '+$12,500'
    },
    {
      name: 'Marcus Johnson',
      role: 'Day Trader',
      content: 'The AI signals are incredibly accurate. My win rate improved from 55% to 87% in just one month.',
      rating: 5,
      profit: '+$8,900'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Swing Trader',
      content: 'Best investment I ever made. The community and support are outstanding. Highly recommended!',
      rating: 5,
      profit: '+$15,200'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Success </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Stories
          </span>
        </h2>
        <p className="text-gray-400 text-lg">Real traders, real results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 transition-all duration-300 hover:scale-105"
          >
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
              <div className="text-green-400 font-bold">{testimonial.profit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FUITestimonialWithSlide;
