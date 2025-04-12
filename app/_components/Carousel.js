// import Image from "next/image";
// import myPicture from "../../public/My-picture.jpg";
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Carousel() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="home"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:pt-[300px] pt-[150px] lg:mt-[0px] ml-[10px] mr-[10px] mb-[50px] lg:ml-[150px] lg:mr-[150px] min-h-[60vh] h-screen"
    >
      <div className="font-[Inconsolata] text-[33px] text-center lg:text-start lg:text-[3rem] font-bold text-white w-[100%]">
        <h3 className="lg:leading-[60px] leading-[40px]">
          Hi there, I&apos;m Abdul-salam.
        </h3>
        <span className="lg:leading-[60px]  leading-[40px]">
          Front End Developer
        </span>
        <h3 className="lg:leading-[60px]  leading-[40px]">
          Focuses on building a user-friendly websites and web applications.
        </h3>
      </div>

      {/* <Image
        src={myPicture}
        quality={70}
        width={700}
        height={200}
        placeholder="blur"
        alt="Alao Abdul-salam Olayinka"
      /> */}
    </motion.div>
  );
}
