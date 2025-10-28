function Frame11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between leading-[1.5] not-italic px-[12px] py-0 relative size-full text-[16px] text-white">
          <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 w-full">{`We are a team of technical specialists who help companies bridge the gap between their technical needs and in-house capabilities. We enhance your digital capacity, so you can confidently deliver on client demands and business growth without overstretching your team. `}</p>
          <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 w-full">{`Our founder has held leading technical roles for the past 20 years and has been on the cutting edge of change, from the rise of web 2.0 to today’s AI-driven, cloud-native ecosystems. `}</p>
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

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">We’ve led technical teams for some of the world’s premier companies, bringing enterprise-level thinking to every project.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Frame3 key={i} />
      ))}
    </div>
  );
}

function Frame6() {
  return <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] h-[17px] items-center justify-center rounded-[460px] shrink-0 to-50% to-[#ef8354] w-[16px]" />;
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">We’ve led technical teams for some of the world’s premier companies, bringing enterprise-level thinking to every project.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] h-full items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[24px] h-[546px] items-center p-[24px] relative rounded-[36px] shrink-0">
      <Frame2 />
      {[...Array(3).keys()].map((_, i) => (
        <Frame13 key={i} />
      ))}
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[375px]">
      <Frame10 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full">
      <Frame12 />
    </div>
  );
}