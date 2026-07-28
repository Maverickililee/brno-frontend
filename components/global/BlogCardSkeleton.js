import React from 'react';

const BlogCardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-stone-200 animate-pulse" />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <div className="h-6 bg-stone-200 rounded animate-pulse w-3/4" />
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-stone-200 rounded animate-pulse" />
          <div className="h-4 bg-stone-200 rounded animate-pulse w-5/6" />
        </div>
        
        {/* Time skeleton */}
        <div className="h-4 bg-stone-200 rounded animate-pulse w-1/2" />
        
        {/* Button skeleton */}
        <div className="h-10 bg-stone-200 rounded animate-pulse w-1/3 mt-4" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
