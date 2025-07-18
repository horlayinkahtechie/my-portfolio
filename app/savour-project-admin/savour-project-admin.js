"use client";
import Link from "next/link";
import Image from "next/image";
import tomatts from "../../public/projects.png";
import AdminDashboard from "../../public/Admin-dashboard.png";
import adminOrdersPage from "../../public/admin-orders-page.png";
import AdminCanceledOrdersPage from "../../public/admin-canceled-order.png";
import AdminReservationsPage from "../../public/admin_reservations_page.png";

import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SavourAdmin() {
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
          Savour Restaurant Ordering and Reservation Administrator
          <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
        </h2>
        <p className="w-[100%] lg:w-[70%] text-white mt-5 leading-[35px] text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          This is the admin part of the savour Restaurant Ordering and
          Reservation System. It enables website manager to be able track
          orders, reservations revenue, canceled orders, new users, mark order
          as delivered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[70%] mt-10 text-white font-[Inconsolata] text-[20px]">
          <div className="font-[Inconsolata]">
            <h3 className="font-bold">FEATURES</h3>
            <ul className="mt-3 text-[19px]">
              <li className="pb-2">Admin Authentication</li>
              <li className="pb-2">Admin Authorization</li>
              <li className="pb-2">Track Orders</li>
              <li className="pb-2">Track Reservations</li>
              <li className="pb-2">Confirm Reservations</li>
              <li className="pb-2">Track Revenue</li>
              <li className="pb-2">Insert Menu</li>
              <li className="pb-2">Access Delivered Orders</li>
              <li className="pb-2">Sales chart</li>
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
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  width="30px"
                  role="img"
                  fill="currentColor"
                  strokeWidth="0"
                  className="bi bi-bootstrap-fill text-[40px] mb-[18px] mt-1"
                  viewBox="0 0 24 24"
                >
                  <title></title>
                  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                </svg>
                Bootstrap
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
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LINK</h3>
            <ul className="mt-3 text-[19px]">
              <li className="text-blue-500">
                <Link
                  href="https://tommat.netlify.app/admin/login"
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
            src={tomatts}
            alt="Savour Restaurant Ordering and Reservation system"
          />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white lg:pt-[200px] pt-[100px]"
          id="project-details"
        >
          <div className="lg:p-6 p-1">
            <h3 className="font-[Inconsolata] text-[35px] font-bold mb-7">
              How the Admin Is implemented
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[20px] leading-8 mb-8 font-[200px]">
                  The admin page of the restaurant ordering and reservation
                  system was designed to give restaurant staff or managers full
                  control over customer interactions and restaurant operations
                  in real time. It was implemented using React.js for the
                  frontend and Supabase for backend data management.
                </p>
                <p className="text-[20px] leading-8 mb-8">
                  The admin interface has a clean, responsive layout built using
                  Bootstrap and later changed to Tailwind CSS. It includes
                  navigation links to different admin sections such as:
                  Dashboard Overview, Order and Reservation tracking, Menu
                  management.
                </p>
              </div>

              <div>
                <p className="text-[20px] leading-8 mb-8">
                  Orders are placed by users on the frontend are automatically
                  synced and displayed using data fetched from Supabase. Each
                  order shows customer name, order items, quantity, total price,
                  and time of order. Admins can mark orders as completed, in
                  progress, or pending.
                </p>

                <p className="text-[20px] leading-8 mb-8">
                  Admins can view all upcoming reservations made through the
                  customer interface. Each reservation includes customer name,
                  selected date/time, number of people, and any special
                  requests. Reservations are retrieved from the Supabase
                  database and can be filtered by date or status. Although, menu
                  is being fetched from an external API, admin can still add
                  menu to the database. Additionally, admin authentication is
                  handled using Supabase Auth, ensuring only authorized users
                  can access the admin panel.
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
            src={AdminDashboard}
            alt="Admin dashboard"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={adminOrdersPage}
            alt="Admin Orders page"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={AdminCanceledOrdersPage}
            alt="Admin Canceled orders page"
            placeholder="blur"
            className="p-10"
          />
          <Image
            src={AdminReservationsPage}
            alt="Admin Seat Reservations page"
            placeholder="blur"
            className="p-10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 w-[100%] mt-[100px] text-white">
          <div className="lg:p-6 p-1">
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
        </div>
      </motion.div>
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
