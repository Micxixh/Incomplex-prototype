import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Group from "../imports/Group";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#000f14] z-50 flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 3000);
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          className={isMobile ? "w-[200px] h-auto" : "w-[400px] h-auto"}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Group />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#DB4B13] rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Text */}
        <motion.p
          className="font-['Roboto_Condensed:Bold',_sans-serif] text-white uppercase tracking-wider"
          style={{
            fontSize: "14px",
            letterSpacing: "0.2em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
}