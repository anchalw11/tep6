import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const UserSupportDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <MessageSquare className="w-8 h-8 mr-3" />
          Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 text-center">
            <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400 text-sm mb-4">Get instant help from our team</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
              Start Chat
            </button>
          </div>

          <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 text-center">
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-400 text-sm mb-4">support@traderedgepro.com</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              Send Email
            </button>
          </div>

          <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 text-center">
            <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
            <p className="text-gray-400 text-sm mb-4">Available 24/7</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSupportDashboard;
