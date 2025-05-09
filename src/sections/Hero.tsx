"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      className="min-h-[492px] md:min-h-[800px] flex items-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* Planet Start */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* Planet End */}

      {/* Ring 1 Start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 top-1/2 bg-white left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 bg-white left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 border border-white left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center ">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* Ring 1 End */}

      {/* Ring 2 Start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-dashed"
      />
      {/* Ring 2 End */}

      {/* Ring 3 Start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] rounded-full border md:h-[980px] md:w-[980px] border-white opacity-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <div className="absolute h-2 w-2 top-1/2 bg-white left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 bg-white left-full rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* Ring 3 End */}
      <div className="container relative mt-16">
        <h1 className="text-center text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-transparent bg-clip-text bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          Smart Stock
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 bg-transparent text-center max-w-xl mx-auto">
          Streamline your inventory management with advanced AI technology.
          Automate data entry, track real-time updates, and optimize operations
          effortlessly.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.section>
  );
};
