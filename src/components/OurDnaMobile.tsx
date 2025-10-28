import svgPaths from "../imports/svg-p25raekxkv";

function Header() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
            <p className="leading-none">Our DNA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[1.5] not-italic px-[12px] py-0 relative size-full text-[16px] text-white">
          <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 w-full">{`We are a team of technical specialists who help companies bridge the gap between their technical needs and in-house capabilities. We enhance your digital capacity, so you can confidently deliver on client demands and business growth without overstretching your team. `}</p>
          <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 w-full">{`Our founder has held leading technical roles for the past 20 years and has been on the cutting edge of change, from the rise of web 2.0 to today's AI-driven, cloud-native ecosystems. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] h-[523px] items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[327px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] h-[17px] items-center justify-center rounded-[460px] shrink-0 to-50% to-[#ef8354] w-[16px]" />;
}

function BulletCard({ text }: { text: string }) {
  return (
    <div className="basis-0 bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex gap-[10px] items-center relative rounded-[12px] shrink-0 w-full">
        <Frame1 />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  const bulletPoints = [
    "We've led technical teams for some of the world's premier companies, bringing enterprise-level thinking to every project.",
    "We plug directly into your business with minimal disruption, delivering fast, effective results without the usual overhead.",
    "We speak both tech and business, so you get solutions that are not just well-built, but commercially sound.",
    "Whether you need a project delivered, a team extension, or a trusted second opinion, we scale to fit your needs.",
    "We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.",
    "We're not just coders—we're strategic technical partners who care about your long-term success.",
    "We're a team of technical experts with the soft skills that make us genuinely easy to work with.",
  ];

  return (
    <div className="box-border content-stretch flex gap-[24px] h-[546px] items-center p-[24px] relative rounded-[36px] shrink-0">
      <Frame2 />
      {Array.from({ length: Math.ceil(bulletPoints.length / 2) }).map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-[24px] h-full">
          {bulletPoints.slice(colIndex * 2, colIndex * 2 + 2).map((text, rowIndex) => (
            <div key={colIndex * 2 + rowIndex} className="h-1/2">
              <BulletCard text={text} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bottom-[31px] content-stretch flex gap-[10px] items-center left-0 w-full overflow-x-auto scrollbar-hide">
      <Frame12 />
    </div>
  );
}

export default function OurDnaMobile() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[24px] relative w-full pt-[96px] pr-[0px] pb-[24px] pl-[0px]" data-name="Our DNA section">
      <Header />
      <div className="h-[559.5px] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 560">
          <path d={svgPaths.p17661240} fill="white" id="Rectangle 46" />
        </svg>
      </div>
      <Frame5 />
    </div>
  );
}
