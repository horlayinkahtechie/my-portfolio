"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [sent, setSent] = useState(false);

  const controls = useAnimation();
  const formRef = useRef();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dt4lfep", // from EmailJS
        "template_hbmczan",
        formRef.current,
        "zLcqtoGgeFglmGnFb"
      )
      .then(
        (result) => {
          console.log("Message sent");
          setSent(true);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

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
      id="contact"
      className="lg:mt-[170px] mt-[100px] p-[15px] lg:p-0 lg:ml-[150px] lg:mr-[150px]"
    >
      <h2 className="text-white text-center lg:text-start text-4xl font-bold mb-3 font-[Inconsolata]">
        Want to get in touch?
      </h2>
      <h2 className="text-white text-center lg:text-start text-4xl font-bold mb-3 font-[Inconsolata]">
        Send me a message!
      </h2>
      <p className="text-white text-center lg:text-start text-[19px] lg:text-[20px] lg:w-[70%] w-[100%]">
        If you&apos;re searching for a developer, need help with something, or
        just want to connect, don&apos;t hesitate to get in touch.
      </p>
      <form className="pt-[40px] mb-[70px]" ref={formRef} onSubmit={sendEmail}>
        <div className="flex gap-4 w-[100%] lg:w-[70%] mb-5">
          {/* Name Field */}
          <div className="block w-[50%]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[19px] font-[Inconsolata] text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              required
              placeholder="John Doe"
              className="mt-1 block w-full h-15 text-white p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="block w-[50%]">
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-[19px] font-[Inconsolata] text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              placeholder="john@example.com"
              className="mt-1 block w-full p-2 border h-15 text-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <label
            htmlFor="name"
            className="block text-sm font-medium  text-[19px] font-[Inconsolata] text-white"
          >
            Message
          </label>
          <textarea
            type="text"
            id="name"
            name="message"
            required
            placeholder="John Doe"
            className="mt-1 block w-full h-70 p-2 border text-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-[30px]">
          <button
            type="submit"
            className="bg-white text-black w-[150px] h-[55px] text-[19px] cursor-pointer"
          >
            Submit
          </button>
        </div>

        {sent && (
          <p className="text-white-500 mt-2 text-white">
            Message sent successfully!
          </p>
        )}
      </form>
    </motion.div>
  );
}
