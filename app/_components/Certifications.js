"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import ReactCertificate from "../../public/React-certificate.jpg";
import JavaScriptCertificate from "../../public/JavaScript certificate.jpg";
import HTMLAndCSSCertificate from "../../public/HTML-and-CSS-certificate.jpg";
import VideoCreationCertificate from "../../public/Video Creation and Editing certificate.jpg";
import UXDesignFundamentals from "../../public/ux certificate.png";
import WireFrameAndLowFidelityPrototype from "../../public/low fidelity prototype certificate.png";

export default function Certifications() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about-me" className="scroll-mt-[200px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:pt-[300px] pt-[150px] p-[15px] lg:p-0 lg:ml-[150px] lg:mr-[150px]"
      >
        <h2 className="text-white text-4xl font-bold relative inline-block mb-3">
          My <span className="ml-2">Certifications</span>
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <p className="w-[100%] lg:w-[60%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          Through my experience, I have obtained multiple certifications that
          validate my expertise in web development. These certifications
          demonstrate my commitment to continuous learning and mastery of
          industry-standard technologies, ensuring that I stay up to date with
          the latest advancements in the field.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[50px]">
          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={HTMLAndCSSCertificate}
              placeholder="blur"
              alt="HTML and CSS Certificate"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              Complete HTML and CSS Course
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              In this course, I learnt everything I need to know about Website
              Design, from grid to flexbox, to coloring to website
              responsiveness.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="https://www.udemy.com/certificate/UC-313be613-34f9-4de6-b3cf-4c57627bccfe/"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>
          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={JavaScriptCertificate}
              placeholder="blur"
              alt="JavaScript Certificate"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              Complete JavaScript Course from Zero to Expert
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              In this course, I learnt everything I need to know about
              JavaScript, from String, Array, Objects, Loops, Conditional
              Statement and much more.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="https://www.udemy.com/certificate/UC-0d8cc11e-2359-4c2e-94b1-e43b592a3abd/"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>
          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={ReactCertificate}
              placeholder="blur"
              alt="ReactJS, NextJs, Supabase, TailwindCSS, Redux certificate"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              ReactJS, NextJS, Supabase, TailwindCSS, Redux certificate
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              By completing this course, I was awarded this certificate of
              completion. The certificate also comes with a certificate ID that
              can be used to verify the certificate.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="https://www.udemy.com/certificate/UC-464d275f-751f-402b-837b-c8fa93410b46/"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>

          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={VideoCreationCertificate}
              placeholder="blur"
              alt="Video Creation Certificate"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              Complete Video and Audio Creation at Home
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              From this course, I was able to learn how to create a video, edit
              and enhance with AI tools such as Adobe Podcast, Adobe Premier
              Pro, OBS and Shotcut.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="https://www.udemy.com/certificate/UC-719f42e4-6ee7-40b7-9fb0-e8e52c755364/"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>

          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={UXDesignFundamentals}
              placeholder="blur"
              alt="User Experience Design Fundamentals Certificate"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              User Experience (UX) Design Fundamentals
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              I was Introduced to the basics of User Experience. How to
              empathize, define and ideate what users need.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="#"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>

          <div className="lg:p-[60px] p-[0px] pt-[50px] pl-[0px]">
            <Image
              width={670}
              height={300}
              quality={70}
              src={WireFrameAndLowFidelityPrototype}
              placeholder="blur"
              alt="Wireframing and Low fidelity prototyping (UX Design)"
            />
            <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
              Wireframing and Low Fidelity Prototyping
            </h3>
            <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
              In this course, I learnt about how to sketch a design on a paper
              and digitally.
            </p>
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
              href="#"
            >
              View Certificate {""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
