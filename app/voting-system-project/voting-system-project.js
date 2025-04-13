"use client";
import Link from "next/link";
import Image from "next/image";
import votingHome from "../../public/voting-home-page.png";
import votinPage1 from "../../public/voting-page-1.png";
import votingPage2 from "../../public/voting-page-2.png";
import votingPage3 from "../../public/voting-page-3.png";
import presidentialVotingSystem from "../../public/presidential-voting-system.png";

import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import ProjectNav from "../_components/ProjectNav";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// export const metadata = {
//   title: "Voting system project",
// };

export default function VotingSystemProject() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <ProjectNav />
      <motion.div
        ref={ref}
        initial=""
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="project-overview"
        className="lg:pt-[200px] pt-[100px] p-[15px] lg:p-0 lg:ml-[150px] lg:mr-[150px]"
      >
        <h2 className="text-white text-4xl font-bold relative inline-block mb-3 font-[Inconsolata]">
          Presidential Voting system
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <p className="w-[100%] lg:w-[70%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          The Presidential Voting System is a web-based application developed
          using React that allows users to securely vote for presidential
          candidates in real-time. The system features a clean, responsive
          interface where users can view candidates and cast their votes. It
          includes a dynamic vote-counting that updates live as votes are
          submitted. Designed with usability and transparency in mind, the
          platform ensures a smooth and engaging voting experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[70%] mt-10 text-white font-[Inconsolata] text-[20px]">
          <div className="font-[Inconsolata]">
            <h3 className="font-bold">FEATURES</h3>
            <ul className="mt-3 text-[19px]">
              <li className="pb-2">User Authentication</li>
              <li className="pb-2">User Authorization</li>
              <li className="pb-2">Voting System</li>
              <li className="pb-2">User profile</li>
              <li className="pb-2">Admin</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">STACK</h3>
            <ul className="mt-3 text-[19px]">
              <li className="flex gap-2">
                <svg
                  className="text-[40px] mb-[20px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
                React
              </li>
              <li className="flex gap-2">
                <svg
                  className="text-[40px] mb-[20px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                </svg>
                CSS
              </li>
              <li>Bootstrap</li>
              <li className="flex gap-2">
                {" "}
                <svg
                  className="text-[40px] mb-[20px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
                React Router
              </li>
              <li className="flex gap-2">
                <svg
                  className="text-[40px] mb-[20px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"></path>
                </svg>
                Supabase
              </li>
              <li>Netlify</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LINK</h3>
            <ul className="mt-3 text-[19px]">
              <li className="text-blue-500">
                <Link
                  href="https://voting-system-ng.netlify.app/"
                  target="_default"
                >
                  Live Preview
                </Link>
              </li>
              <li className="text-blue-500">
                <Link
                  href="https://github.com/horlayinkahtechie/nigeriaVotingPlatform.git"
                  target="_default"
                >
                  GitHub Repo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Image
          src={votingHome}
          alt="Tomatts Restaurant Ordering and Reservation system"
        />

        <div
          className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white lg:pt-[200px] pt-[100px]"
          id="project-details"
        >
          <div className="lg:p-6 p-2">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              Explanation of Technology used
            </h3>
            <p className="text-[20px] leading-8 mb-8 font-[200px]">
              The presidential voting system was built using React for the
              frontend, ensuring a responsive and interactive user experience.
              For routing between pages, React Router was used to manage
              navigation within the application smoothly.
            </p>
            <p className="text-[20px] leading-8 mb-8">
              The backend and authentication were handled using Supabase, which
              provided a scalable and secure platform for storing user data and
              votes. Authentication features in Supabase ensured that only
              registered users could cast a vote.
            </p>
            <p className="text-[20px] leading-8 mb-8">
              To prevent duplicate voting, Row Level Security (RLS) was enabled
              in Supabase. This ensures that each user can vote only once by
              enforcing strict rules on database access based on user identity.
            </p>

            <p className="text-[20px] leading-8 mb-8">
              Additionally, Bootstrap CSS was used to design a clean and modern
              user interface, making the platform visually appealing and
              mobile-friendly. The system also incorporated real-time vote
              updates using Supabase&apos;s real-time features to display
              accurate and dynamic vote counts.
            </p>
          </div>

          <div className="lg:p-6 p-2">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              Project Purpose and Goal
            </h3>
            <p className="text-[20px] leading-8 mb-8 font-[200px]">
              The purpose of the presidential voting system is to provide a
              secure, transparent, and user-friendly platform where individuals
              can cast votes for presidential candidates digitally. It aims to
              simulate real-life voting scenarios, helping users understand how
              online voting systems work while promoting fairness and
              credibility.
            </p>
            <p className="text-[20px] leading-8 mb-8">
              While the goal is to prevent duplicate voting using authentication
              and database-level security, enable real-time vote tracking to
              display accurate vote counts, create a responsive and accessible
              voting experience for all users, offer a seamless and simple
              voting process to encourage participation.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-1 mt-[100px] text-white"
          id="project-details"
        >
          <div className="p-6">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              How the voting works
            </h3>
            <p className="text-[20px] leading-8 mb-8 font-[200px]">
              To participate in the voting process, users must first create an
              account or log in if they already have one. This ensures that
              every vote is tied to a verified user, preventing multiple votes
              from the same individual. Once authenticated, users will be
              presented with a list of presidential candidates.
            </p>
            <p className="text-[20px] leading-8 mb-8">
              They can then select their preferred candidate and submit their
              vote. After submitting, the system immediately records the vote in
              the database. Thanks to the implementation of Row Level Security
              (RLS) in Supabase, users are restricted from voting more than
              once.
            </p>
            <p className="text-[20px] leading-8 mb-8">
              After voting, users can also view live updates of the voting
              results displayed in a counter format, giving them real-time
              insights into how each candidate is performing.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]"
          id="screenshots"
        >
          <Image
            src={presidentialVotingSystem}
            alt="Voting system screenshot"
            placeholder="blur"
            className="p-10"
            quality={70}
          />
          <Image
            src={votinPage1}
            alt="Voting system screenshot"
            placeholder="blur"
            className="p-10"
            quality={70}
          />
          <Image
            src={votingPage2}
            alt="Voting system screenshot"
            placeholder="blur"
            className="p-10"
            quality={70}
          />
          <Image
            src={votingPage3}
            alt="Voting system screenshot"
            placeholder="blur"
            className="p-10"
            quality={70}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white">
          <div className="lg:p-6 p-2">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              Future Updates
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-1">
              <div>
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  In future updates of the voting system, I plan to implement
                  NIN (National Identification Number) validation to ensure that
                  each voter is a verified Nigerian citizen. This will help
                  improve the integrity of the system by making sure only
                  eligible users participate. Similarly, I also intend to
                  integrate VIN (Voter Identification Number) validation, which
                  will cross-check users with the official voter registry before
                  allowing them to vote. These features will strengthen the
                  system&apos;s authenticity and reduce fraudulent entries.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  Additionally, I want to introduce email and SMS notifications.
                  After a user successfully casts their vote, the system will
                  send a confirmation message to their email or phone number.
                  This gives users confidence that their vote has been recorded
                  properly.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  I&apos;m also considering building an advanced admin panel
                  that allows the admin to manage candidates, monitor voting
                  activity, and view analytics or download results in PDF or CSV
                  format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Contact id="contact" />
      <Footer />
    </>
  );
}
