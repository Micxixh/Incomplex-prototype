function Text() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[12px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold h-[48px] justify-center leading-[0] relative shrink-0 text-[20px] text-white uppercase w-[164px]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[1.2]">Web development</p>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="bg-[#a03000] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[12px] py-0 relative shrink-0" data-name="Chevron">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Icon">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d="M2 2L10 10L18 2" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-[#b33600] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] size-full" data-name="Dropdown">
      <Text />
      <div className="flex flex-row items-center self-stretch">
        <Chevron />
      </div>
    </div>
  );
}