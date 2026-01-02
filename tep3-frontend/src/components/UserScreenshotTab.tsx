import React, { useState } from 'react';
import { Upload, Image } from 'lucide-react';

const UserScreenshotTab: React.FC = () => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploading(false);
        alert('Screenshot uploaded successfully!');
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white border-b border-cyan-400/30 pb-2">
        Screenshot Upload
      </h3>

      <div className="bg-gray-900/30 rounded-lg p-8 text-center border border-cyan-400/20">
        <Image className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <p className="text-gray-300 mb-4">
          Upload screenshots for verification or support
        </p>

        <label className="inline-block">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <div className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors flex items-center space-x-2 mx-auto inline-flex">
            <Upload className="w-5 h-5" />
            <span>{uploading ? 'Uploading...' : 'Choose File'}</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default UserScreenshotTab;
