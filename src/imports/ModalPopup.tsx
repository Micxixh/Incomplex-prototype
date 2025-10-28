import svgPaths from "./svg-xd2zsjbcc1";
import imgFrame5 from "figma:asset/081dce7d5ff0c400ecdfd1379f3ab7054325abd5.png";

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Arrow right">
          <path d={svgPaths.p2a49ae40} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#b01d00] box-border content-stretch flex gap-[10px] h-[64px] items-center justify-center left-[1137px] px-[24px] py-[12px] rounded-[24px] top-[35px]">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">nEXT PROJECT</p>
      <ArrowRight />
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Header">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[48px] py-0 relative size-full">
          <div className="flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold justify-end leading-[0] relative shrink-0 text-[48px] text-center text-white uppercase w-full">
            <p className="leading-none">cOMPANY name</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[300px] items-center justify-end overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame5} />
        <div className="absolute bg-[#de541e] inset-0 mix-blend-hard-light" />
      </div>
      <Header />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-full">
        {`We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.`}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.`}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled.`}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would’ve stalled. `}
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px pb-[60px] pt-0 px-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">Web development</p>
      <Frame4 />
    </div>
  );
}

function Work() {
  return (
    <div className="bg-[#00303f] relative rounded-[24px] shrink-0 w-full" data-name="Work">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[48px] items-center justify-center p-[48px] relative w-full">
          <Frame3 />
          <div className="relative shrink-0 size-[557px]" data-name="dna 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#00303f] h-[1853px] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] h-[1853px] items-start px-[24px] py-[48px] relative w-full">
          {[...Array(3).keys()].map((_, i) => (
            <Work key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[902px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Work1() {
  return (
    <div className="bg-[#00202a] h-[1976px] relative shrink-0 w-full" data-name="Work">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] h-[1976px] items-center p-[48px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function ModalPopup() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="modal popup" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 15, 21) 0%, rgb(0, 15, 21) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame1 />
      <Work1 />
    </div>
  );
}