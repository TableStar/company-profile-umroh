"use client";
import React, { useState } from "react";

const TouchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const carouselItems = [
    { src: "", color: "bg-blue-500" },
    { src: "", color: "bg-red-500" },
    { src: "", color: "bg-green-500" },
    { src: "", color: "bg-purple-500" },
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    console.log("toucher");
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    console.log("toucher");
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    console.log("Touch end!", touchStart, touchEnd);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < carouselItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="px-8 py-4 mx-auto w-full max-w-xl">
      <div
        className="relative h-36 overflow-hidden rounded-lg "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex transition-transform duration-300 h-full`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex-shrink-0 w-full h-full ${item.color} flex items-center justify-center text-white text-xl font-bold`}
              >
                Yeah{i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TouchCarousel;
