import { useState, useRef, useEffect, React } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../imports/svg-n0fovo97dg";
import svgPathsMobile from "../imports/svg-cx47sgbmag";
import svgPathsFigmaMobile from "../imports/svg-m8vo6vpggj";
import svgPathsFaqMobile from "../imports/svg-0am6w27rc8";
import ClickableLogoGrid from "./ClickableLogoGrid";
import InteractiveLogoGrid from "./InteractiveLogoGrid";
import OurDnaMobile from "./OurDnaMobile";
import Frame3 from "../imports/Frame3-193-14";
import Group from "../imports/Group";
import imgFrame4 from "figma:asset/9680a2c8e775b837ff3fff3a014016d1c92d3c09.png";
import imgFrame5 from "figma:asset/110349e6b33e235b2a2e0b442dc380667a7860bc.png";
import imgFrame6 from "figma:asset/51f3a830ea911d28a9f4cdb843ed7dd6195d350b.png";
import imgFrame7 from "figma:asset/05578d1e297bde4bfa60d074948ea4edbf31fa0b.png";
import imgFrame8 from "figma:asset/045f2c6f203fc18729298f0edb78b71719203bde.png";
import imgFrame9 from "figma:asset/620d533d54168f2f6c179a826272a85b5a12ab89.png";
import imgFrame10 from "figma:asset/61a538a74b50b8bb26eb1acc30a25768307d22ae.png";
import imgFrame11 from "figma:asset/d10dd2d41ee414fd0f580d79d8198e98e3b39be9.png";
import imgFrame12 from "figma:asset/f53830f5053acb89e47e01439e4a2b58211f9532.png";
import imgDna1 from "figma:asset/0133c86b60435ce67d33b7d45c02b4c5aaf7d6a3.png";
import imgServiceImage from "figma:asset/d4e9e2b58a67292ca1863faec8e6e9d5d746995f.png";
import imgAiIntegrationIcon from "figma:asset/9d48b2638abaa6bc76bb90527c2a58633c64a3c6.png";
import imgAppDevelopmentIcon from "figma:asset/930843cfc9fe4b07440ab4dab6a2b4920dd41c42.png";
import imgUiUxDesignIcon from "figma:asset/03cc89c88de7757d84f426810fa7b97a1c149109.png";
import imgEngineeringIcon from "figma:asset/2f4fd6a122192ae45fc115aaba443abfcf30f112.png";
import imgStartingLine from "figma:asset/5d65faafaa72bd69f9e59c9befdca6a7682d4ffe.png";
import imgHandshakeIcon from "figma:asset/918f13797ee0a4830710fb136bcf488615da6df9.png";
import imgBottleneck1 from "figma:asset/56c8632a6e1adaa0702b17d0562e40d307e3374b.png";
import imgHeroBg from "figma:asset/c25f117964a5ce38aa7bb1aee3134f1ae2ee0c22.png";
import imgMobileHeroBg from "figma:asset/3a8370295be07bfe873d7e8cdf7312ed5b9ca1c2.png";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Helper Components
function Frame4() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[20px] items-center justify-center pointer-events-none relative rounded-[460px] shrink-0 size-[500px]"
      {...scaleIn}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame4}
      />
      <div
        aria-hidden="true"
        className="absolute border-[12px] border-solid border-white inset-0 rounded-[460px]"
      />
    </motion.div>
  );
}

function Frame46() {
  return (
    <motion.div
      className="basis-0 grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full"
      {...fadeInUp}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-[48px] relative size-full">
          <div
            className="flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 75" }}
          >
            <p className="leading-[normal]">Get in contact!</p>
          </div>
          <Frame3 />
        </div>
      </div>
    </motion.div>
  );
}

function ContactSection({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className={
        isMobile
          ? "relative shrink-0 w-full py-[80px] px-[24px]"
          : "relative box-border content-stretch flex flex-col gap-[48px] h-[918px] items-center justify-center px-[96px] py-0 w-full"
      }
      data-name="Contact section"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#d0faff] border-solid inset-0 pointer-events-none"
      />
      <Frame46 />
    </div>
  );
}

function Plus({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`aspect-[48/48] overflow-clip relative size-full transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
      data-name="Plus"
    >
      <div
        className="absolute inset-[20.833%]"
        data-name="Icon"
      >
        <div className="absolute inset-[-11.823%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21 21"
          >
            <path
              d={svgPaths.p31fa6100}
              id="Icon"
              stroke="var(--stroke-0, #00303F)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  isMediumScreen,
  isMobile,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isMediumScreen: boolean;
  isMobile?: boolean;
}) {
  const iconSize = isMediumScreen ? "20" : "28.796875";

  if (isMobile) {
    // Mobile layout matching Figma Frame70.tsx design
    return (
      <motion.div
        className="bg-white relative rounded-[12px] shrink-0 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {isOpen ? (
          // Open FAQ - Combined question + answer
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="bg-white h-[72px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[72px] items-center px-[18px] py-0 relative w-full">
                  <p
                    className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[16px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    {question}
                  </p>
                  <motion.button
                    onClick={onToggle}
                    className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))] cursor-pointer"
                    style={
                      {
                        "--transform-inner-width": "24",
                        "--transform-inner-height": "24",
                      } as React.CSSProperties
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="flex-none rotate-[45deg]">
                      <div className="relative size-[24px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="#00303F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="bg-[#0e575f] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center p-[12px] relative w-full">
                  <ul className="basis-0 block font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d0fffb] text-[16px]">
                    <li className="ms-[24px]">
                      <span className="leading-[1.5]">
                        {answer}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Closed FAQ - Just question
          <button
            onClick={onToggle}
            className="bg-white h-[72px] relative rounded-[12px] shrink-0 w-full"
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[72px] items-center px-[18px] py-0 relative w-full">
                <p
                  className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[16px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  {question}
                </p>
                <div className="relative shrink-0 size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="#00303F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        )}
        <div
          aria-hidden="true"
          className="absolute border-[12px] border-black border-solid inset-[-12px] pointer-events-none rounded-[24px]"
        />
      </motion.div>
    );
  }

  // Desktop layout
  return (
    <motion.div
      className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        className={`bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full transition-colors ${!isMobile ? "hover:bg-gray-50" : ""}`}
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center pl-[48px] pr-[40px] py-[24px] relative w-full">
            <p
              className="basis-0 font-['Roboto:SemiBold',_sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#035873] text-[24px] text-left"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {question}
            </p>
            {isMediumScreen ? (
              <div className="flex items-center justify-center shrink-0 w-[28px] h-[28px]">
                <Plus isOpen={isOpen} />
              </div>
            ) : (
              <div className="flex flex-row items-center self-stretch">
                <div
                  className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]"
                  style={
                    {
                      "--transform-inner-width": iconSize,
                      "--transform-inner-height": iconSize,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex-none h-full">
                    <Plus isOpen={isOpen} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#0e575f] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[10px] items-center px-[48px] py-[36px] relative w-full">
              <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#d0fffb] text-[16px]">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FAQSection({
  isMobile,
  isMediumScreen,
}: {
  isMobile: boolean;
  isMediumScreen: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question:
        "How do you ensure quality and alignment with our business goals?",
      answer:
        "We work with startups, scale-ups, and established enterprises that are facing critical technical challenges or growth opportunities. Whether you need to deliver fast, innovate boldly, or scale wisely, we're here to support.",
    },
    {
      question:
        "What types of projects do you typically work on?",
      answer:
        "We handle everything from web development and mobile applications to complex system integrations and cloud infrastructure. Our team has extensive experience across multiple technology stacks and industries.",
    },
    {
      question: "How quickly can you start on a new project?",
      answer:
        "We can typically start within a week of initial consultation. Our flexible team structure allows us to scale quickly to meet urgent deadlines while maintaining quality standards.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible engagement models including project-based pricing, time and materials, and dedicated team arrangements. We work with you to find the best fit for your budget and timeline.",
    },
    {
      question:
        "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages. We believe in long-term partnerships and are committed to your continued success.",
    },
    {
      question:
        "How do you handle communication and project management?",
      answer:
        "We use industry-standard tools and maintain regular communication through daily standups, weekly reviews, and monthly planning sessions. You'll always have full visibility into project progress.",
    },
  ];

  if (isMobile) {
    // Mobile layout matching Figma Frame70.tsx design
    return (
      <div
        className="relative size-full"
        data-name="FAQ's section"
      >
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center pb-[24px] pt-[72px] px-[24px] relative size-full pr-[24px] pl-[24px]">
            <div className="absolute h-[737.5px] left-1/2 -translate-x-1/2 top-[96px] w-full">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 375 738"
              >
                <path
                  d={svgPathsFaqMobile.p28442580}
                  fill="#000F14"
                />
              </svg>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
              <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
                <p className="leading-none">FAQ'S</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(
                      openIndex === index ? -1 : index,
                    )
                  }
                  isMediumScreen={isMediumScreen}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div
      className="relative box-border content-stretch flex flex-col h-[1200px] items-center justify-center pb-[100px] pt-0 px-0 w-full"
      data-name="FAQ's section"
    >
      <div className="h-[240px] relative shrink-0 w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 240"
        >
          <path
            d="M0 0L1440 240L0 240V0Z"
            fill="var(--fill-0, white)"
            id="Polygon 10"
          />
        </svg>
      </div>
      <div className="h-[600px] relative shrink-0 w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
        >
          <path
            d="M0 0H1440V600H0V0Z"
            fill="var(--fill-0, white)"
            id="Polygon 4"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[240px] relative w-[100vw]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 240"
            >
              <path
                d="M0 0L1440 240L0 240V0Z"
                fill="var(--fill-0, white)"
                id="Polygon 6"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#00303f] box-border content-stretch flex flex-col gap-[48px] items-center left-1/2 max-w-[1080px] p-[48px] rounded-[48px] top-[calc(50%-49.5px)] translate-x-[-50%] translate-y-[-50%] w-[80vw]">
        <div
          aria-hidden="true"
          className="absolute border-[24px] border-solid border-white inset-[-24px] pointer-events-none rounded-[72px] shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)]"
        />
        <div
          className="flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white uppercase w-full"
          style={{ fontVariationSettings: "'wdth' 75" }}
        >
          <p className="leading-[normal]">{`FAQ's `}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              isMediumScreen={isMediumScreen}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Continue with remaining sections...
function Card2({ isMobile }: { isMobile?: boolean }) {
  return (
    <motion.div
      className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0"
      data-name="Card 2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      {...(!isMobile && {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.3 },
        },
      })}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center leading-[0] px-[24px] py-[36px] relative size-full text-[#0e575f]">
          <div
            className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[28px] text-center uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 75" }}
          >
            <p className="leading-[normal]">
              {`Need a Better `}
              <br aria-hidden="true" />
              Tech Partner?
            </p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">
                  Struggling to find reliable technical partners
                  who understand both the business and technical
                  landscape?
                </span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Card3({ isMobile }: { isMobile?: boolean }) {
  return (
    <motion.div
      className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0"
      data-name="Card 3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      {...(!isMobile && {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.3 },
        },
      })}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center leading-[0] px-[24px] py-[36px] relative size-full text-[#0e575f]">
          <div
            className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[28px] text-center uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 75" }}
          >
            <p className="leading-[normal]">
              {`Bottlenecks `}
              <br aria-hidden="true" />
              Slowing You Down?
            </p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">
                  Facing a critical client deadline, but your
                  current technical team just doesn't have the
                  capacity to deliver on time?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Card4({ isMobile }: { isMobile?: boolean }) {
  return (
    <motion.div
      className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0"
      data-name="Card 4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...(!isMobile && {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.3 },
        },
      })}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center leading-[0] px-[24px] py-[36px] relative size-full text-[#0e575f]">
          <div
            className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[28px] text-center uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 75" }}
          >
            <p className="leading-[normal]">
              {`Bottlenecks `}
              <br aria-hidden="true" />
              Slowing You Down?
            </p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <ul className="mb-0">
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
              </li>
            </ul>
            <p className="leading-[normal] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[normal]">
                  Facing a critical client deadline, but your
                  current technical team just doesn't have the
                  capacity to deliver on time?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContentContainer1({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <div
      className="relative rounded-[36px] shrink-0 w-full"
      data-name="Content container"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center p-[24px] relative w-full">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Card2 isMobile={isMobile} />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Card3 isMobile={isMobile} />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Card4 isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({
  onClick,
  isMobile,
}: {
  onClick?: () => void;
  isMobile?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-[#DB4B13] box-border content-stretch flex flex-col gap-[24px] items-start px-[48px] py-[24px] relative rounded-[48px] shrink-0 transition-colors cursor-pointer ${!isMobile ? "hover:bg-[#B01D00]" : ""}`}
      data-name="button"
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      whileTap={!isMobile ? { scale: 0.95 } : {}}
    >
      <p
        className="font-['Roboto:Condensed_Black',_sans-serif] font-black leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 75" }}
      >
        Book a Strategy Call!
      </p>
    </motion.button>
  );
}

function Cta({ isMobile }: { isMobile?: boolean }) {
  const handleBookCall = () => {
    // Scroll to contact section
    const contactSection = document.querySelector(
      '[data-name="Contact section"]',
    );
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-center justify-center relative shrink-0 w-full"
      data-name="CTA"
    >
      <div
        className={
          isMobile
            ? "flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase"
            : "flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase"
        }
      ></div>
      <Button onClick={handleBookCall} isMobile={isMobile} />
    </div>
  );
}

function TestimonialCard({
  testimonial,
  isSelected,
  onClick,
  isMobile,
}: {
  testimonial: any;
  isSelected: boolean;
  onClick: () => void;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className={`flex-shrink-0 w-[420px] cursor-pointer ${isMobile ? "max-w-[80vw]" : ""}`}
      animate={{
        scale: isSelected ? 1.05 : 1,
        zIndex: isSelected ? 20 : 10,
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="bg-white h-full rounded-[24px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col h-full p-[32px] gap-[24px]">
          {/* Quote Icon */}
          <div className="flex justify-start">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M12 34C8.68629 34 6 31.3137 6 28V20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20V22C18 25.3137 15.3137 28 12 28H10V28C10 31.3137 12.6863 34 16 34H12ZM30 34C26.6863 34 24 31.3137 24 28V20C24 16.6863 26.6863 14 30 14C33.3137 14 36 16.6863 36 20V22C36 25.3137 33.3137 28 30 28H28V28C28 31.3137 30.6863 34 34 34H30Z"
                fill="#db4b13"
              />
            </svg>
          </div>

          {/* Testimonial Text */}
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.6] not-italic text-[#0e575f] text-[16px] flex-1">
            {testimonial.text}
          </p>

          {/* Client Info */}
          <div className="flex flex-col gap-[8px] pt-[16px] border-t-2 border-[#00303f]/10">
            <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-[18px] text-[#00303f]">
              {testimonial.name}
            </p>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#0e575f]/70">
              {testimonial.role}
            </p>
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#db4b13]">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WhatOurClientsSaySection({
  isMobile,
  isMediumScreen,
}: {
  isMobile: boolean;
  isMediumScreen: boolean;
}) {
  const [dragX, setDragX] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<
    number | null
  >(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const velocityRef = useRef(0);

  const testimonials = [
    {
      text: "Working with InComplex has been transformative for our business. They delivered a complex web platform in record time, and the quality exceeded our expectations. Their team understood our vision immediately and brought technical expertise that we simply didn't have in-house.",
      name: "Sarah Mitchell",
      role: "CTO",
      company: "TechStart Inc.",
    },
    {
      text: "The flexibility and responsiveness of the InComplex team is unmatched. When we faced a critical deadline, they scaled up seamlessly and delivered flawlessly. It's rare to find a technical partner that truly acts like an extension of your team.",
      name: "James Peterson",
      role: "Head of Product",
      company: "Digital Ventures",
    },
    {
      text: "InComplex doesn't just execute - they think strategically. They've helped us make crucial technical decisions that have shaped our product roadmap. Their expertise in modern frameworks and cloud architecture has been invaluable.",
      name: "Maria Rodriguez",
      role: "VP of Engineering",
      company: "CloudScale Solutions",
    },
    {
      text: "After struggling with unreliable outsourced teams, finding InComplex was a game-changer. They're professionals who deliver on promises, communicate clearly, and genuinely care about our success. The quality of their code and attention to detail is exceptional.",
      name: "David Chen",
      role: "Founder & CEO",
      company: "Innovate Labs",
    },
    {
      text: "What sets InComplex apart is their ability to understand both the technical and business sides of our challenges. They've helped us optimize our development process, reduce costs, and accelerate our time to market significantly.",
      name: "Emma Thompson",
      role: "Director of Digital",
      company: "Enterprise Global",
    },
    {
      text: "The team at InComplex brought enterprise-level thinking to our startup. Their experience working with major brands shows in everything they do - from architecture decisions to code quality. They've been instrumental in our growth.",
      name: "Robert Kim",
      role: "Chief Innovation Officer",
      company: "NextGen Systems",
    },
  ];

  const cardWidth = 420;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const totalWidth = itemWidth * testimonials.length;

  // Create enough copies for seamless looping (5 copies)
  const allTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Auto-scroll animation
  useEffect(() => {
    const speed = 30; // pixels per second

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime =
        (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        setDragX((prev) => {
          const newX = prev + speed * deltaTime;

          // Seamlessly loop when we've moved one full set
          if (newX >= totalWidth) {
            return newX - totalWidth;
          }

          return newX;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, totalWidth]);

  const handleCardClick = (index: number) => {
    if (selectedIndex === index) {
      // Deselect and resume
      setSelectedIndex(null);
      setIsPaused(false);
    } else {
      // Select and pause
      setSelectedIndex(index);
      setIsPaused(true);
    }
  };

  const handleDragEnd = (
    event: any,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    velocityRef.current = info.velocity.x;
    // Resume auto-scroll after drag
    setTimeout(() => {
      setIsPaused(false);
      setSelectedIndex(null);
    }, 1000);
  };

  return (
    <div
      className={
        isMobile
          ? "relative shrink-0 w-full overflow-hidden"
          : "relative box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-0 py-[200px] w-full overflow-hidden"
      }
      data-name="What Our Clients Say section"
    >
      <motion.div
        className={
          isMobile
            ? "flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] text-center font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-white uppercase z-10"
            : "flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-nowrap text-white uppercase z-10"
        }
        style={{ fontVariationSettings: "'wdth' 75" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className={
            isMobile
              ? "leading-[normal] mx-[48px] my-[0px] w-full max-w-[80vw]"
              : "leading-[normal] whitespace-pre mx-[48px] my-[0px] w-full"
          }
        >
          What our clients say
        </p>
      </motion.div>

      {/* Full-bleed Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for fade effect */}
        {!isMediumScreen && !isMobile && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-[#000f14] to-transparent z-30 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-[#000f14] to-transparent z-30 pointer-events-none" />
          </>
        )}

        {/* Carousel Track */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={handleDragEnd}
          animate={{ x: -dragX }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0,
          }}
          className="flex gap-[24px] py-[24px] cursor-grab active:cursor-grabbing"
          style={{ willChange: "transform" }}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isSelected={selectedIndex === index}
              onClick={() => handleCardClick(index)}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>

      <Cta isMobile={isMobile} />
    </div>
  );
}

// Benefits Section Components
function Frame14() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame5}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Faster Time to Market
      </p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Launch new products, features, or client solutions quickly — without waiting to hire or train in-house talent. `}</p>
    </div>
  );
}

function FasterTimeToMarket({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:1_/_1_/_span_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Faster time to market"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-[48px] relative size-full">
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame16() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame6}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{` Built-In Flexibility `}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Scale technical capacity up or down depending on project needs, deadlines, or business cycles. `}</p>
    </div>
  );
}

function BuiltInFlexibility({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:5_/_1_/_span_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Built in flexibility"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-[48px] relative size-full">
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="aspect-[460/475] basis-0 content-stretch flex flex-col gap-[20px] grow items-center justify-center min-h-px min-w-px pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame7}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Access to Top Talent `}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Gain on-demand access to senior-level developers and tech leads with deep experience across industries and stacks. `}</p>
    </div>
  );
}

function AccessToTopTalent({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:4_/_2_/_span_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Access to top talent"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-[48px] relative size-full">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Trusted Delivery `}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Deadlines met, promises kept. We're not learning on your dime we're here to deliver. `}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] h-full items-center justify-center pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame8}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function TrustedDelivery({ isMobile }: { isMobile?: boolean }) {
  return (
    <motion.div
      className="[grid-area:4_/_1] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Trusted delivery"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[24px] relative size-full">
          <Frame20 />
          <Frame21 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Strategic Thinking `}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We don't just execute tasks — we think like partners, helping shape the best technical direction for your goals. `}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] h-full items-center justify-center pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame9}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function StrategicThinking({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:3_/_1_/_auto_/_span_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Strategic thinking"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[24px] relative size-full">
          <Frame22 />
          <Frame23 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-white uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Modern Tooling`}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-full">{`Stay current with the latest frameworks, cloud platforms, CI/CD, and security best practices. `}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center pointer-events-none relative rounded-[460px] shrink-0 size-[120px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame10}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function ModernTooling({ isMobile }: { isMobile?: boolean }) {
  return (
    <motion.div
      className="[grid-area:2_/_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Modern tooling"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[24px] relative size-full">
          <Frame25 />
          <Frame26 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Seamless Integration
      </p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`We slot into your team, tools, and culture with minimal disruption or hand-holding. `}</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] h-full items-center justify-center pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame11}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function SeamlessIntegration({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:1_/_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Seamless integration"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[24px] relative size-full">
          <Frame27 />
          <Frame28 />
        </div>
      </div>
    </motion.div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <p
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Rapid Problem Solving `}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-[min-content]">{`Tough technical issues resolved quickly by experts who've solved them before. `}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] h-full items-center justify-center pointer-events-none relative rounded-[460px] shrink-0">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[460px] size-full"
        src={imgFrame12}
      />
      <div
        aria-hidden="true"
        className="absolute border-[5px] border-solid border-white inset-[-5px] rounded-[465px]"
      />
    </div>
  );
}

function RapidProblemSolving({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="[grid-area:6_/_2] bg-[#00303f] relative rounded-[12px] shadow-[6px_6px_0px_0px_#752616] shrink-0"
      data-name="Rapid problem solving"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      {...(!isMobile && {
        whileHover: { y: -8, transition: { duration: 0.3 } },
      })}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[24px] relative size-full">
          <Text />
          <Frame29 />
        </div>
      </div>
    </motion.div>
  );
}

function Heading() {
  return (
    <div
      className="bg-[#db4b13] box-border content-stretch flex gap-[10px] items-center justify-center pb-[24px] pt-[48px] px-[48px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0"
      data-name="Heading"
    >
      <div
        className="flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-nowrap text-white uppercase"
        style={{ fontVariationSettings: "'wdth' 75" }}
      >
        <p className="leading-[normal] whitespace-pre">
          The benefits of our approach
        </p>
      </div>
    </div>
  );
}

function CardsGrid({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className="bg-[#db4b13] h-[1319px] relative rounded-[24px] shrink-0 w-full"
      data-name="Cards grid"
    >
      <div className="size-full">
        <div className="box-border gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(6,_minmax(0px,_1fr))] h-[1319px] p-[24px] relative w-full">
          <FasterTimeToMarket isMobile={isMobile} />
          <BuiltInFlexibility isMobile={isMobile} />
          <AccessToTopTalent isMobile={isMobile} />
          <TrustedDelivery isMobile={isMobile} />
          <StrategicThinking isMobile={isMobile} />
          <ModernTooling isMobile={isMobile} />
          <SeamlessIntegration isMobile={isMobile} />
          <RapidProblemSolving isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}

function ContentContainer2({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center left-1/2 px-[48px] py-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[80vw] max-w-[1200px]"
      data-name="Content container"
    >
      <Heading />
      <CardsGrid isMobile={isMobile} />
    </div>
  );
}

function TheBenefitsOfOurApproachSection({
  isMobile,
  isMediumScreen,
}: {
  isMobile: boolean;
  isMediumScreen: boolean;
}) {
  return (
    <div
      className={
        isMobile
          ? "relative shrink-0 w-full bg-[#DB4B13]"
          : isMediumScreen
            ? "relative size-full bg-[#000f14]"
            : "relative box-border content-stretch flex flex-col h-[1600px] items-start pb-[100px] pt-[200px] px-0 w-full"
      }
      data-name="The Benefits of Our Approach section"
    >
      {isMobile || isMediumScreen ? (
        <div className="relative shrink-0 w-full bg-[#db4b13]">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[36px] items-start justify-center py-[96px] relative size-full">
              {/* Header */}
              <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full px-[48px]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
                    <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
                      <p className="leading-none">
                        Our Approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 1 - Horizontal Scroll */}
              <div className="box-border content-stretch flex gap-[24px] items-center justify-start px-0 py-0 relative rounded-[36px] shrink-0 w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-[24px] min-w-max pl-[48px] pr-[48px] py-[0px]">
                  {/* Faster Time to Market */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame5}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >
                          Faster Time to Market
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Launch new products, features, or client solutions quickly — without waiting to hire or train in-house talent. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Seamless Integration */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame11}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >
                          Seamless Integration
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`We slot into your team, tools, and culture with minimal disruption or hand-holding. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Thinking */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame6}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >{`Strategic Thinking`}</p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`We don't just execute tasks — we think like partners, helping shape the best technical direction for your goals. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modern Tooling */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame7}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >
                          Modern Tooling & Standards
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Stay current with the latest frameworks, cloud platforms, CI/CD, and security best practices. `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Horizontal Scroll */}
              <div className="box-border content-stretch flex gap-[24px] items-center justify-start px-0 py-0 relative rounded-[36px] shrink-0 w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-[24px] min-w-max pl-[48px] pr-[48px] py-[0px]">
                  {/* Trusted Delivery */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame8}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >{`Trusted Delivery`}</p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Deadlines met, promises kept. We're not learning on your dime we're here to deliver. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Access to Top Talent */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame9}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >{`Access to Top Talent`}</p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Gain on-demand access to senior-level developers and tech leads with deep experience across industries and stacks. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Built-In Flexibility */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame10}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >{`Built-In Flexibility`}</p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Scale technical capacity up or down depending on project needs, deadlines, or business cycles. `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rapid Problem Solving */}
                  <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-[320px] shadow-[6px_6px_0px_0px_#752616]">
                    <div
                      aria-hidden="true"
                      className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
                        <div className="aspect-[460/475] content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[120px] h-[120px]">
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[460px] size-full"
                            src={imgFrame12}
                          />
                        </div>
                        <p
                          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] text-center text-white uppercase whitespace-pre"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                          }}
                        >
                          Rapid Problem Solving
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] text-center">{`Tough technical issues resolved quickly by experts who've solved them before. `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="h-[240px] relative w-[100vw]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1440 240"
              >
                <path
                  d="M0 0L1440 240L0 240V0Z"
                  fill="var(--fill-0, #000F14)"
                  id="Polygon 10"
                />
              </svg>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="h-[240px] relative shrink-0 w-full">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 240"
            >
              <path
                d="M0 0L1440 240L0 240V0Z"
                fill="var(--fill-0, #DB4B13)"
                id="Polygon 10"
              />
            </svg>
          </div>
          <div className="h-[800px] relative shrink-0 w-full">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 800"
            >
              <path
                d="M0 0H1440V800H0V0Z"
                fill="var(--fill-0, #DB4B13)"
                id="Polygon 4"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] w-full">
              <div className="h-[240px] relative w-full">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 240"
                >
                  <path
                    d="M0 0L1440 240L0 240V0Z"
                    fill="var(--fill-0, #DB4B13)"
                    id="Polygon 6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ContentContainer2 isMobile={isMobile} />
        </>
      )}
    </div>
  );
}

// DNA Section Components
function Frame30() {
  return (
    <div className="bg-[#00303f] h-[192px] relative rounded-[24px] shadow-[6px_6px_0px_0px_rgba(0,95,106,0.5)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[192px] items-start justify-between leading-[1.5] not-italic px-[24px] py-[48px] relative text-[16px] text-white w-full">
          <p className="relative shrink-0 w-full">{`We are a team of technical specialists who help companies bridge the gap between their technical needs and in-house capabilities. We enhance your digital capacity, so you can confidently deliver on client demands and business growth without overstretching your team. `}</p>
          <p className="relative shrink-0 w-full">{`Our founder has held leading technical roles for the past 20 years and has been on the cutting edge of change, from the rise of web 2.0 to today's AI-driven, cloud-native ecosystems. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className="flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00303f] text-[48px] text-center uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 75" }}
      >
        <p className="leading-[normal]">Our DNA</p>
      </div>
      <Frame30 />
    </motion.div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1080px] relative rounded-[24px] shrink-0 w-[80vw]">
      <Frame72 />
    </div>
  );
}

function Work() {
  return (
    <motion.div
      className="basis-0 bg-[#db4b13] grow min-h-px min-w-px relative rounded-[24px] shadow-[6px_6px_0px_0px_rgba(0,95,106,0.5)] shrink-0"
      data-name="Work"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[48px] items-center justify-center p-[48px] relative w-full">
          <div
            className="aspect-[500/500] basis-0 grow min-h-px min-w-px pointer-events-none relative rounded-[400px] shrink-0"
            data-name="dna 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[400px] size-full"
              src={imgDna1}
            />
            <div
              aria-hidden="true"
              className="absolute border-[12px] border-solid border-white inset-0 rounded-[400px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Frame31() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">
        We've led technical teams for some of the world's
        premier companies, bringing enterprise-level thinking to
        every project.
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame34 />
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow h-full leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">{`We speak both tech and business, so you get solutions that are not just well-built, but commercially sound. `}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame38 />
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow h-full leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">{`Whether you need a project delivered, a team extension, or a trusted second opinion, we scale to fit your needs. `}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame40 />
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow h-full leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">{`We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame42 />
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow h-full leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white whitespace-pre-wrap">{`We're not just  we're strategic technical partners who care about your long-term success. `}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-50% from-[#de541e] gap-[20px] items-center justify-center rounded-[460px] shrink-0 size-[16px] to-50% to-[#ef8354]" />
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative rounded-[12px] shrink-0 w-full">
      <Frame44 />
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow h-full leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">{`We're a team of technical experts with the soft skills that make us genuinely easy to work with. `}</p>
    </div>
  );
}

function Frame47() {
  return (
    <motion.div
      className="basis-0 bg-[#00303f] grow min-h-px min-w-px relative rounded-[24px] self-stretch shadow-[6px_6px_0px_0px_rgba(0,95,106,0.5)] shrink-0"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-[24px] py-[64px] relative size-full">
          <Frame33 />
          <Frame37 />
          <Frame39 />
          <Frame41 />
          <Frame43 />
          <Frame45 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center max-w-[1080px] relative shrink-0 w-[80vw]">
      <Work />
      <Frame47 />
    </div>
  );
}

function ContentContainer3() {
  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[24px] shrink-0"
      data-name="Content container"
    >
      <Frame66 />
      <Frame48 />
    </div>
  );
}

function OurDnaSection({
  isMobile,
  isMediumScreen,
}: {
  isMobile: boolean;
  isMediumScreen: boolean;
}) {
  return (
    <div
      className={
        isMobile
          ? "relative shrink-0 w-full"
          : isMediumScreen
            ? "relative shrink-0 w-full"
            : "relative box-border content-stretch flex flex-col gap-[24px] h-[1000px] items-center justify-center overflow-clip px-0 py-[200px] w-full"
      }
      data-name="Our DNA section"
    >
      {isMobile ? (
        <OurDnaMobile />
      ) : isMediumScreen ? (
        <OurDnaMobile />
      ) : (
        <ContentContainer3 />
      )}
    </div>
  );
}

// Services Section
function ChevronIcon() {
  return (
    <div
      className="bg-[#a31500] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[12px] py-0 relative shrink-0 rounded-br-[12px] rounded-tr-[12px]"
      data-name="Chevron"
    >
      <div
        className="h-[10px] relative shrink-0 w-[12px]"
        data-name="Icon"
      >
        <svg
          className="block size-full"
          fill="none"
          viewBox="0 0 20 10"
        >
          <path
            d="M2 1L10 8L18 1"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function CustomDropdown({
  value,
  options,
  onChange,
  isMobile,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  isMobile?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#DB4B13] box-border content-stretch flex flex-row gap-0 h-[40px] items-stretch overflow-clip relative rounded-[12px] shrink-0 transition-colors cursor-pointer ${!isMobile ? "hover:bg-[#B01D00]" : ""}`}
        data-name="Dropdown"
        {...(!isMobile && {
          whileHover: { scale: 1.05 },
        })}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[16px] py-0 relative rounded-bl-[12px] rounded-tl-[12px]"
          data-name="Text"
        >
          <p
            className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[20px] text-nowrap text-white uppercase whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 75" }}
          >
            {value}
          </p>
        </div>
        <ChevronIcon />
      </motion.button>

      {isOpen && (
        <div className="absolute top-full mt-[8px] left-0 w-full min-w-[200px] bg-[#00303f] rounded-[12px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] overflow-hidden z-10">
          {options.map((option) => (
            <motion.button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-[16px] py-[12px] text-left font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold text-[18px] text-white uppercase transition-colors cursor-pointer ${!isMobile ? "hover:bg-[#DB4B13]" : ""}`}
              style={{ fontVariationSettings: "'wdth' 75" }}
              {...(!isMobile && {
                whileHover: { scale: 1.02 },
              })}
              whileTap={{ scale: 0.98 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}

function ServicesSection({ isMobile }: { isMobile: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      name: "UI/UX Design",
      description:
        "Creating intuitive, user-centered designs that enhance engagement and deliver exceptional experiences across all platforms.",
      details: [
        "User research and persona development",
        "Wireframing and interactive prototyping",
        "Visual design and design system creation",
      ],
      icon: imgUiUxDesignIcon,
    },
    {
      name: "Web Development",
      description:
        "Building responsive, scalable web applications with modern technologies that drive your business forward.",
      details: [
        "Custom web applications built with React, Vue, or Angular",
        "Progressive web apps for cross-platform compatibility",
        "E-commerce platforms and content management systems",
      ],
      icon: imgServiceImage,
    },
    {
      name: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      details: [
        "iOS and Android native development",
        "React Native and Flutter cross-platform solutions",
        "Mobile app UI/UX design and optimization",
      ],
      icon: imgAppDevelopmentIcon,
    },
    {
      name: "Maintenance & support",
      description:
        "Enterprise-grade software engineering solutions with a focus on scalability, performance, and maintainability.",
      details: [
        "Microservices architecture and system design",
        "API development and third-party integrations",
        "Code review and technical consultation",
      ],
      icon: imgEngineeringIcon,
    },
    {
      name: "AI Engineering",
      description:
        "Leveraging artificial intelligence to optimize processes, enhance decision-making, and unlock new capabilities.",
      details: [
        "AI-powered features and intelligent automation",
        "Machine learning model integration and deployment",
        "Data analysis and predictive analytics",
      ],
      icon: imgAiIntegrationIcon,
    },
  ];

  return (
    <div
      className="relative content-stretch flex flex-col items-start w-full overflow-visible"
      data-name="Our Services section"
    >
      <div
        className="bg-[#db4b13] h-[800px] relative shrink-0 w-full"
        data-name="Content container (BG)"
      >
        <div className="flex flex-col items-center justify-center rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col gap-[48px] h-[800px] items-center justify-center px-0 py-0 relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full px-[0px] py-[28px]">
              <div className="flex flex-col items-center justify-center relative shrink-0 h-auto min-h-[96px]">
                <h2 className="font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold text-[48px] text-white uppercase m-0 px-[24px] py-[0px]">{`Our Services`}</h2>
              </div>
              <div className="box-border content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                {/* Carousel Container - Full Bleed */}
                <div className="relative w-full py-[48px]">
                  <div className="relative w-full">
                    {/* Previous Button - Hidden on medium screens, visible on large+ */}
                    <motion.button
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex - 1 + services.length) %
                            services.length,
                        )
                      }
                      className={`absolute left-[96px] top-1/2 -translate-y-1/2 z-20 bg-[#DB4B13] p-[16px] rounded-full transition-colors cursor-pointer hidden min-[1001px]:block ${!isMobile ? "hover:bg-[#B01D00]" : ""}`}
                      aria-label="Previous service"
                      {...(!isMobile && {
                        whileHover: { scale: 1.05 },
                      })}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </motion.button>

                    {/* Carousel Track - Full Width with drag on medium screens */}
                    <motion.div
                      className="relative w-full h-[550px] overflow-visible max-[1000px]:cursor-grab max-[1000px]:active:cursor-grabbing"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipeThreshold = 50;
                        if (offset.x > swipeThreshold) {
                          // Swiped right - go to previous
                          setActiveIndex(
                            (activeIndex -
                              1 +
                              services.length) %
                              services.length,
                          );
                        } else if (offset.x < -swipeThreshold) {
                          // Swiped left - go to next
                          setActiveIndex(
                            (activeIndex + 1) % services.length,
                          );
                        }
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                        {services.map((service, index) => {
                          const offset = index - activeIndex;
                          const isActive = offset === 0;

                          return (
                            <motion.div
                              key={service.name}
                              initial={false}
                              animate={{
                                x: `${offset * 500}px`,
                                scale: isActive ? 1 : 0.8,
                                opacity: isActive ? 1 : 0.5,
                                zIndex: isActive ? 10 : 1,
                              }}
                              transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="absolute bg-[#00303f] rounded-[24px] shadow-[6px_6px_0px_0px_#752616] overflow-hidden"
                              style={{
                                width: isMobile
                                  ? "80vw"
                                  : "450px",
                                maxWidth: isMobile
                                  ? "80vw"
                                  : "450px",
                                pointerEvents: isActive
                                  ? "auto"
                                  : "none",
                              }}
                            >
                              <div className="box-border content-stretch flex flex-col gap-[32px] items-center p-[40px] relative">
                                {/* Service Image */}
                                <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[200px]">
                                  <img
                                    alt=""
                                    className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[200px] size-full"
                                    src={service.icon}
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-[8px] border-solid border-white inset-0 rounded-[200px]"
                                  />
                                </div>

                                {/* Service Name */}
                                <p className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[32px] text-center text-white uppercase">
                                  {service.name}
                                </p>

                                {/* Service Description */}
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic text-[#d0fffb] text-[15px] text-center">
                                  {service.description}
                                </p>

                                {/* Service Details */}
                                <div className="content-stretch flex flex-col gap-[14px] items-start w-full">
                                  {service.details.map(
                                    (detail, idx) => (
                                      <div
                                        key={idx}
                                        className="flex gap-[10px] items-start w-full"
                                      >
                                        <div className="bg-[#db4b13] rounded-full shrink-0 size-[6px] mt-[7px]" />
                                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic text-[#d0fffb] text-[13px] flex-1">
                                          {detail}
                                        </p>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Next Button - Hidden on medium screens, visible on large+ */}
                    <motion.button
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex + 1) % services.length,
                        )
                      }
                      className={`absolute right-[96px] top-1/2 -translate-y-1/2 z-20 bg-[#DB4B13] p-[16px] rounded-full transition-colors cursor-pointer hidden min-[1001px]:block ${!isMobile ? "hover:bg-[#B01D00]" : ""}`}
                      aria-label="Next service"
                      {...(!isMobile && {
                        whileHover: { scale: 1.05 },
                      })}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-[12px] mt-[80px] relative z-30 px-[0px] py-[24px]">
                    {services.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
                          index === activeIndex
                            ? "w-[32px] bg-white/60"
                            : "w-[8px] bg-white/40"
                        }`}
                        aria-label={`Go to service ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          {!isMobile && (
            <div className="h-[240px] relative w-[100vw]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1440 240"
              >
                <path
                  d="M0 0L1440 240L0 240V0Z"
                  fill="var(--fill-0, #DB4B13)"
                  id="Polygon 10"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile Natwest Logo
function Natwest21Mobile() {
  return (
    <div className="aspect-[42/46] w-full overflow-clip relative">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 46"
      >
        <path d={svgPathsMobile.p71f7a00} fill="#540462" />
      </svg>
    </div>
  );
}

// Projects Section - Logo Components
function Natwest21() {
  return (
    <div className="aspect-[128/141] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="absolute inset-[80.78%_0.09%_0.17%_0.09%]">
        <div className="absolute inset-[85.16%_9.82%_0.17%_17.53%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 31 7"
          >
            <path
              d={svgPaths.p71f7a00}
              fill="var(--fill-0, #540462)"
            />
          </svg>
        </div>
        <div className="absolute inset-[93.11%_73.01%_2.98%_20.97%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3 2"
          >
            <path
              d={svgPaths.p17ec1420}
              fill="var(--fill-0, white)"
            />
          </svg>
        </div>
        <div className="absolute inset-[80.79%_22.42%_0.19%_31.39%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 9"
          >
            <path
              d={svgPaths.p2da66f00}
              fill="var(--fill-0, #540462)"
            />
          </svg>
        </div>
        <div className="absolute inset-[87.96%_26%_9.07%_67.53%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3 2"
          >
            <path
              d={svgPaths.p9dee000}
              fill="var(--fill-0, white)"
            />
          </svg>
        </div>
        <div className="absolute inset-[80.78%_0.09%_0.24%_0.09%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 42 9"
          >
            <path
              d={svgPaths.p5186000}
              fill="var(--fill-0, #540462)"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_6.67%_32.11%_68.58%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11 18"
        >
          <path
            d={svgPaths.p163ebf80}
            fill="var(--fill-0, #FF0020)"
          />
        </svg>
      </div>
      <div className="absolute bottom-[80.68%] left-[25.31%] right-[37.6%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 9"
        >
          <path
            d={svgPaths.p28f66b70}
            fill="var(--fill-0, #FF0020)"
          />
        </svg>
      </div>
      <div className="absolute bottom-[61.27%] left-[50.04%] right-[25.23%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11 18"
        >
          <path
            d={svgPaths.p1df61b00}
            fill="var(--fill-0, #FF0020)"
          />
        </svg>
      </div>
      <div className="absolute inset-[29.16%_56.26%_51.36%_6.72%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 9"
        >
          <path
            d={svgPaths.p267c1400}
            fill="var(--fill-0, #FF0020)"
          />
        </svg>
      </div>
      <div className="absolute inset-[48.64%_56.26%_32.11%_6.72%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 9"
        >
          <path
            d={svgPaths.pd35b800}
            fill="var(--fill-0, #FF0020)"
          />
        </svg>
      </div>
    </div>
  );
}

function LogoCard({
  children,
  index,
  onClick,
}: {
  children: React.ReactNode;
  index?: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[12px] relative rounded-[10px] shrink-0 w-[206px] cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.05 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.05 },
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

function OurProjectsSection({
  isMobile,
  onLogoClick,
}: {
  isMobile: boolean;
  onLogoClick: (companyName: string) => void;
}) {
  return isMobile ? (
    <div
      className="relative shrink-0 w-full bg-[#DB4B13] overflow-hidden"
      data-name="Our projects section"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center pb-[64px] pt-0 px-[24px] relative w-full">
          {/* SVG Background */}
          <div className="absolute h-[559.5px] left-0 top-[140px] w-full pointer-events-none">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 375 560"
            >
              <path
                d={svgPathsFigmaMobile.p17661240}
                fill="#000F14"
              />
            </svg>
          </div>

          {/* Header */}
          <div className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[48px] py-0 relative w-full">
                <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
                  <p className="leading-none">Our Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Grid */}
          <div className="relative shrink-0 w-full mb-[64px]">
            <ClickableLogoGrid onLogoClick={onLogoClick} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="relative content-stretch flex flex-col h-[1080px] items-start w-full"
      data-name="Our Projects section"
    >
      <div className="h-[240px] relative shrink-0 w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 240"
        >
          <g>
            <path d={svgPaths.p11f0932} fill="#000F14" />
            <path
              d="M0 0L1440 240L0 240V0Z"
              fill="var(--fill-0, white)"
            />
          </g>
        </svg>
      </div>
      <div className="h-[600px] relative shrink-0 w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
        >
          <path
            d="M0 0H1440V600H0V0Z"
            fill="var(--fill-0, white)"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-[240px] relative w-full">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 240"
            >
              <g>
                <path d={svgPaths.p11f0932} fill="#DB4B13" />
                <path
                  d="M0 0L1440 240L0 240V0Z"
                  fill="var(--fill-0, white)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#00303f] box-border content-stretch flex flex-col gap-[48px] h-[800px] items-center left-1/2 px-[24px] py-[64px] rounded-[48px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[80vw] max-w-[1080px]">
        <div
          aria-hidden="true"
          className="absolute border-[24px] border-solid border-white inset-[-24px] pointer-events-none rounded-[72px] shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)]"
        />
        <div
          className="flex flex-col font-['Roboto:Condensed_Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[48px] text-center text-white uppercase w-[min-content]"
          style={{ fontVariationSettings: "'wdth' 75" }}
        >
          <p className="leading-[normal]">Our Projects</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full px-[24px]">
          <div
            className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#d0fffb]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontSize: "clamp(14px, 1.5vw, 16px)",
            }}
          >
            <p className="mb-0 w-full">
              {`At InComplex, we build web solutions that don't just work, they work hard for your business. Whether it's a fast-growing startup needing a sharp digital foundation or a global enterprise pushing the limits of what's technically possible, we bring clarity, speed, and precision to every project. Our team doesn't do off-the-shelf, we collaborate closely to craft platforms that are not only technically sound but strategically aligned with your goals.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>
              Below are just a few of the projects our engineers
              have helped bring to life, each one a testament to
              our ability to solve complex problems with clean,
              scalable, and smart solutions.
            </p>
          </div>
        </div>
        <InteractiveLogoGrid onLogoClick={onLogoClick} />
      </div>
    </div>
  );
}

// We See You Section
function Card1({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div
      className={
        isMobile
          ? "basis-0 bg-white grow min-h-px min-w-px max-w-[80vw] relative rounded-[24px] shrink-0"
          : "basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0"
      }
      data-name="Card 1"
      {...(!isMobile && {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: 0.1 },
        whileHover: { y: -10, transition: { duration: 0.3 } },
      })}
    >
      {isMobile ? (
        <>
          <div
            aria-hidden="true"
            className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]"
          />
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
              <div
                className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 75" }}
              >
                <p className="leading-[normal]">
                  {`Stuck at the `}
                  <br aria-hidden="true" />
                  Starting Line?
                </p>
              </div>
              <div
                className="h-[130px] relative shrink-0 w-[213px]"
                data-name="starting line"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgStartingLine}
                />
              </div>
              <div
                className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[16px] w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <ul className="mb-0">
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Spotted a major market opportunity, but don't have the in-house technical skills to seize it? `}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
            <div
              className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
              style={{ fontVariationSettings: "'wdth' 75" }}
            >
              <p className="leading-[normal]">
                {`Stuck at the `}
                <br aria-hidden="true" />
                Starting Line?
              </p>
            </div>
            <div
              className="h-[130px] relative shrink-0 w-[213px]"
              data-name="starting line"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgStartingLine}
              />
            </div>
            <div
              className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[16px] w-[min-content]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <ul className="mb-0">
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-0">&nbsp;</p>
              <ul>
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">{`Spotted a major market opportunity, but don't have the in-house technical skills to seize it? `}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Card5({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div
      className={
        isMobile
          ? "basis-0 bg-white grow min-h-px min-w-px max-w-[80vw] relative rounded-[24px] shrink-0"
          : "basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0"
      }
      data-name="Card 2"
      {...(!isMobile && {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: 0.2 },
        whileHover: { y: -10, transition: { duration: 0.3 } },
      })}
    >
      {isMobile ? (
        <>
          <div
            aria-hidden="true"
            className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]"
          />
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
              <div
                className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 75" }}
              >
                <p className="leading-[normal]">
                  {`Need a Better `}
                  <br aria-hidden="true" />
                  Tech Partner?
                </p>
              </div>
              <div
                className="relative shrink-0 size-[130px]"
                data-name="handshake icon"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgHandshakeIcon}
                />
              </div>
              <div
                className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <ul className="mb-0">
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">
                      Struggling to find reliable technical
                      partners who understand both the business
                      and technical landscape?
                    </span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
            <div
              className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
              style={{ fontVariationSettings: "'wdth' 75" }}
            >
              <p className="leading-[normal]">
                {`Need a Better `}
                <br aria-hidden="true" />
                Tech Partner?
              </p>
            </div>
            <div
              className="relative shrink-0 size-[130px]"
              data-name="handshake icon"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgHandshakeIcon}
              />
            </div>
            <div
              className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <ul className="mb-0">
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">
                    Struggling to find reliable technical
                    partners who understand both the business
                    and technical landscape?
                  </span>
                </li>
              </ul>
              <p className="leading-[normal] mb-0">&nbsp;</p>
              <ul>
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Card6({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div
      className={
        isMobile
          ? "basis-0 bg-white grow min-h-px min-w-px max-w-[80vw] relative rounded-[24px] shrink-0"
          : "basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0"
      }
      data-name="Card 3"
      {...(!isMobile && {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, delay: 0.3 },
        whileHover: { y: -10, transition: { duration: 0.3 } },
      })}
    >
      {isMobile ? (
        <>
          <div
            aria-hidden="true"
            className="absolute border-[#00303f] border-[12px] border-solid inset-[-6px] pointer-events-none rounded-[30px]"
          />
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
              <div
                className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 75" }}
              >
                <p className="leading-[normal]">
                  {`Bottlenecks `}
                  <br aria-hidden="true" />
                  Slowing You Down?
                </p>
              </div>
              <div
                className="relative shrink-0 size-[130px]"
                data-name="image 16"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgBottleneck1}
                />
              </div>
              <div
                className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <ul className="mb-0">
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
                  </li>
                </ul>
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="leading-[normal]">
                      Facing a critical client deadline, but
                      your current technical team just doesn't
                      have the capacity to deliver on time?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
            <div
              className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
              style={{ fontVariationSettings: "'wdth' 75" }}
            >
              <p className="leading-[normal]">
                {`Bottlenecks `}
                <br aria-hidden="true" />
                Slowing You Down?
              </p>
            </div>
            <div
              className="relative shrink-0 size-[130px]"
              data-name="image 16"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgBottleneck1}
              />
            </div>
            <div
              className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <ul className="mb-0">
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
                </li>
              </ul>
              <p className="leading-[normal] mb-0">&nbsp;</p>
              <ul>
                <li className="list-disc ms-[24px]">
                  <span className="leading-[normal]">
                    Facing a critical client deadline, but your
                    current technical team just doesn't have the
                    capacity to deliver on time?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function CardsContainer({ isMobile }: { isMobile: boolean }) {
  return isMobile ? null : (
    <div
      className="bg-[#00303f] max-w-[1080px] relative rounded-[36px] shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)] shrink-0 w-[80vw]"
      data-name="Cards Container"
    >
      <div className="flex flex-row items-center justify-center max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center max-w-inherit p-[24px] relative w-full">
          <Card1 isMobile={isMobile} />
          <Card5 isMobile={isMobile} />
          <Card6 isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}

function Header({ isMobile }: { isMobile: boolean }) {
  return isMobile ? (
    <div
      className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[270px]">
            <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
              <p className="leading-none">We see you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex items-end justify-center px-[48px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[48px] text-center text-white uppercase">
            <p className="leading-none">We see you…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer5({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full"
      data-name="Content container"
    >
      <Header isMobile={isMobile} />
      <CardsContainer isMobile={isMobile} />
    </div>
  );
}

function WeSeeYouSection({
  isMobile,
  isMediumScreen,
}: {
  isMobile: boolean;
  isMediumScreen: boolean;
}) {
  return isMobile ? (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[24px] relative shrink-0 w-full"
      data-name="We see you section"
    >
      <Header isMobile={isMobile} />
      <div className="h-[601px] relative shrink-0 w-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 375 601"
        >
          <path
            d="M0 74L375 0V527L0 601V74Z"
            fill="var(--fill-0, #00303F)"
            id="Rectangle 46"
          />
        </svg>
      </div>
      <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[calc(50%+47.5px)] translate-y-[-50%] w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-[24px] h-[514px] items-center pl-[24px] pr-[24px] py-[24px] min-w-max">
          <Card1 isMobile={isMobile} />
          <Card5 isMobile={isMobile} />
          <Card6 isMobile={isMobile} />
        </div>
      </div>
    </div>
  ) : isMediumScreen ? (
    <div
      className="relative shrink-0 w-full"
      data-name="We see you section"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(0, 15, 21) 0%, rgb(0, 15, 21) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center relative size-full px-[0px] py-[48px]">
          <div className="content-stretch flex flex-col items-start relative rounded-[48px] shrink-0 w-full">
            <div
              className="relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full"
              data-name="Header"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex items-center justify-center px-[0px] relative w-full py-[24px]">
                  <div className="flex flex-col font-['Roboto_Condensed:ExtraBold',_sans-serif] font-extrabold justify-end leading-[0] relative shrink-0 text-[36px] text-nowrap text-white uppercase">
                    <p className="leading-none whitespace-pre">
                      We see you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-[24px] items-center justify-start px-0 py-[24px] relative rounded-[36px] shrink-0 w-[100vw] overflow-x-auto scrollbar-hide">
              <div className="flex gap-[24px] min-w-max px-[24px] py-[0px]">
                <div className="basis-0 bg-white grow min-h-px min-w-[320px] max-w-[80vw] relative rounded-[24px] shrink-0">
                  <div className="flex flex-col items-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
                      <div
                        className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                        style={{
                          fontVariationSettings: "'wdth' 75",
                        }}
                      >
                        <p className="leading-[normal]">
                          {`Need a Better `}
                          <br aria-hidden="true" />
                          Tech Partner?
                        </p>
                      </div>
                      <div
                        className="relative shrink-0 size-[180px]"
                        data-name="handshake icon"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                          src={imgHandshakeIcon}
                        />
                      </div>
                      <div
                        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      >
                        <ul className="mb-0">
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">
                              Struggling to find reliable
                              technical partners who understand
                              both the business and technical
                              landscape?
                            </span>
                          </li>
                        </ul>
                        <p className="leading-[normal] mb-0">
                          &nbsp;
                        </p>
                        <ul>
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">{`Tired of losing time (and money) trying to piece together outsourced development teams? `}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 bg-white grow min-h-px min-w-[320px] max-w-[80vw] relative rounded-[24px] shrink-0">
                  <div className="flex flex-col items-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
                      <div
                        className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                        style={{
                          fontVariationSettings: "'wdth' 75",
                        }}
                      >
                        <p className="leading-[normal]">
                          {`Stuck at the `}
                          <br aria-hidden="true" />
                          Starting Line?
                        </p>
                      </div>
                      <div
                        className="h-[180px] relative shrink-0 w-[295px]"
                        data-name="starting line"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                          src={imgStartingLine}
                        />
                      </div>
                      <div
                        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[16px] w-[min-content]"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      >
                        <ul className="mb-0">
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">{`Got a problem requiring a technical solution, but need support scoping and implementing it? `}</span>
                          </li>
                        </ul>
                        <p className="leading-[normal] mb-0">
                          &nbsp;
                        </p>
                        <ul>
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">{`Spotted a major market opportunity, but don't have the in-house technical skills to seize it? `}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 bg-white grow min-h-px min-w-[320px] max-w-[80vw] relative rounded-[24px] shrink-0">
                  <div className="flex flex-col items-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[36px] relative w-full">
                      <div
                        className="flex flex-col font-['Roboto:Condensed_SemiBold',_sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0e575f] text-[24px] text-center uppercase w-[min-content]"
                        style={{
                          fontVariationSettings: "'wdth' 75",
                        }}
                      >
                        <p className="leading-[normal]">
                          {`Bottlenecks `}
                          <br aria-hidden="true" />
                          Slowing You Down?
                        </p>
                      </div>
                      <div
                        className="relative shrink-0 size-[180px]"
                        data-name="image 16"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                          src={imgBottleneck1}
                        />
                      </div>
                      <div
                        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[174.5px] justify-center leading-[0] relative shrink-0 text-[#0e575f] text-[16px] w-full"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                        }}
                      >
                        <ul className="mb-0">
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">{`Know you could increase your bottom line if only you had the budget to grow your technical team? `}</span>
                          </li>
                        </ul>
                        <p className="leading-[normal] mb-0">
                          &nbsp;
                        </p>
                        <ul>
                          <li className="list-disc ms-[24px]">
                            <span className="leading-[normal]">
                              Facing a critical client deadline,
                              but your current technical team
                              just doesn't have the capacity to
                              deliver on time?
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="relative box-border content-stretch flex flex-col gap-[48px] h-[1000px] items-center justify-center py-[200px] w-full"
      data-name="We see you section"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(0, 15, 21) 0%, rgb(0, 15, 21) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <ContentContainer5 isMobile={isMobile} />
    </div>
  );
}

// Hero Section
function Group4() {
  return (
    <div className="absolute inset-[17%_5.27%_14.35%_5.1%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 166 28"
      >
        <g>
          <path
            d={svgPaths.pffb8000}
            fill="var(--fill-0, #DB4B13)"
          />
          <g>
            <path
              d={svgPaths.p157d880}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p20c69c00}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.pf457200}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p4e9dd80}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p2984d5b0}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.pab998c0}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p9721470}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p4042880}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p14f47900}
              fill="var(--fill-0, white)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Asset57() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[184.138px]">
      <Group4 />
    </div>
  );
}

function Menu() {
  return (
    <div className="aspect-[48/48] h-full overflow-clip relative shrink-0">
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 18"
          >
            <path
              d="M2 9H23M2 2H23M2 16H23"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavBar({
  isMobile,
  isLoading,
}: {
  isMobile: boolean;
  isLoading: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide NavBar on mobile when loading
  if (isMobile && isLoading) {
    return null;
  }

  const scrollToSection = (sectionName: string) => {
    const section = document.querySelector(
      `[data-name="${sectionName}"]`,
    );
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", section: "Hero section" },
    { label: "About Us", section: "We see you section" },
    { label: "Our Projects", section: "Our Projects section" },
    { label: "Services", section: "Our Services section" },
    { label: "Our DNA", section: "Our DNA section" },
    {
      label: "Benefits",
      section: "The Benefits of Our Approach section",
    },
    {
      label: "Testimonials",
      section: "What Our Clients Say section",
    },
    { label: "FAQ", section: "FAQ's section" },
    { label: "Contact", section: "Contact section" },
  ];

  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 w-[80vw] max-w-[1373px] top-0 z-50 overflow-hidden"
      initial={false}
      animate={{ height: isMenuOpen ? "auto" : "64px" }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="flex flex-col"
        initial={false}
        animate={
          isMenuOpen ? { y: "0%" } : { y: "calc(-100% + 64px)" }
        }
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Menu Content */}
        <div className="bg-[#000f14] overflow-hidden">
          <div className="flex flex-col">
            {/* Menu Items */}
            <nav className="p-[24px]">
              <ul className="flex flex-col gap-[8px]">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={
                      isMenuOpen
                        ? { opacity: 1 }
                        : { opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: isMenuOpen ? index * 0.05 : 0,
                    }}
                  >
                    <button
                      onClick={() =>
                        scrollToSection(item.section)
                      }
                      className={`w-full text-left px-[24px] py-[16px] rounded-[12px] text-white font-['Roboto:Regular',_sans-serif] text-[18px] transition-colors ${!isMobile ? "hover:bg-[#db4b13]" : ""}`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Menu Footer */}
            <div className="p-[24px] pt-0">
              <div className="flex flex-col gap-[12px] items-center border-t border-white/10 pt-[24px]">
                <p className="font-['Inter:Medium',_sans-serif] text-[14px] text-[#d0fffb] text-center">
                  Ready to get started?
                </p>
                <button
                  onClick={() =>
                    scrollToSection("Contact section")
                  }
                  className={`w-full bg-[#b01d00] px-[24px] py-[12px] rounded-[24px] font-['Roboto:Condensed_Black',_sans-serif] text-white text-[18px] uppercase transition-colors ${!isMobile ? "hover:bg-[#8a1600]" : ""}`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bar */}
        <div className="bg-[#000f14] box-border content-stretch flex h-[64px] items-center justify-between px-[24px] py-[12px] rounded-bl-[43px] rounded-br-[43px]">
          <Asset57 />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`aspect-[60/60] bg-[rgba(176,29,0,0)] box-border content-stretch flex gap-[10px] h-full items-center p-[6px] relative rounded-[99px] shrink-0 transition-colors cursor-pointer ${!isMobile ? "hover:bg-[rgba(176,29,0,0.2)]" : ""}`}
          >
            <Menu />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[17%_5.27%_14.35%_5.1%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 240 40"
      >
        <g>
          <path
            d={svgPaths.p183cf100}
            fill="var(--fill-0, #DE541E)"
          />
          <g>
            <path
              d={svgPaths.p2bb6ee80}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p273d0a00}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p2c90d280}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.p3cb1900}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.pde868f0}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.p45cef00}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.p3c5a7600}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.p31375840}
              fill="var(--fill-0, #DE541E)"
            />
            <path
              d={svgPaths.p1f9cc700}
              fill="var(--fill-0, #DE541E)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeroSection({ isMobile }: { isMobile: boolean }) {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );

  if (isMobile) {
    return (
      <div
        className="h-[100vh] relative shrink-0 w-full"
        data-name="Hero section"
      >
        {/* Background Image */}
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMobileHeroBg}
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center size-full px-[20px] relative z-10">
          <div className="bg-[rgb(0,15,21)] box-border content-stretch flex flex-col gap-[32px] items-center justify-center w-[85%] max-w-[380px] shadow-2xl py-[24px] mx-[0px] my-[33px] mt-[-96px] mr-[-16px] mb-[0px] ml-[-17px] rounded-t-[180px] rounded-b-[24px] px-[48px] pt-[72px] pr-[48px] pb-[24px] pl-[48px]">
            {/* Heading */}
            <motion.div
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1
                className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold uppercase m-0"
                style={{
                  fontSize: "32px",
                  letterSpacing: "-0.08em",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white text-[42px]">
                  COMPLEX
                </span>
                <br />
                <span className="text-[rgb(219,75,19)] text-[42px]">
                  PROBLEMS
                </span>
              </h1>

              {/* Arrow */}
              <motion.div
                className="h-[32px] w-[32px] my-[8px] rotate-180 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="-20 -20 598 549"
                  style={{ overflow: "visible" }}
                >
                  <path
                    d="M289 508L289 66M289 66L27.0001 327.999M289 66L551 328"
                    stroke="white"
                    strokeWidth="60"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <h1
                className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold uppercase m-0"
                style={{
                  fontSize: "32px",
                  letterSpacing: "-0.08em",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white text-[42px]">
                  SIMPLE
                </span>
                <br />
                <span className="text-[#DB4B13] text-[42px]">
                  SOLUTIONS
                </span>
              </h1>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Striped Border Effect */}
              <div
                className="absolute inset-0 rounded-[12px] pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, white 0, white 6px, transparent 6px, transparent 12px)",
                  padding: "3px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <button
                onClick={() => {
                  const contactSection = document.querySelector(
                    '[data-name="Contact section"]',
                  );
                  contactSection?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-[#DB4B13] box-border content-stretch flex items-center text-center justify-center relative rounded-[12px] shrink-0 cursor-pointer px-[20px] py-[16px]"
              >
                <p
                  className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold text-white uppercase m-0"
                  style={{
                    fontSize: "18px",
                    letterSpacing: "-0.08em",
                  }}
                >
                  Let's solve yours
                </p>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div
      ref={heroRef}
      className="relative box-border content-stretch flex gap-[10px] h-[100vh] items-center justify-center p-[10px] w-full"
      data-name="Hero section"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom object-cover size-full"
          src={imgHeroBg}
        />
      </motion.div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1000px] px-[48px]">
        <motion.div
          style={{ opacity }}
          className="bg-[#002f3e] rounded-[900px] box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[48px] py-[48px] mb-[200px] relative w-full"
        >
          {/* InComplex Logo */}
          <motion.div
            className="w-[320px] h-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Group />
          </motion.div>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1
              className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold text-white uppercase m-0"
              style={{
                fontSize: "64px",
                letterSpacing: "-0.08em",
                lineHeight: "1.1",
              }}
            >
              COMPLEX PROBLEMS,
              <br />
              SIMPLE SOLUTIONS
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => {
              const contactSection = document.querySelector(
                '[data-name="Contact section"]',
              );
              contactSection?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-[#DB4B13] box-border content-stretch flex items-center justify-center px-[56px] py-[18px] relative rounded-[48px] shrink-0 transition-colors cursor-pointer hover:bg-[#B01D00]"
            data-name="CTA button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p
              className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold text-white uppercase m-0"
              style={{
                fontSize: "22px",
                letterSpacing: "-0.08em",
              }}
            >
              get in touch
            </p>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

// Main Component
export default function PortfolioSite({
  onLogoClick,
  isLoading: isLoadingProp,
}: {
  onLogoClick?: (companyName: string) => void;
  isLoading?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const isLoading = isLoadingProp ?? isInitializing;

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMediumScreen(width >= 768 && width < 1280);
      setIsInitializing(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  if (isLoading) {
    return (
      <div
        className={
          isMobile
            ? "bg-[#DB4B13] relative size-full flex items-center justify-center"
            : "bg-[#000f14] relative size-full flex items-center justify-center"
        }
      >
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className={
        isMobile
          ? "bg-[#DB4B13] relative size-full overflow-y-auto overflow-x-hidden scrollbar-hide"
          : "bg-[#000f14] relative size-full overflow-y-auto overflow-x-hidden"
      }
      data-name="Portfolio Design"
    >
      <div className="relative w-full mx-auto">
        <NavBar isMobile={isMobile} isLoading={isLoading} />
        <HeroSection isMobile={isMobile} />
        <WeSeeYouSection
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        />
        <OurProjectsSection
          isMobile={isMobile}
          onLogoClick={onLogoClick || (() => {})}
        />
        <ServicesSection isMobile={isMobile} />
        <OurDnaSection
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        />
        <TheBenefitsOfOurApproachSection
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        />
        <WhatOurClientsSaySection
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        />
        <FAQSection
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        />
        <ContactSection isMobile={isMobile} />
      </div>
    </div>
  );
}