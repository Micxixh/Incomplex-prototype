import imgHandshakeIcon from "figma:asset/918f13797ee0a4830710fb136bcf488615da6df9.png";
import imgStartingLine from "figma:asset/5d65faafaa72bd69f9e59c9befdca6a7682d4ffe.png";
import imgImage16 from "figma:asset/56c8632a6e1adaa0702b17d0562e40d307e3374b.png";

function Header() {
  return (
    <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pl-0 pr-[48px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold justify-end leading-[0] relative shrink-0 text-[36px] text-nowrap text-white uppercase">
            <p className="leading-none whitespace-pre">We see you…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
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

function Frame() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
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

function Frame2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0">
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

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[24px] h-[514px] items-center justify-center px-0 py-[24px] relative rounded-[36px] shrink-0 w-[938px]">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[48px] shrink-0 w-full">
      <Header />
      <Frame4 />
    </div>
  );
}

export default function Work() {
  return (
    <div className="relative size-full" data-name="Work" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 15, 21) 0%, rgb(0, 15, 21) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center p-[48px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}