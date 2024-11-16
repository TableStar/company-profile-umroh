"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/LOGO SYAFAR 1@2x.png";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Produk", path: "#produk" },
    { title: "Kalkulator", path: "#kalkulator" },
    { title: "Buah Tangan", path: "#handicraft" },
  ];

  return (
    <nav className="pt-1 pb-4 px-4 md:pb-0 flex justify-between md:justify-center gap-x-32 items-center">
      <Image
        src="https://res.cloudinary.com/deoyubp6x/image/upload/v1731773730/LOGO_SYAFAR_1_2x_kuaizl.png"
        alt="logo"
        className="w-[150px] h-[80px] mr-[100px] md:w-[150px] md:h-[80px] md:mr-0 object-contain cursor-pointer"
        width={150}
        height={80}
        priority
      />
      <div>
        <div className="hidden md:flex items-center mx-auto max-w-[800px]">
          <ul className="flex flex-row p-4 space-x-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="px-3 py-2 justify-center items-center gap-2.5 flex cursor-pointer"
                >
                  <p className="text-[#252525] text-base font-normal font-['Poppins'] leading-normal">
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={toggleNav}
          className="md:hidden absolute top-5 right-8 border-2 rounded p-2 z-50 bg-gray-50"
        >
          {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
        {nav && (
          <div className="fixed left-0 top-0 w-full z-40">
            <ul className="text-2xl my-24 text-center space-y-8 px-4 bg-white py-8">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} onClick={closeNav}>
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="bg-[#d7af57] p-4 rounded-lg">
                <Link href={"#kontak"}>Kontak</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button className="hidden md:flex h-12 px-5 py-2 bg-[#d7af57] rounded-lg justify-center items-center gap-2">
        <Link href={"#kontak"}>
          <p className="text-[#353535] text-base font-medium font-['Poppins']">
            Kontak
          </p>
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
