import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TradersEdgeBlog: React.FC = () => {
  const blogPosts = [
    {
      title: '10 Common Prop Firm Challenge Mistakes to Avoid',
      excerpt: 'Learn the most common mistakes traders make and how to avoid them.',
      category: 'Education',
      readTime: '5 min read'
    },
    {
      title: 'Understanding Risk Management in Forex Trading',
      excerpt: 'Master the fundamentals of risk management for consistent profits.',
      category: 'Strategy',
      readTime: '8 min read'
    },
    {
      title: 'How to Choose the Right Prop Firm for You',
      excerpt: 'A comprehensive guide to selecting the best prop firm for your trading style.',
      category: 'Guide',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trading </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Resources
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Learn from expert insights and trading strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link
                to="#"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-2 transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradersEdgeBlog;
