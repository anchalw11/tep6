import React from 'react';

export const Component: React.FC = () => {
  const images = [
    { url: 'https://via.placeholder.com/300x200/0891b2/ffffff?text=Payout+1', alt: 'Verified Payout 1' },
    { url: 'https://via.placeholder.com/300x200/0891b2/ffffff?text=Payout+2', alt: 'Verified Payout 2' },
    { url: 'https://via.placeholder.com/300x200/0891b2/ffffff?text=Payout+3', alt: 'Verified Payout 3' }
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 hover:border-white/[0.15] transition-all duration-300"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-gray-400 text-sm mt-2">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
