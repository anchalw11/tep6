import React from 'react';
import { Star } from 'lucide-react';

interface ReviewSummaryCardProps {
  rating: number;
  reviewCount: number;
  summaryText: string;
}

export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  summaryText
}) => {
  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 text-center max-w-md">
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <div className="text-3xl font-bold text-white mb-2">{rating} / 5.0</div>
      <div className="text-gray-400 mb-4">{reviewCount.toLocaleString()} reviews</div>
      <p className="text-gray-300 text-sm">{summaryText}</p>
    </div>
  );
};
