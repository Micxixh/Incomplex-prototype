import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-4389mwlt3m";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextProject: () => void; // ← Add this line
  companyName: string;
}


const mockImages = [
  "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2t0b3B8ZW58MXx8fHwxNzYxNjQ0ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTY0NDg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
];

mockImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});


interface ContentSection {
  title: string;
  content: string;
  imageIndex: number;
}

const contentSections: ContentSection[] = [
  {
    title: "Web development",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. `,
    imageIndex: 0,
  },
  {
    title: "Web development",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. `,
    imageIndex: 1,
  },
  {
    title: "Web development",
    content: `We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled.

We've helped businesses unlock new revenue streams, hit critical deadlines, and launch products that otherwise would've stalled. `,
    imageIndex: 2,
  },
];

function ArrowRight() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[48px]"
      data-name="Arrow right"
    >
      <div
        className="absolute inset-[20.833%]"
        data-name="Icon"
      >
        <div className="absolute inset-[-7.143%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
          >
            <path
              d={svgPaths.p33d38600}
              stroke="white"
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

function ProjectImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative rounded-[10px] overflow-hidden w-full">
      <img
        src={imageUrl}
        alt="Project screenshot"
        className="object-cover w-full rounded-[10px]"
      />
    </div>
  );
}

export default function NewProjectModal({
  isOpen,
  onClose,
  companyName,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

useEffect(() => {
  const preventScroll = (e: WheelEvent | TouchEvent) => {
    e.preventDefault();
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
  } else {
    document.body.style.overflow = "unset";
    document.body.style.position = "";
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
  }

  return () => {
    document.body.style.overflow = "unset";
    document.body.style.position = "";
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
  };
}, [isOpen]);


useEffect(() => {
  if (!isOpen) return;

  let lastVisibleIndex = -1;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);

          // Only update if the visible section actually changed
          if (index !== -1 && index !== lastVisibleIndex) {
            lastVisibleIndex = index;
            const newImageIndex = contentSections[index].imageIndex;
            setActiveImageIndex(newImageIndex);
          }
        }
      });
    },
    {
      root: scrollContainerRef.current,
      threshold: [0.6], // Trigger only when 60% of the section is visible
    }
  );

  sectionRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => observer.disconnect();
}, [isOpen]);


  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center"
        onTouchMove={(e) => e.preventDefault()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onWheel={(e) => e.stopPropagation()}
      >


          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="bg-[#00202a] relative w-[90vw] max-w-[1440px] h-[85vh] rounded-[12px] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onWheel={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col overflow-clip rounded-[inherit] size-full">
              {/* Company Name Header - Centered above everything */}
              <div
                className={`flex flex-col font-['Roboto:Condensed_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-center text-white uppercase w-full ${isMobile ? 'text-[32px] pt-[48px] pb-[24px]' : 'text-[64px] pt-[96px] pb-[48px]'}`}
                style={{ fontVariationSettings: "'wdth' 75" }}
              >
                <p className="leading-[normal]">
                  {companyName}
                </p>
                {!isMobile && (
                  <p className="text-[20px] text-[#00D1FF] mt-4 font-['Inter:Semi_Bold',sans-serif] font-semibold normal-case">
                    {contentSections[activeImageIndex]?.title || ""}
                  </p>
                )}
              </div>

{isMobile ? (
                // Mobile Layout - Stacked with images inline
                <div className="flex-1 overflow-y-auto">
                  <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] pb-[48px] relative w-full">
                    {contentSections.map((section, index) => (
                      <div
                        key={index}
                        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
                      >
                        {/* Section Content */}
                        <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-full">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[32px] relative w-full">
                              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[20px] text-white uppercase">
                                {section.title}
                              </p>
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d0fffb] text-[14px] w-full whitespace-pre-line">
                                {section.content}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Image for this section */}
                        <ProjectImage imageUrl={mockImages[section.imageIndex]} />
                      </div>
                    ))}
                    
                    {/* Next Project Button at Bottom */}
                    <button
                      onClick={onClose}
                      className="h-[56px] relative rounded-[43px] shrink-0 w-full hover:bg-[#001a23] transition-colors bg-[#00303f]"
                    >
                      <div className="flex flex-row items-center justify-between px-[20px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[20px] text-nowrap text-white uppercase">
                          NEXT PROJECT
                        </p>
                        <ArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                // Desktop Layout - Side by side with sticky image
                <div className="flex flex-row justify-center flex-1 overflow-hidden">
                  <div className="box-border content-stretch flex gap-[64px] h-full items-start justify-center px-[48px] pb-[48px] relative w-full pt-[0px] pr-[96px] pl-[96px]">
                    {/* Left Column - Scrollable Text */}
                    <div
                      ref={scrollContainerRef}
                      onWheel={(e) => e.stopPropagation()}
                      onTouchMove={(e) => e.stopPropagation()}
                      className="box-border content-stretch flex flex-col gap-[37px] h-full items-start overflow-y-auto px-0 py-0 relative shrink-0 w-[35%]"
                    >

                      {/* Content Sections */}
                      <div className="bg-[#00303f] relative rounded-[12px] shrink-0 w-full">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex flex-col gap-[64px] items-start px-[24px] py-[48px] relative w-full">
                            {contentSections.map(
                              (section, index) => (
                                <div
                                  key={index}
                                  ref={(el) =>
                                    (sectionRefs.current[index] =
                                      el)
                                  }
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
                                    {index <
                                      contentSections.length -
                                        1 && (
                                      <div className="h-[48px] shrink-0 w-full" />
                                    )}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Next Project Button at Bottom */}
                      <div className="relative shrink-0 w-full">
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
                                      nEXT PROJECT
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

                    {/* Right Column - Sticky Images */}
                    {/* Right Column - Sticky Images */}
                    <div className="flex items-center justify-center w-[65%] self-stretch overflow-auto">
                      <div className="sticky top-[50%] w-full h-full relative overflow-auto">
                        <AnimatePresence mode="sync">
                          <motion.div
                            key={activeImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                          >
                            <ProjectImage imageUrl={mockImages[activeImageIndex]} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}