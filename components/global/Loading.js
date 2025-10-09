import React from 'react';

const Loading = () => {
  return (
    <div className="fixed z-[99999999999999999999999] inset-0 flex items-center justify-center bg-stone-200 bg-opacity-50 ">
      <div className='flex gap-5'>
        {/* Outer spinning ring */}
        <div className="w-16 h-16 flex items-center justify-center  border-4 border-t-transparent border-primary-100 rounded-full animate-spin">
          <div className="w-8 h-8 bg-gradient-to-r from-[#54ff65] to-[#007cef] rounded-full animate-pulse"></div>
        </div>
        {/* Inner pulsing circle */}

        {/* Loading text with subtle animation */}
        <p className="mt-4 text-primary-100 text-xl  font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;