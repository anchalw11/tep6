import React from 'react';
import { Users } from 'lucide-react';

const PaymentBasedCustomerDatabase: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800/50 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
        <Users className="w-6 h-6 mr-2" />
        Customer Database
      </h2>
      <div className="text-gray-400 text-center py-8">
        Customer payment data will appear here
      </div>
    </div>
  );
};

export default PaymentBasedCustomerDatabase;
