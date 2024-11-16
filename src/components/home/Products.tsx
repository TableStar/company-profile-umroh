import Image from "next/image";
import GoldSectionHeader from "../GoldSectionHeader";
import ProductCard from "../ProductCard";

const productList = [
  {
    src: "https://picsum.photos/800/600",
    title: "Umroh Small Group",
    description:
      " Umroh Small Group adalah solusi ideal bagi Anda yang ingin melaksanakan ibadah umroh dengan lebih nyaman dan personal.",
  },
  {
    src: "https://picsum.photos/801/600",
    title: "Umroh Smart Family - Platinum 12D",
    description:
      "Umroh Smart Family adalah solusi ideal bagi Anda yang ingin melaksanakan ibadah umroh dengan kenyamanan dan kebersamaan.",
  },
  {
    src: "https://picsum.photos/800/601",
    title: "Jelajahi Turki 3D2N",
    description:
      "Dalam tur ini, Anda akan merasakan pesona megah bangunan bersejarah,  keindahan alam yang menakjubkan, serta keramahan dan kehangatan  masyarakat Turki.",
  },
  {
    src: "https://picsum.photos/801/601",
    title: "Uzbekistan 8D7N",
    description:
      "Pada tur kali ini Anda akan diajak untuk mengenal lebih banyak tentang Uzbekistan serta berbagai pesona yang dimilikinya.",
  },
];

const Products = () => {
  return (
    <div className="px-4 md:px-12 py-8 mt-32 md:mt-72 flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-8">
        <GoldSectionHeader title="Produk Kami" />
        <div className="h-72 md:h-auto flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center text-[#252525] text-[28px] font-bold font-['Poppins'] leading-[42px]">
            Paket - Paket Terbaik yang Kami Berikan untuk Anda
          </div>
          <div className="self-stretch text-center text-[#515151] text-base font-normal font-['Inter'] leading-normal">
            Kami bangga telah bekerja-sama dan membantu mereka mencapai tujuan
            ibadah dan wisata melalui agensi kami.
          </div>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:max-w-[1200px]">
          {productList.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              description={product.description}
              src={product.src}
            />
          ))}
        </div>
        <button className="h-10 px-5 py-3 bg-gray-100 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-200 transition-colors">
          <span className="text-neutral-800 text-sm font-medium font-['Inter']">
            Lihat Semua
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
