import Image from "next/image";
import GoldSectionHeader from "../GoldSectionHeader";

const Products = () => {
  return (
    <div className="px-4 md:px-12 py-8 mt-32 md:mt-72 flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-8">
        <GoldSectionHeader title="Produk Kami" />
        <div className="h-72 flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center text-[#252525] text-[28px] font-bold font-['Poppins'] leading-[42px]">
            Paket - Paket Terbaik yang Kami Berikan untuk Anda
          </div>
          <div className="self-stretch text-center text-[#515151] text-base font-normal font-['Inter'] leading-normal">
            Kami bangga telah bekerja-sama dan membantu mereka mencapai tujuan
            ibadah dan wisata melalui agensi kami.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-88 flex flex-col justify-start items-start gap-2">
            <div className="h-64 w-full relative bg-sky-50 rounded-xl">
              <Image
                src="https://picsum.photos/800/600"
                alt="product1"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full h-24 flex flex-col justify-start items-start gap-2">
              <div className="w-full h-24 flex flex-col justify-start items-start gap-1">
                <h3 className="text-neutral-800 text-lg font-semibold font-['DM_Sans'] leading-7">
                  Umroh Small Group
                </h3>
                <p className="w-full text-neutral-600 text-sm font-normal font-['Inter'] leading-[21px]">
                  Umroh Small Group adalah solusi ideal bagi Anda yang ingin
                  melaksanakan ibadah umroh dengan lebih nyaman dan personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
