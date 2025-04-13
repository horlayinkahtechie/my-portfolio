"use client";
import Link from "next/link";
import Image from "next/image";
import WildOasis from "../../public/WebWildOasisLanding.webp";
import WildOasisCabin from "../../public/WebWildOasisCabin.webp";
import WildOasisCabins from "../../public/WebWildOasisCabins.webp";
import WildOasisAbout from "../../public/WebWildOasisAbout.webp";
import WildOasisReservation from "../../public/WebWildOasisReservations.webp";
import WildOasisStripe from "../../public/WebWildOasisStripe.webp";

import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function TheWildOasisProject() {
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
        // initial="hidden"
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
          The Wild Oasis Web
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <p className="w-[100%] lg:w-[70%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          The Wild Oasis Web is a fullstack NextJS application build for hotel
          reservations. I built this project while practicing NextJS, Stripe,
          backend and more. This application is minimalistic, accessible to
          everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[70%] mt-10 text-white font-[Inconsolata] text-[20px]">
          <div className="font-[Inconsolata]">
            <h3 className="font-bold">FEATURES</h3>
            <ul className="mt-3 text-[19px]">
              <li className="pb-2">User Sign up</li>
              <li className="pb-2">User Log in</li>
              <li className="pb-2">User Profile</li>
              <li className="pb-2">Cabin Reservation</li>
              <li className="pb-2">Payment System</li>
              <li className="pb-2">Cabin page</li>
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
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
                TailwindCSS
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
                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                </svg>
                NextJS
              </li>
              <li className="flex gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="text-[40px] mb-[20px]"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z"></path>
                </svg>
                Axious
              </li>
              <li className="flex gap-2">
                <svg
                  stroke="currentColor"
                  className="text-[40px] mb-[20px]"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"></path>
                </svg>
                Stripe
              </li>
              <li>Netlify</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LINK</h3>
            <ul className="mt-3 text-[19px]">
              <li className="text-blue-500">
                <Link
                  href="https://the-wild-oasis-web-black.vercel.app/"
                  target="_default"
                >
                  Live Preview
                </Link>
              </li>
              <li className="text-blue-500">
                <Link
                  href="https://github.com/horlayinkahtechie/tomats.git"
                  target="_default"
                >
                  GitHub Repo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-[100px]">
          <Image
            src={WildOasis}
            alt="Wild Oasis Landing page"
            placeholder="blur"
            quality={70}
          />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white lg:pt-[200px] pt-[100px]"
          id="project-details"
        >
          <div className="lg:p-6 p-2">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              Project purpose and Goal
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  This project included the following 5 phases and iterations of
                  the site. Phase 1 is simply the cabins page where visitors can
                  see all the info about a specific cabin and sort the cabins.
                  Phase 2 is implemented log in with NextAuth and creating a
                  profile page with home, reservations and guest profile where
                  user can edit his profile.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  Phase 3 is all about creating a reservation. When user visits
                  one of the cabins first, he needs to be logged in so he can
                  create a reservation. User can select how many days he wants
                  to stay and see if some days are already reserved, how many
                  guests and should breakfast be included.
                </p>
              </div>

              <div>
                <p className="text-[20px] leading-8 mb-8">
                  Phase 4 is enabling users to see their reservations and edit
                  or delete them. The last phase 5 is about enabling stripe
                  hosted checkout page for paying the reservation.
                </p>

                <p className="text-[20px] leading-8 mb-8">
                  The most effective approach I found to implement these 5
                  phases is to create a cabins page, and after that to create
                  log in logic with NextAuth and profile page. Afterwards create
                  seperate cabins where user can create a reservation and see
                  his reservations. And when everything was working to enable
                  paying with stripe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]"
          id="screenshots"
        >
          <Image
            src={WildOasisCabin}
            alt="Wild Oasis Cabin"
            placeholder="blur"
            quality={70}
            className="p-10"
          />
          <Image
            src={WildOasisReservation}
            alt="Reservation page of Wild Oasis"
            placeholder="blur"
            quality={70}
            className="p-10"
          />
          <Image
            src={WildOasisCabins}
            alt="Cabins of Wild Oasis"
            placeholder="blur"
            quality={70}
            className="p-10"
          />
          <Image
            src={WildOasisAbout}
            alt="About page of Wild Oasis"
            placeholder="blur"
            quality={70}
            className="p-10"
          />
        </div>

        <div className="grid grid-cols-1 w-[100%]">
          <Image
            src={WildOasisStripe}
            alt="Wild Oasis payment page with stripe"
            placeholder="blur"
            quality={70}
            className="p-10"
          />
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white">
          <div className="lg:p-6 p-2">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              Future Updates
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  To improve the efficiency and user experience of the
                  restaurant reservation and ordering system, several future
                  enhancements are being planned. One of the major features in
                  development is the live chat system. This will enable
                  real-time communication between customers and the restaurant
                  staff, allowing users to ask questions, request assistance, or
                  make special meal or seating requests directly through the
                  website.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  Another important upgrade is the implementation of email and
                  SMS notifications. This feature will automatically send
                  confirmation messages to customers after placing an order or
                  making a reservation. Additionally, users will receive
                  reminders and important updates regarding their reservations,
                  ensuring better communication and reducing missed bookings.
                </p>
              </div>

              <div>
                <p className="text-[20px] leading-8 mb-8">
                  A more interactive experience will also be introduced through
                  a table layout and selection feature. Customers will be able
                  to view a visual map of the restaurant&apos;s seating
                  arrangement and choose their preferred table when making a
                  reservation. This brings more personalization and convenience
                  to the reservation process and helps the restaurant better
                  manage available seats.
                </p>

                <p className="text-[20px] leading-8 mb-8">
                  These upcoming features aim to make the system more dynamic,
                  engaging, and user-friendly for both the customers and the
                  restaurant staff.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
      <Contact id="contact" />
      <Footer />
    </>
  );
}
