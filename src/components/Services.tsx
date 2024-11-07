import { PiPaintBrushBroad } from "react-icons/pi";
import { LuMonitor } from "react-icons/lu";
import folder from "@/assets/Subtract.png";
import ServicesFolder from "./home/ServicesFolder";

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
];

const Services = () => {
  return (
    <div className="w-full p-12 md:px-64">
      <div className="flex flex-col items-center gap-20">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="px-6 py-2.5 rounded-full border border-[#d7af57]">
            <div className="text-[#d7af57] text-base font-normal font-['Open Sans'] leading-normal">
              Layanan Kami
            </div>
          </div>
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
          <div className="w-full flex flex-col gap-y-12">
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
