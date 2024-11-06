import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-2">
      <div
        className="w-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(https://picsum.photos/1600/900)` }}
      >
        <div className="backdrop-blur-sm  bg-black/20 text-white w-full h-full p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 md:gap-y-40">
              <div className="md:w-80">
                <h1 className="text-[#fbfbfb] text-[32px] font-bold font-['DM Sans'] capitalize leading-[48px]">
                  Raih Ibadah Umroh Impian Anda dengan Mudah
                </h1>
              </div>
              <div className="flex flex-col gap-y-40 md:flex-row-reverse md:justify-between">
                {/* Stats Section */}
                <div className="flex gap-4 md:flex-col">
                  <div className="flex-1 p-4 bg-[#fbfbfb]/20 rounded-xl backdrop-blur-sm flex flex-col gap-1">
                    <div className="text-[#fbfbfb] text-[28px] font-medium font-['DM Sans'] leading-[42px]">
                      8+
                    </div>
                    <div className="text-[#fbfbfb] text-base font-normal font-['Inter'] leading-normal">
                      Tahun pengalaman
                    </div>
                  </div>
                  <div className="flex-1 p-4 bg-[#fbfbfb]/20 rounded-xl flex flex-col gap-1">
                    <div className="text-[#fbfbfb] text-[28px] font-medium font-['DM Sans'] leading-[42px]">
                      700+
                    </div>
                    <div className="text-[#fbfbfb] text-base font-normal font-['Inter'] leading-normal">
                      Konsumen
                    </div>
                  </div>
                </div>
                {/* Word Section */}
                <div className="flex flex-col gap-6 justify-end md:max-w-[400px]">
                  <p className="text-[#fbfbfb] text-base font-normal font-['Inter'] leading-normal">
                    Temukan paket Umroh terbaik atau buat paket custom sesuai
                    kebutuhan Anda. Nikmati kemudahan dan kenyamanan perjalanan
                    suci bersama kami.
                  </p>
                  <Link
                    href={"#konsultasi"}
                    className="flex items-center gap-2 border-b border-[#fbfbfb] py-2 max-w-36"
                  >
                    <span className="text-[#fbfbfb] text-sm font-medium font-['Inter']">
                      Konsultasi Gratis
                    </span>
                    <FiArrowUpRight className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
