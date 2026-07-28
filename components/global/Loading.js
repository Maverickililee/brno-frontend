import React from 'react';

const Loading = () => {
  return (
    <div className="fixed z-[99999999999999999999999] inset-0 flex items-center justify-center bg-stone-100 bg-opacity-90 backdrop-blur-sm">
      <div className='flex flex-col items-center gap-6'>
        {/* Outer spinning ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-stone-300 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-b-transparent border-green-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Loading text with subtle animation */}
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
        
        <p className="text-stone-700 text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;