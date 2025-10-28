import svgPaths from "./svg-qpdfyw7vxn";
import imgFrame4 from "figma:asset/9680a2c8e775b837ff3fff3a014016d1c92d3c09.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[226px] items-center justify-center relative rounded-[460px] shrink-0 w-[218px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame4} />
    </div>
  );
}

function Icons8Linkedin() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="icons8-linkedin 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="icons8-linkedin 1">
          <path d={svgPaths.p28a00100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-center text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hello@InComplex.com
      </p>
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        (+44) 0208 123 8589
      </p>
      <Icons8Linkedin />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(0,48,63,0)] relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center justify-center p-[24px] relative size-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}