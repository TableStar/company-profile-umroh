import Image from "next/image";
import React from "react";

type ProductCard = {
  src?: string;
  title?: string;
  description?: string;
};

const ProductCard = ({ src, title, description }: ProductCard) => {
  return (
    <div className="md:h-[514px] md:w-[584px] flex flex-col justify-start items-start gap-2">
      <div className="h-64 md:h-[400px] w-full relative bg-sky-50 rounded-xl">
        {src && (
          <Image
            src={src}
            alt="product1"
            width={800}
            height={600}
            className="rounded-xl w-full h-full object-cover"
          />
        )}
      </div>
      <div className="w-full h-24 flex flex-col justify-start items-start gap-2">
        <div className="w-full h-24 flex flex-col justify-start items-start gap-1">
          <h3 className="text-neutral-800 text-lg font-semibold font-['DM_Sans'] leading-7">
            {title && title}
          </h3>
          <p className="w-full text-neutral-600 text-sm font-normal font-['Inter'] leading-[21px]">
            {description && description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
