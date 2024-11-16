"use client";

const cloudinaryLoader = ({ src, width, quality }) => {
  const isLocal = !src.startsWith("http");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fullSrc = `${baseUrl}${src}`;

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (isLocal && process.env.NODE_ENV === "development") {
    return src;
  }

  if (isLocal) {
    return `https://res.cloudinary.com/${cloudName}/image/fetch/cache/w_${width},q_${
      quality || 75
    }/${fullSrc}`;
  }

  return `https://res.cloudinary.com/${cloudName}/image/fetch/w_${width},q_${
    quality || 75
  }/${src}`;
};

export default cloudinaryLoader;
