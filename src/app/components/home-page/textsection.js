"use client";
import React from 'react';

const TextSection = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ACFC03] via-[#EFFFCC] to-[#F8FFEB] text-transparent bg-clip-text mb-6 leading-tight text-shadow-2xl">
        {title}
      </h2>
      <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed tracking-wider text-shadow-xl">
        {description}
      </p>
    </div>
  );
};

export default TextSection;
