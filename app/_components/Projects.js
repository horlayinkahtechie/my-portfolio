"use client";
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import RestaurantReservationSystem from "../../public/Admin-dashboard.png";
import TheWildOasis from "../../public/the-wild-oasis.png";
import presidentialVotingSystem from "../../public/presidential-voting-system.png";
import savor from "../../public/Savor.png";
import UNIZIK from "../../public/UNIZIK.png";
import translationApp from "../../public/translateapp.png";

import Link from "next/link";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

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
      id="my-projects"
      className="lg:pt-[300px] pt-[150px] p-[15px] lg:p-0  lg:ml-[150px] lg:mr-[150px]"
    >
      <h2 className="text-white text-4xl font-bold relative inline-block mb-3">
        What I&apos;ve been working on
        <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
      </h2>
      <p className="w-[100%] lg:w-[55%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
        Having a project at work is something I enjoy, along with learning
        something new. <br />
        Take a look at some of the applications that I have been working on:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[40px]">
        <div className="p-4">
          <Image
            width={670}
            height={300}
            quality={70}
            src={savor}
            placeholder="blur"
            alt="Savor Restaurant Ordering and Reservation System with an Administrator"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
            Savor Restaurant Ordering and Reservation system
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            Savor Restaurant Ordering and Reservation system allows
            authenticated users place orders, reserve a seat, with a payment
            system that allows users to pay for what they ordered.
          </p>
          <Link
            className="text-white text-[22px] lg:text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
            href="/tomatts-project"
            target="_blank"
          >
            Read more {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fileRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4">
          <Image
            width={670}
            height={300}
            quality={70}
            src={RestaurantReservationSystem}
            placeholder="blur"
            alt="Savor Restaurant Ordering and Reservation System Admin page"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
            Admin of the Savor Restaurant Ordering and Reservation system
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            A fully functional Restaurant Admin Page where authorized admin can
            access user orders, mark order or reservation as completed, track
            revenue, total users, new and old reservations and orders, also
            insert meal into the database with a well designed UI.
          </p>
          <Link
            className="text-white text-[22px] lg:text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
            href="/tomatts-project-admin"
            target="_blank"
          >
            Read more {""}
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
        <div className="p-4">
          <Image
            width={670}
            height={300}
            src={TheWildOasis}
            quality={70}
            alt="The wild Oasis Website"
            placeholder="blur"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[25px] font-[Inconsolata]">
            The Wild Oasis
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            The Wild Oasis Web is a user friendly fullstack application. The
            purpose of this is to enable users to book cabins that WildOasis
            company offers.
          </p>
          <Link
            className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
            href="/the-wild-oasis-project"
            target="_blank"
          >
            View Project {""}
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
        <div className="p-4 mt-[50px]">
          <Image
            width={670}
            height={300}
            quality={70}
            src={presidentialVotingSystem}
            alt="Presidential Voting System"
            placeholder="blur"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[25px] font-[Inconsolata]">
            Presidential Voting System
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            The Presidential Voting system allows eligible, authenticated
            citizens to vote not more than once via a secure platform.
          </p>
          <Link
            className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
            href="/voting-system-project"
            target="_blank"
          >
            Read more {""}
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
        <div className="p-4 mt-[50px]">
          <Image
            width={670}
            height={300}
            quality={70}
            src={UNIZIK}
            alt="Unizik Alumni website"
            placeholder="blur"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[25px] font-[Inconsolata]">
            UNIZIK Alumni Website
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            I designed a user-friendly and responsive UNIZIK Alumni website for
            a Yaba College of Technology student for their final year project.
            You can read more in the project report.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
              href="https://lustrous-crisp-1be53a.netlify.app"
              target="_blank"
            >
              View Project {""}
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
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
              href="/Uniziq-Alumni-Report.docx"
              target="_blank"
            >
              View Project Report {""}
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
        <div className="p-4 mt-[50px]">
          <Image
            width={670}
            height={300}
            quality={70}
            src={translationApp}
            alt="Nigerian Language Translation App
"
            placeholder="blur"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[25px] font-[Inconsolata]">
            Nigerian Language Translation App
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            A translation App that translates the three popular Nigerian
            Languages which is Igbo, Yoruba and Hausa to English with a simple
            User Interface. You can read more about the project in the project
            report.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
              href="https://sprightly-sprinkles-7b74b9.netlify.app"
              target="_blank"
            >
              View Project {""}
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
            <Link
              className="text-white text-[25px] flex gap-5 font-[Inconsolata] hover:text-blue-400"
              href="/Translation-app-project-report.docx"
              target="_blank"
            >
              View Project Report {""}
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
      </div>
    </motion.div>
  );
}
