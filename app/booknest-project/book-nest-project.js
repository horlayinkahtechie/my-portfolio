"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import booknest from "../../public/hero.png";
import booknestHeroWithLiveChat from "../../public/hero-with-live-chat.png";
import booknestCheckout from "../../public/booknest-checkout.png";
import booknestAbout from "../../public/about-booknest.png";
import booknestLuxuryListing from "../../public/luxury-listing.png";
import booknestStandardListing from "../../public/standard-listing.png";
import booknestBasicListing from "../../public/basic-listing.png";
import booknestFooter from "../../public/footer.png";
import dashboard from "../../public/dashboard.png";
import messages from "../../public/messages.png";
import bookings from "../../public/bookings.png";
import analytics from "../../public/analytics.png";
import profile from "../../public/profile.png";
import users from "../../public/users.png";
import rooms from "../../public/rooms.png";

import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BookNestProject() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <main>
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
          BookNest
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <p className="w-[100%] lg:w-[90%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          BookNest is an Hotel booking and reservation system that allows users
          to book a room and make payment, from the comfort of their home prior
          to their arrival. Booknest also have live chat for customer support,
          questions or feedback. Booknest also have a secured administrator page
          that allows authorized site admin to manage what is going on the site,
          such as updating listing price, adding listings, replying to customers
          messages, approving payment/bookings. On the Admin page, admin can
          view total income, total users, gather user emails to send promotional
          mail and lots more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[70%] mt-10 text-white font-[Inconsolata] text-[20px]">
          <div className="font-[Inconsolata]">
            <h3 className="font-bold">FEATURES</h3>
            <ul className="mt-3 text-[19px]">
              <li className="pb-2">Google Authentication</li>
              <li className="pb-2">Booking system</li>
              <li className="pb-2">Reservation System</li>
              <li className="pb-2">User profile</li>
              <li className="pb-2">Room listings</li>
              <li className="pb-2">Mobile Responsiveness</li>
              <li className="pb-2">Live chat</li>
              <li className="pb-2">Admin Features</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">TECH STACK</h3>
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
                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                </svg>
                NextJS
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
                Next Router
              </li>
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
                Next Auth
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
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 0L512 256L256 512L0 256L256 0ZM117.3 288L256 149.3L394.7 288L256 426.7L117.3 288Z" />
                </svg>
                Netlify
              </li>
              <li className="flex gap-2">
                <svg
                  className="text-[40px] mb-[20px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 0L512 256L256 512L0 256L256 0ZM117.3 288L256 149.3L394.7 288L256 426.7L117.3 288Z" />
                </svg>
                EmailJS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LINK</h3>
            <ul className="mt-3 text-[19px]">
              <li className="text-blue-500">
                <Link href="https://booknnest.netlify.app" target="_default">
                  Live Preview
                </Link>
              </li>
              <li className="text-blue-500">
                <Link
                  href="https://github.com/horlayinkahtechie/hotel-airbnb-booking.git"
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
            src={booknest}
            alt="Savour Restaurant Ordering and Reservation system"
          />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white lg:pt-[200px] pt-[100px]"
          id="project-details"
        >
          <div className="lg:p-6 p-1">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              How the booking is implemented
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-1">
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  The booking system is built to help users find and reserve
                  rooms based on their preferences while also ensuring that no
                  two people can book the same room at the same time.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  Rooms are categorized into three types: Basic, Standard, and
                  Luxury. Each room has a unique ID, so even if multiple rooms
                  share the same type or features, they are treated as
                  individual units. This makes it easier to track which specific
                  room is available or already booked.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  When a user wants to book a room, they need to log in with
                  their Google account, once they are authenticated, they fill
                  out a form with their name, email, number of days they want to
                  use, check in and check out dates, and payment methods.The
                  system then calculates the total cost based on the number of
                  nights and the room&apos;s price.
                </p>
              </div>

              <div className="p-1">
                <p className="text-[20px] leading-8 mb-8">
                  To avoid double bookings, the system checks if the selected
                  room has already been booked by another user for the same date
                  range. If the room is already taken, the system prevents the
                  booking and shows an appropriate message. This ensures there
                  are no conflicts during check-in. Paystack is used for
                  payment. When the user pays: If the payment is successful, the
                  system stores the bookings and shows a success page, If the
                  payment fails or the user cancels payment process, the system
                  shows a decline page with helpful info.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  When users are trying to book and they got into an issue or
                  they want to ask a question, or they want to give a feedback,
                  they can easily message the hotel site administrator and the
                  hotel admin will repy shortly. The live chat has a feature
                  that tells the user if the message has been sent, seen or not
                  sent or the message is sending, and each message shows the
                  time and date it was sent.
                </p>
              </div>
            </div>
            <Link
              className="text-white underline text-[22px] lg:text-[25px] flex gap-5 cursor-pointer font-[Inconsolata] hover:text-blue-400"
              to="admin_implementation"
              smooth={true}
              duration={500}
            >
              Read more about how the admin management system is implemented{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]"
          id="screenshots"
        >
          <Image
            src={booknestAbout}
            alt="Booknest explore page"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={booknestCheckout}
            alt="Booknest checkout section"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={booknestBasicListing}
            alt="Booknest basic listing"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={booknestStandardListing}
            alt="Booknest standard listing"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={booknestLuxuryListing}
            alt="Booknest luxury listing"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={booknestFooter}
            alt="Booknest Footer"
            placeholder="blur"
            className="p-10"
          />
        </div>
        <div className="grid grid-cols-1 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]">
          <Image
            src={booknestHeroWithLiveChat}
            alt="Booknest Hero with live chat image"
            placeholder="blur"
            className="p-10"
          />
        </div>

        <Link
          className="text-white underline text-[22px] lg:text-[25px] flex gap-5 cursor-pointer font-[Inconsolata] hover:text-blue-400"
          to="admin_screenshots"
          smooth={true}
          duration={500}
        >
          Check the admin page screenshots{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>
        </Link>

        <div
          className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white lg:pt-[200px] pt-[100px]"
          id="admin_implementation"
        >
          <div className="lg:p-6 p-1">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              How the Admin is implemented
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-1">
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  The hotel booking system has a built-in admin management
                  system that an authorized staff or manager can visit to
                  analyze what is going on in the frontend. <br></br> Admin
                  pages are protected by a middleware that check the URL of the
                  current page visited, if the user is an authenticated site
                  administrator i.e the users email matches the email of the
                  admin in the database, it will then allow to route to the
                  admin page, if not route to unauthorized page.
                </p>

                <p className="text-[20px] leading-8 mb-8">
                  On the admin page, there are several pages, each serving
                  different purposes. On the Dashboard, admin can see the number
                  of rooms available, total bookings, total reservation, total
                  revenue, recent bookings, occupied and available room, admin
                  can insert new room into the database that will automatically
                  show on the frontend, admin can see detailed analytics on the
                  analytics page. On the bookings page, admin can see details of
                  the bookings made, such as the userID, email, payment status,
                  room type, room ID etc. On the bookings page also admin can
                  also delete a booking, the same about the reservation page.
                </p>
              </div>

              <div className="p-1">
                <p className="text-[20px] leading-8 mb-8">
                  On the users page, admin can see the total number of users,
                  active users, and inactive users. Also on the users page,
                  admin can see full detail about each users that signs up, such
                  as first name, last name, email, status, user ID etc.{" "}
                  <br></br> Also we have the messages page where admin can view
                  and reply messages sent by users/customers. On the analytics
                  page, admin can analyze a chart that shows detailed monthly,
                  daily and yearly analytics of the bookings and revenues.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  Admin can also edit their profile such as their name, email
                  address. Admin can also view detailed analytics of rooms
                  available, rooms occupied, occupancy rate and insert a new
                  room. When inserting a new room, details like room number,
                  room id, room type, price, ammenities, status, room image will
                  be provided by the admin. And when inserting room image, admin
                  can either choose to upload an image link or an image from the
                  local machine. <br></br> You won&apos;t be able to visit the
                  admin management pages because you are not an authorized site
                  admin
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]"
            id="admin_screenshots"
          >
            <Image
              src={dashboard}
              alt="Dashboard of Booknest admin management system"
              placeholder="blur"
              className="p-10"
            />
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-[100%] mt-[100px] lg:pt-[100px] pt-[20px]"
            id="screenshots"
          >
            <Image
              src={bookings}
              alt="Bookings page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
            <Image
              src={analytics}
              alt="Analytics page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
            <Image
              src={rooms}
              alt="Rooms page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
            <Image
              src={messages}
              alt="Messages page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
            <Image
              src={profile}
              alt="Profile page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
            <Image
              src={users}
              alt="Users page of the admin management system"
              placeholder="blur"
              className="p-10"
            />
          </div>
        </div>
      </motion.div>
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
