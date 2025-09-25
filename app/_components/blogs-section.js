"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PortfolioBlogSection() {
     const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

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
        staggerChildren: 0.15,
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


  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Why Every Business Needs a Professional Website in 2025",
      excerpt: "Discover how a strategic online presence can transform your business growth and customer acquisition.",
      category: "Business",
      readTime: "5 min read",
      date: "September 22, 2025",
      image: "/why-every-business-needs-a-professional-website-in-2025.png",
      link: "/blogs/why-every-business-needs-website-in-2025"
      
    },
    {
      id: 2,
      title: "How a Professional Website Can Boost Your Sales by 200%+",
      excerpt: "Learn the direct connection between website quality and revenue growth with real case studies.",
      category: "Sales",
      readTime: "7 min read",
      date: "September 22, 2025",
      image: "/how-a-professional-can-boost-your-sales-by-200.png",
      link: "/blogs/how-a-professional-website-can-double-your-sales"
    
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It's No Longer Optional",
      excerpt: "With mobile traffic dominating web usage, discover why mobile-first design is crucial for success.",
      category: "Design",
      readTime: "6 min read",
      date: "March 5, 2024",
      image: "/booknesthero.png",
      link: "#"
    },
   
  ];

  // Filter options
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Head>
        <title>Blog - Web Development Insights & Tips</title>
        <meta name="description" content="Explore articles on web design, development, SEO, and business growth strategies." />
      </Head>

      <main className="min-h-screen py-12" id='blogs'>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Blogs
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
               Insights, tips, and strategies for building successful online presence and growing your business.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-800/50" >
            {filteredPosts.map(blog => (
              <article 
                key={blog.id}
                className="bg-gray-800/50 rounded-xl shadow-sm border border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group"
                
              >
                <div className="relative overflow-hidden">
                  <Image
                  width={100}
                  height={100}
                  quality={100}
                  
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <Link href={blog.link} className="text-xl font-bold text-white mb-3 transition-colors line-clamp-2">
                    {blog.title}
                  </Link>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex gap-2">
                    <Link href={blog.link} className="text-purple-600 font-medium text-sm group-hover:underline">
                      Read full article
                    </Link>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button (if needed) */}
          <div className="text-center mt-12">
            <Link href="/blogs" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 px-6 py-3">
              More Articles
            </Link>
          </div>
        </div>

        
      </main>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        .prose h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #374151;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
      `}</style>
    </>
  );
}