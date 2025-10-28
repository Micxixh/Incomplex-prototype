import svgPaths from "./svg-aj0o85szz8";
import imgHeroSection from "figma:asset/0494657a8afbe879af363306e3a6d9e3064d549a.png";
import imgHandshakeIcon from "figma:asset/918f13797ee0a4830710fb136bcf488615da6df9.png";
import imgStartingLine from "figma:asset/5d65faafaa72bd69f9e59c9befdca6a7682d4ffe.png";
import imgImage16 from "figma:asset/56c8632a6e1adaa0702b17d0562e40d307e3374b.png";
import imgImage1 from "figma:asset/3899946417c2cc683fe08401c9d9d3a4dd69ed8c.png";
import imgKingfisherLogo1 from "figma:asset/cb291d6e05f4530e0dfd13bb92d7a7cc9055fe1b.png";
import imgImage13 from "figma:asset/354a6559206e710b2aeaefe8c993e587f769eed0.png";
import imgImage15 from "figma:asset/14442d6d0b799619dfc5570bfe03865df049bc8b.png";
import imgImage14 from "figma:asset/6330cee43b4469b5e8aee2d7054e15bde8ac02c4.png";
import imgHmPassportOfficeLogo1 from "figma:asset/869420b7867945f36e9b7399cf65930cdf8115bc.png";
import imgImage2 from "figma:asset/6f28ee7275ad460cc47798c372e0b8fa15c5f13a.png";
import imgImage5 from "figma:asset/087534f058b4918071e7e4ee0b01619ade54d73a.png";
import imgImage8 from "figma:asset/4f8f72ce647ed30dea70babcecdb9dc9f713d286.png";
import imgFrame4 from "figma:asset/f00ea5ecc9a3f37dd51c4e6633697bbcbc55152d.png";
import imgFrame2 from "figma:asset/60e65f612862a251b0d765e10cab87a53546713d.png";

function Text() {
  return (
    <div className="relative size-[24px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #00303F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Asset() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #00303F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[827px] relative shrink-0 w-full" data-name="Hero Section">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroSection} />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[827px] items-center px-[24px] py-[104px] w-full" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[270px]">
      <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
        <p className="leading-none">We see you</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[24px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Need a Better `}
              <br aria-hidden="true" />
              Tech Partner?
            </p>
          </div>
          <div className="relative shrink-0 size-[130px]" data-name="handshake icon">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHandshakeIcon} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">Struggling to find reliable technical partners who understand both the business and technical landscape?</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Stuck at the `}
              <br aria-hidden="true" />
              Starting Line?
            </p>
          </div>
          <div className="h-[130px] relative shrink-0 w-[213px]" data-name="starting line">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStartingLine} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Spotted a major market opportunity, but don’t have the in-house technical skills to seize it? `}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Bottlenecks `}
              <br aria-hidden="true" />
              Slowing You Down?
            </p>
          </div>
          <div className="relative shrink-0 size-[130px]" data-name="image 16">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">Facing a critical client deadline, but your current technical team just doesn’t have the capacity to deliver on time?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex gap-[24px] h-[514px] items-center p-[24px] relative rounded-[36px] shrink-0 w-[938px]">
      <Frame5 />
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%+47.5px)] translate-x-[-50%] translate-y-[-50%] w-[375px]">
      <Frame38 />
    </div>
  );
}

function WeSeeYouSection() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="We see you section">
      <Header />
      <div className="h-[601px] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 601">
          <path d="M0 74L375 0V527L0 601V74Z" fill="var(--fill-0, #00303F)" id="Rectangle 46" />
        </svg>
      </div>
      <Frame13 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
            <p className="leading-none">Our Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurProjectsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Our projects section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <div className="absolute h-[559.5px] left-0 top-[78px] w-[375px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 560">
              <path d={svgPaths.p17661240} fill="var(--fill-0, #000F14)" id="Rectangle 46" />
            </svg>
          </div>
          <Header1 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
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

function Frame14() {
  return (
    <div className="bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] h-[523px] items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[327px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame42 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[80.78%_0.09%_0.17%_0.09%]" data-name="Group">
      <div className="absolute inset-[85.16%_9.82%_0.17%_17.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 7">
          <path d={svgPaths.p71f7a00} fill="var(--fill-0, #540462)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.11%_73.01%_2.98%_20.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p17ec1420} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.79%_22.42%_0.19%_31.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 9">
          <path d={svgPaths.p2da66f00} fill="var(--fill-0, #540462)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[87.96%_26%_9.07%_67.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p9dee000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.78%_0.09%_0.24%_0.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 9">
          <path d={svgPaths.p5186000} fill="var(--fill-0, #540462)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Natwest() {
  return (
    <div className="aspect-[128/141] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0" data-name="natwest-2 1">
      <Group />
      <div className="absolute inset-[34.6%_10.17%_26.62%_65.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[29.16%_6.67%_32.11%_43.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[48.64%_19%_32.11%_43.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <path d={svgPaths.p15568400} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.16%_6.67%_32.11%_68.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
          <path d={svgPaths.p163ebf80} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[80.68%] left-[25.31%] right-[37.6%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <path d={svgPaths.p28f66b70} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[61.27%] left-[50.04%] right-[25.23%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
          <path d={svgPaths.p1df61b00} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.16%_56.26%_51.36%_6.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <path d={svgPaths.p267c1400} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.64%_56.26%_32.11%_6.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <path d={svgPaths.pd35b800} fill="var(--fill-0, #FF0020)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <Natwest />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="relative rounded-[13px] shrink-0 size-[48px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[13px] size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[grid-area:2_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Kingfisher_logo 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgKingfisherLogo1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SageLogoSvg() {
  return (
    <div className="aspect-[80/46] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0" data-name="Sage-logo_svg 1">
      <div className="absolute bottom-[31.16%] left-0 right-[77.43%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 32">
          <path d={svgPaths.p7462670} fill="var(--fill-0, #00D639)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.79%_51.5%_31.16%_24.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p13425d00} fill="var(--fill-0, #00D639)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.79%_25.46%_0.27%_50.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 34">
          <path d={svgPaths.p250c0180} fill="var(--fill-0, #00D639)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[31.16%] left-[76.96%] right-0 top-[27.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p29dc6f00} fill="var(--fill-0, #00D639)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:2_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <SageLogoSvg />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[grid-area:3_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="aspect-[47.0222/46] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="image 13">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[grid-area:3_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="h-[46px] relative shrink-0 w-full" data-name="image 15">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:4_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="aspect-[1347/284] relative shrink-0 w-full" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:4_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="aspect-[200/200] basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="hm_passport_office_logo 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgHmPassportOfficeLogo1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:5_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="aspect-[141/141] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[grid-area:5_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="basis-0 grow max-h-[18.296px] max-w-[133px] min-h-px min-w-px relative shrink-0 w-[133px]" data-name="image 5">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[grid-area:6_/_1] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <div className="basis-0 grow max-w-[132px] min-h-px min-w-px relative shrink-0 w-[132px]" data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoonpigLogo() {
  return (
    <div className="basis-0 grow max-h-[33px] max-w-[132px] min-h-px min-w-px overflow-clip relative shrink-0 w-[132px]" data-name="Moonpig_Logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 33">
        <path d={svgPaths.p12b52400} fill="var(--fill-0, #FFA6B6)" id="Vector" />
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[grid-area:6_/_2] bg-white h-[70px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[6px] border-black border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative w-full">
          <MoonpigLogo />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] h-[480px] relative shrink-0 w-[327px]">
      <Frame15 />
      <Frame2 />
      <Frame7 />
      <Frame17 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame1 />
      <Frame18 />
      <Frame8 />
      <Frame19 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[36px] shrink-0">
      <Frame14 />
      <Frame3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[375px]">
      <Frame40 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Header2() {
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

function Frame45() {
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

function Frame21() {
  return (
    <div className="bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] h-[523px] items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[327px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame45 />
    </div>
  );
}

function Frame22() {
  return <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] h-[17px] items-center justify-center rounded-[460px] shrink-0 to-50% to-[#ef8354] w-[16px]" />;
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">We’ve led technical teams for some of the world’s premier companies, bringing enterprise-level thinking to every project.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame24 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Frame25 key={i} />
      ))}
    </div>
  );
}

function Frame28() {
  return <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] h-[17px] items-center justify-center rounded-[460px] shrink-0 to-50% to-[#ef8354] w-[16px]" />;
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">We’ve led technical teams for some of the world’s premier companies, bringing enterprise-level thinking to every project.</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#00303f] box-border content-stretch flex flex-col gap-[24px] h-full items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame30 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex gap-[24px] h-[546px] items-center p-[24px] relative rounded-[36px] shrink-0">
      <Frame21 />
      {[...Array(3).keys()].map((_, i) => (
        <Frame64 key={i} />
      ))}
      <Frame32 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[375px]">
      <Frame41 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function OurDnaSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Our DNA section">
      <div className="absolute h-[559.5px] left-0 top-[78px] w-[375px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 560">
          <path d={svgPaths.p17661240} fill="var(--fill-0, white)" id="Rectangle 46" />
        </svg>
      </div>
      <Header2 />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[270px]">
      <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
        <p className="leading-none">OUR SERVICES</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[24px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[10px] shrink-0 size-[70px]">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[6px] border-solid inset-[-6px] pointer-events-none rounded-[16px]" />
      <Frame35 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start justify-center relative shrink-0 w-full">
      {[...Array(4).keys()].map((_, i) => (
        <Frame36 key={i} />
      ))}
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[141px] items-center justify-center overflow-clip relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame2} />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-[508px] items-center px-[24px] py-[48px] relative rounded-[24px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-12px] pointer-events-none rounded-[36px]" />
      <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal]">
          {`Stuck at the `}
          <br aria-hidden="true" />
          Starting Line?
        </p>
      </div>
      <Frame55 />
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">{`Spotted a major market opportunity, but don’t have the in-house technical skills to seize it? `}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[48px] items-center justify-end pl-[6px] pr-[36px] py-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Frame56 key={i} />
      ))}
    </div>
  );
}

function Frame57() {
  return (
    <div className="box-border content-stretch flex gap-[36px] items-center px-[24px] py-0 relative shrink-0 w-[375px]">
      <Frame47 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame49 />
      <Frame57 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#b01d00] box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-0 py-[12px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <p className="font-['Roboto:Condensed_Black',_sans-serif] font-black leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 75" }}>
        Book a Strategy Call!
      </p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center pb-[12px] pt-[24px] px-[12px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[309px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(0, 48, 63) 0%, rgb(0, 48, 63) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-12px] pointer-events-none rounded-bl-[36px] rounded-tl-[36px] rounded-tr-[36px]" />
      <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[normal] relative shrink-0 text-[#00303f] text-[20px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="mb-0">{`If you’re in need of `}</p>
        <p>these services...</p>
      </div>
      <Frame31 />
    </div>
  );
}

function OurServicesSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Our services section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <div className="absolute h-[887.536px] left-0 top-[147px] w-[375px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 888">
              <path d={svgPaths.p15306200} fill="var(--fill-0, #00303F)" id="Rectangle 46" />
            </svg>
          </div>
          <Header3 />
          <Frame46 />
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
            <p className="leading-none">Our Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame59 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Seamless Integration
          </p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We slot into your team, tools, and culture with minimal disruption or hand-holding. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame61 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Faster Time to Market
          </p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Launch new products, features, or client solutions quickly — without waiting to hire or train in-house talent. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0">
      <Frame60 />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame63 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Seamless Integration
          </p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We slot into your team, tools, and culture with minimal disruption or hand-holding. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame66 />
          <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-center text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">{`Modern Tooling &`}</p>
            <p>Standards</p>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Stay current with the latest frameworks, cloud platforms, CI/CD, and security best practices. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0">
      <Frame65 />
      <Frame67 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame68 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Strategic Thinking `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We don’t just execute tasks — we think like partners, helping shape the best technical direction for your goals. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame70 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Trusted Delivery `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Deadlines met, promises kept. We’re not learning on your dime we’re here to deliver. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0">
      <Frame69 />
      <Frame71 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame73 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Access to Top Talent `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Gain on-demand access to senior-level developers and tech leads with deep experience across industries and stacks. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[460px]">
        <div className="absolute bg-[#de541e] inset-0 rounded-[460px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[460px]">
          <img alt="" className="absolute h-[81.27%] left-[8.91%] max-w-none top-[8.2%] w-[83.92%]" src={imgFrame4} />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-solid border-white inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame75 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{` Built-In Flexibility `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Scale technical capacity up or down depending on project needs, deadlines, or business cycles. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="box-border content-stretch flex gap-[48px] items-center pl-[6px] pr-[36px] py-0 relative shrink-0">
      <Frame50 />
      <Frame52 />
      <Frame72 />
      <Frame53 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[48px] relative w-full">
          <Header4 />
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
            <p className="leading-none">REVIEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Need a Better `}
              <br aria-hidden="true" />
              Tech Partner?
            </p>
          </div>
          <div className="relative shrink-0 size-[130px]" data-name="handshake icon">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHandshakeIcon} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">Struggling to find reliable technical partners who understand both the business and technical landscape?</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Stuck at the `}
              <br aria-hidden="true" />
              Starting Line?
            </p>
          </div>
          <div className="h-[130px] relative shrink-0 w-[213px]" data-name="starting line">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStartingLine} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Spotted a major market opportunity, but don’t have the in-house technical skills to seize it? `}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
          <div className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">
              {`Bottlenecks `}
              <br aria-hidden="true" />
              Slowing You Down?
            </p>
          </div>
          <div className="relative shrink-0 size-[130px]" data-name="image 16">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
          </div>
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">Facing a critical client deadline, but your current technical team just doesn’t have the capacity to deliver on time?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex gap-[24px] h-[514px] items-center p-[24px] relative rounded-[36px] shrink-0 w-[938px]">
      <Frame79 />
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%-0.25px)] translate-x-[-50%] translate-y-[-50%] w-[375px]">
      <Frame82 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <Header5 />
      <div className="h-[742.5px] relative shrink-0 w-[375px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 743">
          <path d={svgPaths.pb74e4c0} fill="var(--fill-0, white)" id="Rectangle 47" />
        </svg>
      </div>
      <div className="absolute h-[672.248px] left-0 top-[699.75px] w-[375px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 673">
          <path d={svgPaths.pb526b70} fill="var(--fill-0, black)" id="Rectangle 48" />
        </svg>
      </div>
      <Frame83 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
        <p className="leading-none">FAQ’S</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white h-[72px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center px-[18px] py-0 relative w-full">
          <p className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How do you ensure quality and alignment with our business goals?
          </p>
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[45deg]">
              <Text />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#0e575f] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[12px] relative w-full">
          <ul className="basis-0 block font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d0fffb] text-[16px]">
            <li className="ms-[24px]">
              <span className="leading-[1.5]">{`We work with startups, scale-ups, and established enterprises that are facing critical technical challenges or growth opportunities. Whether you need to deliver fast, innovate boldly, or scale wisely, we’re here to support. `}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame26 />
        <Frame84 />
      </div>
      <div aria-hidden="true" className="absolute border-[12px] border-black border-solid inset-[-12px] pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #00303F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-white h-[72px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-black border-solid inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center px-[18px] py-0 relative w-full">
          <p className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How do you ensure quality and alignment with our business goals?
          </p>
          <Plus />
        </div>
      </div>
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #00303F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[12px] border-black border-solid inset-[-12px] pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center px-[18px] py-[24px] relative w-full">
          <p className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How do you ensure quality and alignment with our business goals?
          </p>
          <Plus1 />
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame37 />
      <Frame85 />
      <Frame85 />
      <Frame85 />
      <Frame27 />
      <Frame85 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[825px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[825px] items-center justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <div className="absolute h-[737.5px] left-0 top-[96px] w-[375px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 738">
              <path d={svgPaths.p28442580} fill="var(--fill-0, #000F14)" id="Rectangle 46" />
            </svg>
          </div>
          <Header6 />
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
          <div className="flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold justify-end leading-[0] relative shrink-0 text-[48px] text-center text-white uppercase w-[326px]">
            <p className="leading-none">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px pb-[12px] pt-0 px-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#035873] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#035873] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`What's your name?`}</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,86,96,0.39)] tracking-[-0.64px] w-full">John Doe*</p>
    </div>
  );
}

function Name() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end px-[24px] py-[12px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px pb-[12px] pt-0 px-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#035873] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#035873] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`What's your email?`}</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,86,96,0.39)] tracking-[-0.64px] w-full">john@doe.com</p>
    </div>
  );
}

function Email() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Email">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end px-[24px] py-[12px] relative w-full">
          <Frame87 />
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px pb-[12px] pt-0 px-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#035873] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#035873] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your message
      </p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,86,96,0.39)] tracking-[-0.64px] w-full">Hello Micaiah, can you help me with ...*</p>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Message">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end px-[24px] py-[12px] relative w-full">
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Name />
      <Email />
      <Message />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#b01d00] relative rounded-[48px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Send Message
          </p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="contact">
      <Frame89 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Form">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          <Header7 />
          <Frame39 />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default function IPhone13Mini() {
  return (
    <div className="bg-[#de541e] content-stretch flex flex-col gap-[36px] items-start relative size-full" data-name="iPhone 13 mini - 1">
      <HeroSection />
      <WeSeeYouSection />
      <OurProjectsSection />
      <Frame20 />
      <OurDnaSection />
      <OurServicesSection />
      <Frame78 />
      <Frame44 />
      <Frame43 />
      <Form />
    </div>
  );
}