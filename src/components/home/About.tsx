import React from "react";
import GoldSectionHeader from "../GoldSectionHeader";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-4 md:px-12 py-4 flex flex-col md:flex-row items-center md:justify-center gap-4 mt-12 md:pr-72 md:mb-60">
      <div className="flex flex-col gap-4 items-center md:items-start md:w-[600px]">
        <GoldSectionHeader title="Tentang Kami" />
        <div className="flex-col justify-start items-center gap-6 inline-flex">
          <div className="self-stretch text-center md:text-left text-neutral-800 text-3xl md:text-6xl font-bold font-['Poppins'] leading-10">
            Memberikan Perjalanan Umroh yang Berkah, Mudah dan Amanah
          </div>
          <div className="self-stretch text-center md:text-left text-neutral-600 text-base md:text-lg font-normal font-sans leading-normal">
            Syafar Tour adalah agensi tour and travel yang fokus pada pelayanan
            jamaah umroh yang menginginkan perjalanan yang lebih fleksibel. Kami
            sepenuhnya menyadari bahwa setiap jamaah memiliki preferensi
            tersendiri termasuk dalam melaksanakan perjalanan umroh. Kami
            memiliki pengalaman lebih dari 8 tahun melayani jamaah menjalankan
            ibadah umroh. Dengan core value yang kami miliki, kami senantiasa
            terus berusaha meningkatan pelayanan kami kepada para jamaah.
          </div>
        </div>
      </div>
      <div className="w-80 h-72 relative mt-12 md:mt-0 md:scale-150 md:origin-top-left">
        <div className="w-60 h-44 absolute right-4 -top-7 rounded-lg shadow-md border border-amber-400" />
        <div className="w-60 h-44 absolute left-4 top-36 rounded-lg shadow-md border border-amber-400" />
        <div className="w-60 h-44 absolute left-0 top-32 bg-gray-50 rounded-lg overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              className="absolute inset-0 w-full h-auto object-cover rounded-lg"
              width={320}
              height={176}
              src="https://picsum.photos/800/600"
              alt="about-down"
            />
          </div>
        </div>
        <div className="w-60 h-44 absolute right-0 -top-4 bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              className="absolute inset-0 w-full h-auto object-cover rounded-lg"
              width={320}
              height={176}
              src="https://picsum.photos/800/599"
              alt="about-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
