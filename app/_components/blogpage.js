"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  X
} from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Why Every Business Needs a Professional Website in 2025",
      excerpt: "Discover how a strategic online presence can transform your business growth and customer acquisition.",
      category: "Business",
      readTime: "5 min read",
      date: "September 22, 2025",
      author: "Abdul-salam",
      image: "/why-every-business-needs-a-professional-website-in-2025.png",
      tags: ["Web Design", "Business", "Marketing"],
      link: "/blogs/why-every-business-needs-website-in-2025"
    },
    {
      id: 2,
      title: "How a Professional Website Can Boost Your Sales by 200%+",
      excerpt: "Learn the direct connection between website quality and revenue growth with real case studies.",
      category: "Sales",
      readTime: "7 min read",
      date: "September 22, 2025",
      author: "Abdul-salam",
      image: "/how-a-professional-can-boost-your-sales-by-200.png",
      tags: ["Sales", "Conversion", "Strategy"],
      link: "/blogs/how-a-professional-website-can-double-your-sales"
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It's No Longer Optional",
      excerpt: "With mobile traffic dominating web usage, discover why mobile-first design is crucial for success.",
      category: "Design",
      readTime: "6 min read",
      date: "March 5, 2024",
      author: "Abdul-salam",
      image: "/hero.png",
      tags: ["Design", "Mobile", "UX"],
      link: "#"
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Cut through the noise with proven SEO techniques that drive real organic traffic to your website.",
      category: "Marketing",
      readTime: "8 min read",
      date: "February 28, 2024",
      author: "Abdul-salam",
      image: "/hero.png",
      tags: ["SEO", "Marketing", "Growth"],
      link: "#",
    },
   
      
    
  ];

  // Categories
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  // Filter and search functionality
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Header */}
      <Navbar/>
      {/* <section className="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Web Development Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Insights, tips, and strategies for building successful online presence
          </motion.p>
        </div>
      </section> */}

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden lg:flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
            >
              <Filter size={18} />
              Filter
            </button>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {currentPosts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <Image
                      width={100}
                      height={100}
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Author and Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <Link href={post.link} className="flex items-center gap-1 text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filter Articles</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
           
          </>
        )}
      </AnimatePresence>

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
      `}</style>
    </div>
     <Footer/>
     </>
  );
}