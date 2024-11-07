import React, { ReactElement } from "react";
import folder from "@/assets/Subtract.png";
import { IconType } from "react-icons";

type Props = {
  Icon?: IconType;
  title?: string;
  description?: string;
};

const ServicesFolder = ({ Icon, title, description }: Props) => {
  return (
    <div
      className="h-60 bg-cover grid grid-cols-[35%_65%] grid-rows-[40%_60%] rounded-3xl md:w-72"
      style={{ backgroundImage: `url(${folder.src})` }}
    >
      <div className="p-4 flex justify-center items-center">
        <div className="bg-[#fbfbfb] h-16 w-16 flex justify-center items-center rounded-xl">
          {Icon && <Icon className="h-10 w-10 text-[#D7AF57]" />}
        </div>
      </div>
      <div className="bg-transparent"></div>
      <div className="col-span-2 px-6 py-3">
        <h4 className="text-lg font-[`Poppins`] font-semibold leading-7 mb-4">
          {title && title}
        </h4>
        <p className="text-sm font-normal font-[`Open Sans`] leading-5">
          {description && description}
        </p>
      </div>
    </div>
  );
};

export default ServicesFolder;
