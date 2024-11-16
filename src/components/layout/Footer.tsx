import logo from "@/assets/LOGO SYAFAR 1@2x.png";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 md:px-8 md:py-20 flex flex-col md:flex-row gap-y-10 gap-x-64 md:justify-center ">
      <div className="flex flex-col md:max-w-56 gap-y-10">
        <div className="w-full h-40 overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-gray-800 text-sm leading-relaxed font-normal md:hidden">
          Syafar Tour adalah agensi tour and travel terkemuka di Indonesia.
          Selama 8 tahun, kami telah membantu lebih dari 700 pelanggan
          memfasilitasi dalam menjalankan ibadah maupun wisata.
        </p>
        <div className="flex justify-start items-center gap-4">
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors">
            <FaInstagram size={18} />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors">
            <SiYoutube size={18} />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors">
            <BsTwitterX size={18} />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors">
            <SiFacebook size={18} />
          </button>
        </div>
      </div>
      <div className="gap-8 flex flex-col md:flex-row md:min-w-64 ">
        {/* Learn More Section */}
        <div className="space-y-4">
          <h3 className="text-gray-800 text-sm font-semibold font-['Open Sans']">
            Pelajari Selengkapnya
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="text-gray-800 text-sm hover:text-gray-600 transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 text-sm hover:text-gray-600 transition-colors"
              >
                Pernyataan Resmi
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 text-sm hover:text-gray-600 transition-colors"
              >
                Kebijakan Privasi
              </Link>
            </li>
          </ul>
        </div>
        {/* Community Section */}
        <div className="space-y-4">
          <h3 className="text-gray-800 text-sm font-semibold font-['Inter']">
            Komunitas Kami
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="text-gray-800 text-sm hover:text-gray-600 transition-colors"
              >
                Travel Umrah
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 text-sm hover:text-gray-600 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex flex-col max-w-sm gap-y-5">
        <h3 className="text-gray-800 text-base font-semibold font-['Open Sans']">
          Metode Pembayaran VA
        </h3>
        <Image
          src={"/assets/bank.png"}
          alt="bank"
          width={324}
          height={154}
        />
      </div>
    </footer>
  );
};

export default Footer;
