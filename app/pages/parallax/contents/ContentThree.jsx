import HoverContainer from "@/app/components/HoverContainer";
import { animationForHeader } from "@/app/framer/motionvalues";
import { motion } from "framer-motion";

const ContentThree = () => {
  return (
    <HoverContainer className="ml-auto w-[300px] relative p-3 xl:mr-[7%]">
      <h1 className="font-secondary text-md xl:text-lg relative z-[5] pointer-events-none font-light">
        I'm a
        <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text px-1 text-lg xl:text-2xl"
        >
          full stack
        </motion.span>
        developer specializing in
        <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text px-1 text-lg xl:text-2xl"
        >
          Next.js
        </motion.span>
        , with the ability to design, develop, and deploy complete web solutions
        from front-end to back-end. I focus on building high-performance,
        scalable applications with seamless user experiences, leveraging
        <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text px-1 text-lg xl:text-2xl"
        >
          modern
          tools
        </motion.span> and    <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text px-1 text-lg xl:text-2xl"
        >
          frameworks
        </motion.span>
        to deliver elegant, maintainable code.
      </h1>
    </HoverContainer>

  );
};

export default ContentThree;
