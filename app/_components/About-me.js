"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
          About <span className="ml-2">Me</span>
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              Hi, I&apos;m Abdul-salam — a passionate and results-driven Full
              Stack Web Developer with a strong focus on building interactive
              and scalable web applications. I specialize in modern technologies
              like React, Next.js, Tailwind CSS, and Supabase. I also know how
              to effectively leverage AI tools to speed up development, debug
              efficiently, and deliver smarter solutions — because companies
              value developers who can code and think with AI. I enjoy turning
              ideas into real-life projects that solve problems and add value.
            </p>
            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              With experience in building systems such as a restaurant ordering
              and reservation system, hotel booking and reservation system,
              voting system. I&apos;ve honed my skills in both frontend and
              backend development. I pay attention to clean design, smooth user
              experience, and performance optimization.
            </p>

            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              As a Frontend Developer, I prioritize the user&apos;s needs by
              ensuring every interface is intuitive, responsive, and meets user
              expectations. I focus on delivering a seamless experience by
              making websites easy to navigate, accessible across all devices,
              and visually appealing. Additionally, I optimize images and assets
              to enhance site performance and loading speed, ensuring a smooth
              and efficient browsing experience.
            </p>
          </div>

          <div>
            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              My journey in the world of programming began 2021 when I was in
              High school. Since then, I&apos;ve been on an exciting quest to
              explore the vast realms of technology and software development. I
              specialize in Development tools, mainly HTML, CSS, Bootstrap,
              TailwindCSS, JavaScript, Git and GitHub, React, Supabase and
              NextJS. I also have experience in using popular video editing
              tools like OBS, Shotcut, CapCut and Designing tools such as figma.
            </p>
            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              When I&apos;m not coding, I love sharing knowledge through my
              courses and helping others grow in the tech space. I&apos;m always
              eager to learn, improve, and take on new challenges that push me
              forward.
            </p>
            <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
              Over the years, I&apos;ve had the priviledge to work on more than
              10 project and completed more than 8 certifications.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
