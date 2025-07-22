import React, { useState } from 'react';
import Image from '../../../assets/hero.webp';

const CardGallery = ({image, title, description}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`relative w-72 h-52 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden perspective-1000 shadow-[0_0_0_5px_rgba(255,255,255,0.5)] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group 
        ${isActive ? 'scale-105 shadow-[0_8px_16px_rgba(255,255,255,0.2)]' : 'hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]'}`}
      onClick={handleClick}
    >
      <img
        src={Image}
        alt="Card Icon"
        className={`h-full transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
          ${isActive ? 'scale-0' : 'group-hover:scale-0'}`}
      />
      <div
        className={`card__content absolute top-0 left-0 w-full h-full p-5 box-border bg-neutral-100 transform -rotate-x-90 origin-bottom transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
          ${isActive ? 'rotate-x-0' : 'group-hover:rotate-x-0'}`}
      >
        <p className="card__title m-0 text-2xl text-neutral-700 font-bold">Lorem ipsum dolor sit</p>
        <p className="card__description mt-2.5 text-sm text-neutral-500 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, distinctio corrupti dolorem quibusdam necessitatibus nesciunt obcaecati numquam fugit deleniti consequatur.
        </p>
      </div>
    </div>
  );
};

export default CardGallery;