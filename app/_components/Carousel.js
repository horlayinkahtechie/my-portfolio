"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import myPicture from "../../public/Alao Abdulsalam.jpg";

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
      className="grid grid-cols-1 lg:grid-cols-2 gap-25 lg:pt-[250px] pt-[150px] lg:mt-[0px] ml-[10px] mr-[10px] mb-[430px] lg:mb-[50px] lg:ml-[150px] lg:mr-[150px] min-h-[100vh] h-screen"
    >
      <div className="font-[Inconsolata] text-[33px] text-center lg:text-start lg:text-[2.8rem] font-bold text-white w-[100%]">
        <h3 className="lg:leading-[60px] leading-[40px] lg:text-[33px] lg:mb-[8px]">
          Hi, I&apos;m Abdul-salam.
        </h3>
        <span className="lg:leading-[60px] leading-[40px] lg:text-[65px] ">
          A FrontEnd Developer.
        </span>
        <h3 className="lg:leading-[50px] leading-[40px] lg:text-[33px] lg:mt-2">
          I Focuses on building a user-friendly websites and web applications
          for brands and businesses.
        </h3>

        <div className="mt-10 flex gap-7 justify-center lg:justify-start">
          <a
            href="https://wa.me/2348169415526"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded"
          >
            <FaWhatsapp className="hover:text-green-500 w-9 h-9" />
          </a>
          <a
            href="https://x.com/dev_ola"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="rounded"
          >
            <FaXTwitter className="hover:text-black w-9 h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulsalam-alao-b4217a250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded"
          >
            <FaLinkedin className="hover:text-blue-600 w-9 h-9" />
          </a>
          <a
            href="https://github.com/horlayinkahtechie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded bg-none"
          >
            <FaGithub className="hover:text-gray-800 w-9 h-9" />
          </a>
        </div>
      </div>

      <Image
        src={myPicture}
        quality={100}
        width={500}
        height={100}
        placeholder="blur"
        alt="Alao Abdul-salam Olayinka"
        className="rounded-xl justify-self-center"
      />
    </motion.div>
  );
}
