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
    return `https://res.cloudinary.com/${cloudName}/image/fetch/w_${width},q_${
      quality || 75
    }/${fullSrc}`;
  }

  if (src.includes("res.cloudinary")) {
    const urlParts = src.split("/upload/");
    return `${urlParts[0]}/upload/w_${width},q_${quality || 75}/${urlParts[1]}`;
  }

  return `https://res.cloudinary.com/${cloudName}/image/fetch/w_${width},q_${
    quality || 75
  }/${src}`;
};

export default cloudinaryLoader;
