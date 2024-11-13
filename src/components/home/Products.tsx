import GoldSectionHeader from "../GoldSectionHeader";

const Products = () => {
  return (
    <div className="px-4 md:px-12 py-8 mt-32 md:mt-72 flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-12">
        <GoldSectionHeader title="Produk Kami" />
        <div className="h-72 flex flex-col justify-start items-center gap-6 px-8">
          <div className="self-stretch text-center text-[#252525] text-[28px] font-bold font-['Poppins'] leading-[42px]">
            Paket - Paket Terbaik yang Kami Berikan untuk Anda
          </div>
          <div className="self-stretch text-center text-[#515151] text-base font-normal font-['Inter'] leading-normal">
            Kami bangga telah bekerja-sama dan membantu mereka mencapai tujuan
            ibadah dan wisata melalui agensi kami.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
