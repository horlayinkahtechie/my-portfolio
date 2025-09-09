"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Lola Adebayo",
      role: "CEO at LolasÈlan",
      content:
        "Abdul-salam transformed our e-commerce platform with his exceptional Web developement skills. His attention to detail and user experience resulted in a 40% increase in our conversion rates. He's reliable, talented, and delivers beyond expectations.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager",
      content:
        "Working with Abdul-salam on the BookNest project was a pleasure. His technical expertise in React and Next.js, combined with his problem-solving skills, made him an invaluable asset to our team. He consistently met tight deadlines with quality work.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      content:
        "I've collaborated with Abdul-salam on multiple projects. His ability to translate design concepts into functional, beautiful interfaces is impressive. He's proactive, communicates well, and truly cares about creating the best user experience.",
      rating: 5,
      image: "👩‍🎨",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Testimonials
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here&apos;s what clients and colleagues have to say about working
              with me
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <FiStar className="w-8 h-8 text-purple-500 opacity-60" />
                </div>

                {/* Testimonial content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Client info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Ready to create something amazing together?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join the list of satisfied clients who have transformed their
                ideas into successful digital products.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
