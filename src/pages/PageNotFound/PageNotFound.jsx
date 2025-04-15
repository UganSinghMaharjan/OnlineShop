import React from 'react';
import notFoundImage from '../../assets/images/NotFound.jpg';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="w-2/3 max-w-md mb-6"
      />
      <h1 className="text-2xl font-semibold text-gray-700">Oops! Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
