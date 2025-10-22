"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const CenterImage = ({ heightData }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [heightData, heightData + 500],
    [1, 0]
  );

  const scale = useTransform(scrollYProgress, [0, 1], ["75%", "200%"]);

  return (
    <div className="overflow-hidden sticky top-0">
      <motion.div
        className="h-screen w-full"
        style={{
          scale,
          opacity,
        }}
      >
        {/* Desktop and tablet */}
        <Image
          className="hidden md:block w-full h-full"
          src="/assets/rocks.png"
          alt="surati"
          width={1900}
          height={1900}
          quality={100}
          priority
        />

        {/* Mobile */}
        <Image
          className="block md:hidden w-full h-auto"
          src="/assets/rocks-vertical.png"
          alt="surati"
          width={1900}
          height={1900}
          quality={100}
          priority
        />
      </motion.div>
    </div>
  );
};

export default CenterImage;
