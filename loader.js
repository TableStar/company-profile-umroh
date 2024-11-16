"use client";

const cloudinaryLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/deoyubp6x/image/fetch/w_${width},q_${
    quality || 75
  }/${src}`;
};

export default cloudinaryLoader;
