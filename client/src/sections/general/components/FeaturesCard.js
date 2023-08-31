import React from 'react';

export default function FeaturesCard({ image, alt, header, text }) {
  return (
    <div className="flex flex-col justify-center items-center shadow-md mx-auto">
      <img src={image} alt={alt} />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
}