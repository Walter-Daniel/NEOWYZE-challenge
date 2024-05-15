import React from "react";

export const Skeleton = () => {
  return (
    <div className="">
      <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div className="h-48 bg-gray-500"></div>
        <div className="py-4">
          <div className="h-6 bg-gray-500 mb-2"></div>
          <div className="h-4 bg-gray-500 w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export const CardListSkeleton = () => {
  return (
    <>
     
      <div className="flex flex-col">
        <div className="h-10 bg-gray-500 mb-2"></div>
        <div className="h-2 bg-gray-500 mb-2"></div>
        <div className="h-10 bg-gray-500"></div>
      </div>
    </>
  );
};
