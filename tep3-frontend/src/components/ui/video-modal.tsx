import React, { useState, createContext, useContext } from 'react';
import { X, Play } from 'lucide-react';

const VideoModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({ isOpen: false, setIsOpen: () => {} });

export const VideoModal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VideoModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </VideoModalContext.Provider>
  );
};

export const VideoModalTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setIsOpen } = useContext(VideoModalContext);

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

export const VideoModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(VideoModalContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export const VideoModalTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return <h2 className={`text-2xl font-bold text-white mb-4 ${className}`}>{children}</h2>;
};

export const VideoModalDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return <p className={`text-gray-300 mb-6 ${className}`}>{children}</p>;
};

export const VideoModalVideo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const VideoPlayer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="relative aspect-video bg-black rounded-lg overflow-hidden">{children}</div>;
};

export const VideoPreview: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="absolute inset-0">{children}</div>;
};

export const VideoPlayButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="absolute inset-0 flex items-center justify-center">{children}</div>;
};

export const CloseIcon = X;
