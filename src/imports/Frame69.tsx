import imgFrame4 from "figma:asset/110349e6b33e235b2a2e0b442dc380667a7860bc.png";
import imgFrame5 from "figma:asset/d10dd2d41ee414fd0f580d79d8198e98e3b39be9.png";
import imgFrame6 from "figma:asset/620d533d54168f2f6c179a826272a85b5a12ab89.png";
import imgFrame7 from "figma:asset/61a538a74b50b8bb26eb1acc30a25768307d22ae.png";
import imgFrame8 from "figma:asset/045f2c6f203fc18729298f0edb78b71719203bde.png";
import imgFrame9 from "figma:asset/05578d1e297bde4bfa60d074948ea4edbf31fa0b.png";
import imgFrame10 from "figma:asset/51f3a830ea911d28a9f4cdb843ed7dd6195d350b.png";
import imgFrame11 from "figma:asset/f53830f5053acb89e47e01439e4a2b58211f9532.png";

function Header() {
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

function Frame1() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame4} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame1 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Faster Time to Market
          </p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Launch new products, features, or client solutions quickly — without waiting to hire or train in-house talent. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame5} />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame2 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Seamless Integration
          </p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We slot into your team, tools, and culture with minimal disruption or hand-holding. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame6 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame6} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame3 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Strategic Thinking `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We don’t just execute tasks — we think like partners, helping shape the best technical direction for your goals. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame7} />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame4 />
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

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame8} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame5 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Trusted Delivery `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Deadlines met, promises kept. We’re not learning on your dime we’re here to deliver. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame9} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame10 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Access to Top Talent `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Gain on-demand access to senior-level developers and tech leads with deep experience across industries and stacks. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame10} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame12 />
          <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{` Built-In Flexibility `}</p>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Scale technical capacity up or down depending on project needs, deadlines, or business cycles. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px relative rounded-[460px] shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#00303f] h-[290px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[290px] items-center justify-center p-[24px] relative w-full">
          <Frame14 />
          <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-center text-nowrap text-white uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">{`Rapid `}</p>
            <p>{`Problem Solving `}</p>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Tough technical issues resolved quickly by experts who’ve solved them before. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[20px] shrink-0 w-[1757px]">
      <Frame18 />
      <Frame20 />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start justify-center px-[48px] py-[96px] relative size-full">
          <Header />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}