import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg shadow-lg p-4 transition-all">
      {title && <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h2>}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default Card;
