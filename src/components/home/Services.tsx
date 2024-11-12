import { PiCalculatorThin, PiPaintBrushBroad } from "react-icons/pi";
import { LuMonitor } from "react-icons/lu";
import ServicesFolder from "./ServicesFolder";
import { CiDiscount1 } from "react-icons/ci";
import GoldSectionHeader from "../GoldSectionHeader";

const ServicesFolderContent = [
  {
    icon: PiPaintBrushBroad,
    title: "Pengalaman Baru",
    description:
      "Tersedia sekitar ratusan ribu destinasi, atraksi, pengalaman, dan lain-lain yang bisa kamu coba",
  },
  {
    icon: LuMonitor,
    title: "Tentukan Sendiri",
    description:
      "Tentukan kebutuhan perjalanan umroh Anda. Nikmati pilihan fasilitas yang dapat dikustomisasi.",
  },
  {
    icon: CiDiscount1,
    title: "Umroh Freshnel",
    description:
      "Nikmati penawaran eksklusif promo tiket pesawat untuk perjalanan yang lebih hemat.",
  },
  {
    icon: PiCalculatorThin,
    title: "Kalkulator Trip",
    description:
      "Nikmati fitur untuk mempermudah dalam memperkirakan biaya perjalanan",
  },
];

const Services = () => {
  return (
    <div className="w-full py-8 px-4 md:px-64">
      <div className="flex flex-col items-center gap-20">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4">
          <GoldSectionHeader title="Layanan Kami"/>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-[#252525] text-[28px] font-bold font-['Poppins'] leading-[42px]">
              Solusi Digital untuk Perjalanan Ibadah Anda
            </h2>
            <p className="text-center text-[#515151] text-base font-normal font-['Inter'] leading-normal">
              Di Syafar Tour, kami menawarkan rangkaian layanan paket perjalanan
              <br />
              terintegrasi untuk membantu anda menjalankan ibadah umrah dengan
              aman dan nyaman.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-12">
            {ServicesFolderContent.map((content, i) => (
              <ServicesFolder
                key={i}
                Icon={content.icon}
                title={content.title}
                description={content.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
