import Image from "next/image";
import RestaurantReservationSystem from "../../public/projects.png";
import TheWildOasis from "../../public/the-wild-oasis.png";
import presidentialVotingSystem from "../../public/presidential-voting-system.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="my-projects"
      className="lg:mt-[300px]  mt-[180px] p-[15px] lg:p-0  lg:ml-[150px] lg:mr-[150px]"
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
            src={RestaurantReservationSystem}
            placeholder="blur"
            alt="Restaurant Ordering and Reservation System with an Administrator"
          />
          <h3 className="text-white text-[25px] lg:text-[30px] font-bold mt-[70px] font-[Inconsolata]">
            Restaurant Ordering and Reservation system
          </h3>
          <p className="mt-4 text-white font-bold text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide mb-[30px] leading-[36px]">
            A fully functional Restaurant website that users can order, reserve
            a seat, track order, cancel order and lots more.
          </p>
          <Link
            className="text-white text-[22px] lg:text-[25px] flex gap-5 font-[Inconsolata]"
            href="#/restaurant-reservations"
          >
            View Project {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
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
            className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
            href="#/the-wild-oasis"
          >
            View Project {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
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
            className="text-white text-[25px] flex gap-5 font-[Inconsolata]"
            href="#/presidential-voting-system"
          >
            View Project {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
