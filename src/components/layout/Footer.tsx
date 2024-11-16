import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 md:px-8 md:py-20 flex flex-col gap-y-10 md:items-center">
      <div className="flex flex-col md:flex-row gap-y-10 gap-x-60 md:justify-center">
        <div className="flex flex-col md:max-w-56 gap-y-10">
          <div className="w-full h-40 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/deoyubp6x/image/upload/v1731773730/LOGO_SYAFAR_1_2x_kuaizl.png"
              alt="Logo"
              className="w-full h-full object-contain"
              width={240}
              height={160}
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
        <div className="gap-8 flex flex-col md:flex-row md:min-w-[285px] ">
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
          <Image src={"/assets/bank.png"} alt="bank" width={324} height={154} />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 md:w-full md:max-w-[1300px]">
        {/* Divider */}
        <div className="w-full h-px bg-[#252525]" />
        {/* Credit Content */}
        <div className="flex flex-col md:flex-row justify-between md:items-center w-full text-sm text-[#252525] opacity-80">
          {/* Copyright */}
          <p className="font-['Open Sans']">© 2024 Syafar Tour</p>
          {/* Links */}
          <div className="flex gap-6">
            <Link href="#" className="font-['Inter']">
              Privacy Policy
            </Link>
            <Link href="#" className="font-['Inter']">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
