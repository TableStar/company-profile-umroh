const GoldSectionHeader = ({ title }: { title?: string }) => {
  return (
    <div className="px-6 py-2.5 rounded-full border border-[#d7af57]">
      <div className="text-[#d7af57] text-base font-normal font-['Open Sans'] leading-normal">
        {title || ""}
      </div>
    </div>
  );
};

export default GoldSectionHeader;
