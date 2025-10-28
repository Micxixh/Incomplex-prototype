import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-2ltm7nk9r6";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
}

// Mock browser images - these would be replaced with actual project screenshots
const mockImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Desktop mockup 1
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop", // Mobile mockup
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop", // Desktop mockup 2
];

interface ContentSection {
  title: string;
  content: string;
  imageIndex: number;
}

const contentSections: ContentSection[] = [
  {
    title: "Web Development",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.`,
    imageIndex: 0,
  },
  {
    title: "Mobile Development",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.`,
    imageIndex: 1,
  },
  {
    title: "UI/UX Design",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.`,
    imageIndex: 2,
  },
];

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Arrow right">
      <div className="absolute inset-[20.833%]" data-name="Icon">
        <div className="absolute inset-[-7.143%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p33d38600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ScrollableProjectModal({
  isOpen,
  onClose,
  companyName,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && contentSections[index]) {
              setActiveImageIndex(contentSections[index].imageIndex);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-[90vw] max-w-[1400px] h-[85vh] bg-[#00202a] rounded-[12px] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close/Next Button - Fixed Position */}
            <button
              onClick={onClose}
              className="absolute right-[48px] top-[48px] z-20 bg-[#b01d00] hover:bg-[#DB4B13] transition-colors box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[12px] rounded-[43px]"
            >
              <p className="font-['Inter'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">
                NEXT PROJECT
              </p>
              <ArrowRight />
            </button>

            {/* Main Content */}
            <div className="flex h-full">
              {/* Left Column - Scrollable Text Content */}
              <div 
                ref={scrollContainerRef}
                className="basis-0 box-border content-stretch flex flex-col gap-[64px] grow h-full items-start min-h-px min-w-px overflow-y-auto px-0 py-[96px] relative shrink-0"
              >
                {/* Company Name Header */}
                <div className="flex flex-col font-['Roboto:Condensed_Bold',sans-serif] font-bold justify-center leading-[0] px-[48px] relative shrink-0 text-[48px] text-white uppercase w-full" style={{ fontVariationSettings: "'wdth' 75" }}>
                  <p className="leading-[normal]">{companyName}</p>
                </div>

                {/* Content Sections */}
                <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-full mx-[48px] max-w-[calc(100%-96px)]">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col gap-[64px] items-start px-[24px] py-[48px] relative w-full">
                      {contentSections.map((section, index) => (
                        <div
                          key={index}
                          ref={(el) => (sectionRefs.current[index] = el)}
                          className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
                        >
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">
                            {section.title}
                          </p>
                          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[16px] w-full whitespace-pre-line">
                                {section.content}
                              </p>
                            </div>
                            {index < contentSections.length - 1 && (
                              <div className="h-[48px] shrink-0 w-full" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Next Project Button at Bottom */}
                <div className="relative shrink-0 w-full px-[48px]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center relative w-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
                        <button
                          onClick={onClose}
                          className="h-[64px] relative rounded-[43px] shrink-0 w-full hover:bg-[#001a23] transition-colors"
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex h-[64px] items-center justify-between pl-[24px] pr-0 py-[12px] relative w-full">
                              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">
                                NEXT PROJECT
                              </p>
                              <ArrowRight />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky Image Display */}
              <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-start justify-center min-h-px min-w-px relative shrink-0 px-[48px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    {/* Browser Mockup Container */}
                    <div className="aspect-[480/270] bg-[#999999] relative rounded-[10px] shrink-0 w-full">
                      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                        <div className="aspect-[480/270] box-border content-stretch flex flex-col items-center pb-[16px] pt-0 px-[8px] relative size-full">
                          {/* Browser Chrome */}
                          <div className="h-[34px] relative shrink-0 w-full">
                            <div className="size-full">
                              <div className="box-border content-stretch flex h-[34px] items-start justify-between pb-[8px] pt-[16px] px-[4px] relative w-full">
                                <div className="aspect-[19/19] bg-[#999999] h-full rounded-[27px] shrink-0" />
                                <div className="content-stretch flex h-full items-center relative shrink-0">
                                  <div className="bg-[#999999] h-full relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[19px]" />
                                  <div className="bg-[#999999] h-full shrink-0 w-[19px]" />
                                  <div className="bg-[#999999] h-full relative shrink-0 w-[19px]" />
                                  <div className="bg-[#999999] h-full shrink-0 w-[19px]" />
                                  <div className="bg-[#999999] h-full relative rounded-br-[2px] rounded-tr-[2px] shrink-0 w-[19px]" />
                                </div>
                                <div className="bg-[#e8e8e8] h-full relative rounded-[2px] shrink-0 w-[177px]" />
                                <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[121px]">
                                  <div className="bg-[#999999] h-full rounded-[2px] shrink-0 w-[9px]" />
                                  <div className="bg-[#999999] h-full rounded-[2px] shrink-0 w-[9px]" />
                                  <div className="bg-[#999999] h-full rounded-[2px] shrink-0 w-[9px]" />
                                  <div className="bg-[#999999] h-full rounded-[2px] shrink-0 w-[9px]" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Browser Content Area */}
                          <div className="bg-[#e8e8e8] h-full relative rounded-[4px] shrink-0 w-full">
                            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
                              <img
                                src={mockImages[activeImageIndex]}
                                alt={`Project screenshot ${activeImageIndex + 1}`}
                                className="object-cover size-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
