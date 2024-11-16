import React, { ReactElement } from "react";
import { IconType } from "react-icons";

type Props = {
  Icon?: IconType;
  title?: string;
  description?: string;
};

const ServicesFolder = ({ Icon, title, description }: Props) => {
  return (
    <div
      className={`h-72 bg-[url('/assets/Subtract.png')] md:hover:bg-[url('/assets/Subtract-brown.png')] bg-contain bg-no-repeat grid grid-cols-[35%_65%] grid-rows-[40%_60%]
         rounded-3xl mt-8 w-72 md:h-60 md:w-64  md:hover:text-white `}
      // style={{ backgroundImage: `url(${folder.src})` }}
    >
      <div className="p-4 flex justify-center items-center">
        <div className="bg-[#fbfbfb] h-16 w-16 md:h-14 md:w-14 flex justify-center items-center rounded-xl">
          {Icon && <Icon className="h-10 w-10 md:h-8 md:w-8  text-[#D7AF57]" />}
        </div>
      </div>
      <div className="bg-transparent"></div>
      <div className="col-span-2 px-6 py-3">
        <h4 className="text-lg font-[`Poppins`] font-semibold leading-7 mb-4">
          {title && title}
        </h4>
        <p className="text-sm md:text-xs font-normal font-[`Open Sans`] leading-5">
          {description && description}
        </p>
      </div>
    </div>
  );
};

export default ServicesFolder;
