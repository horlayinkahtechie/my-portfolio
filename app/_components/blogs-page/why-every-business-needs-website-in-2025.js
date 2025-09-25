"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import Footer from '../Footer';

export default function WhyBusinessNeedsWebsite() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Smooth scrolling for TOC links
    const handler = (e) => {
      if (e.target.matches('[data-scroll]')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const copyPrice = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show a subtle notification instead of alert
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      notification.textContent = 'Price copied to clipboard!';
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    } catch (err) {
      alert('Unable to copy.');
    }
  };

  return (
    <>
      

      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Navigation */}
        
<Navbar/>
        <article className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pt-25">
          {/* HERO */}
          <header className="mb-12 text-center py-8">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Business Essentials • 2025 Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              Why Your Business Needs a Professional Website in 2025
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how a strategic online presence can transform your business, with transparent pricing in NGN & USD.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="#toc" data-scroll className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                Read the Guide
              </Link>
              <Link href="#pricing" data-scroll className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                See Pricing
              </Link>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              {/* TOC */}
              <nav id="toc" className="mb-8 top-20 bg-white p-6 pb-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="font-semibold text-lg mb-3 text-gray-800">On this page</h2>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">1</span>
                    <Link href="#why" data-scroll className="hover:text-purple-600 transition-colors">Why a website matters</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">2</span>
                    <Link href="#benefits" data-scroll className="hover:text-purple-600 transition-colors">Top benefits for businesses</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">3</span>
                    <Link href="#pricing" data-scroll className="hover:text-purple-600 transition-colors">How much does it cost?</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">4</span>
                    <Link href="#packages" data-scroll className="hover:text-purple-600 transition-colors">Example packages</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">5</span>
                    <Link href="#faq" data-scroll className="hover:text-purple-600 transition-colors">FAQ</Link>
                  </li>
                </ol>
              </nav>

              {/* Sections */}
              <section id="why" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">1</div>
                  <h3 className="text-2xl font-bold text-gray-800">Why a Website is Essential for Modern Business</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your website is your digital storefront. Open 24/7 to customers worldwide. In an era where 81% of consumers research online before purchasing, not having a website means missing out on significant revenue opportunities.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Discoverability</h4>
                    <p className="text-sm text-gray-600">Be found when customers search for your products or services online.</p>
                  </div>
                  
                  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Credibility</h4>
                    <p className="text-sm text-gray-600">A professional website builds trust and establishes your brand authority.</p>
                  </div>
                  
                  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Automation</h4>
                    <p className="text-sm text-gray-600">Reduce manual work with online booking, orders, and customer service.</p>
                  </div>
                </div>
              </section>

              <section id="benefits" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">2</div>
                  <h3 className="text-2xl font-bold text-gray-800">Real Business Benefits & Results</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Increased Bookings & Sales
                    </h4>
                    <p className="text-sm text-gray-600">A restaurant that added online reservations saw a 30% drop in no-shows and a 20% revenue increase within 3 months.</p>
                  </div>
                  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Reduced Marketing Costs
                    </h4>
                    <p className="text-sm text-gray-600">SEO brings organic traffic that reduces reliance on expensive paid advertising over time.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-lg p-3 mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Statistic</h4>
                      <p className="text-gray-700">Businesses with a professional website are 3x more likely to be contacted by potential customers than those relying solely on social media profiles.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="pricing" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">3</div>
                  <h3 className="text-2xl font-bold text-gray-800">Transparent Website Pricing</h3>
                </div>
                
                <p className="text-gray-700 mb-8">Costs vary based on features and complexity. Below are example packages with pricing in Nigerian Naira (NGN) and approximate USD equivalents.</p>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      name: "Starter",
                      price: "₦150,000",
                      usd: "~$160",
                      description: "Perfect for small shops & freelancers",
                      features: ["1–3 pages (Home, About, Contact)", "Mobile responsive design", "Basic SEO setup", "Contact form integration"],
                      popular: false
                    },
                    {
                      name: "Business",
                      price: "₦300,000",
                      usd: "~$380",
                      description: "For shops, restaurants & service providers",
                      features: ["5–10 custom pages", "Booking/order system", "Advanced SEO + analytics", "Social media integration"],
                      popular: true
                    },
                    {
                      name: "Premium",
                      price: "₦600,000+",
                      usd: "~$750+",
                      description: "Custom features & integrations",
                      features: ["Custom design & development", "E-commerce/POS integration", "Ongoing support & training", "Advanced functionality"],
                      popular: false
                    }
                  ].map((plan, index) => (
                    <div 
                      key={index} 
                      className={`relative rounded-xl overflow-hidden shadow-sm border transition-all hover:shadow-md ${
                        plan.popular ? 'border-purple-300 ring-2 ring-purple-100 transform scale-105' : 'border-gray-100'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}
                      <div className="p-6 bg-white">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-gray-800">{plan.price}</div>
                          <div className="text-sm text-gray-500">{plan.usd}</div>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col space-y-2">
                          <button 
                            onClick={() => copyPrice(`${plan.price} / ${plan.usd}`)} 
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                          >
                            Copy Price
                          </button>
                          <a 
                            href={`mailto:you@example.com?subject=Website ${plan.name} Package Inquiry`} 
                            className={`px-4 py-2 text-center rounded-lg font-medium text-sm transition-all ${
                              plan.popular 
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90' 
                                : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                            }`}
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Note:</strong> Final pricing depends on specific requirements, integrations, and hosting preferences. 
                    Contact me for a personalized quote based on your business needs.
                  </p>
                </div>
              </section>

              <section id="packages" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">4</div>
                  <h3 className="text-2xl font-bold text-gray-800">What&apos;s Included in Each Package</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
                  <ol className="space-y-4">
                    {[
                      { title: "Strategy & Planning", desc: "Understanding your business goals and target audience to create an effective website strategy." },
                      { title: "Design & User Experience", desc: "Creating a visually appealing, mobile-friendly design that guides users to take action." },
                      { title: "Development & Implementation", desc: "Building a fast, secure website with all necessary functionality and integrations." },
                      { title: "SEO & Optimization", desc: "Ensuring your site is search engine friendly and optimized for performance." },
                      { title: "Testing & Launch", desc: "Thorough testing across devices and browsers before going live." }
                    ].map((item, index) => (
                      <li key={index} className="flex">
                        <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
                      <p className="text-purple-100">Send me your business details and I&apos;ll provide a custom quote within 24 hours.</p>
                    </div>
                    <a 
                      href="mailto:you@example.com?subject=Custom Website Quote Request" 
                      className="mt-4 md:mt-0 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Request Custom Quote
                    </a>
                  </div>
                </div>
              </section>

              <section id="faq" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">5</div>
                  <h3 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      q: 'How long does it take to build a website?', 
                      a: 'Starter sites typically take 1-2 weeks. Business websites with more features require 2-5 weeks. Complex projects with custom functionality may take longer depending on specific requirements and client feedback cycles.' 
                    },
                    { 
                      q: 'Will I be able to update the website myself?', 
                      a: 'Yes, absolutely. I build websites with user-friendly content management systems or provide training on how to make basic updates. For clients who prefer not to handle updates, I offer maintenance packages.' 
                    },
                    { 
                      q: 'Do you provide hosting and domain registration?', 
                      a: 'I can advise on the best hosting solutions for your needs and help with setup. For domain registration, I can either assist you in purchasing one or you can purchase it yourself. I typically recommend reliable hosting providers based on your traffic expectations and budget.' 
                    },
                    { 
                      q: 'What happens after the website is launched?', 
                      a: 'I provide a 30-day support period after launch to address any issues. After that, you can choose to continue with a maintenance plan for ongoing updates, security monitoring, and technical support.' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(i)} 
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800 pr-4">{item.q}</span>
                        <span className={`text-purple-600 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {activeFaq === i && (
                        <div className="p-5 pt-0">
                          <p className="text-gray-600">{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <footer className="py-8">
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Establish Your Online Presence?</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    I specialize in creating professional websites for small businesses, restaurants, and service providers. 
                    Let&apos;s build a website that not only looks great but also drives results for your business.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link 
                      href="mailto:you@example.com?subject=Website Project Inquiry" 
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Start Your Project
                    </Link>
                    <Link
                      href="/" 
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </footer>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Client Success Story</h4>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">Lola</div>
                    <div>
                      <p className="font-medium text-sm">Adebayo Lola</p>
                      <p className="text-xs text-gray-500">African fashion brand owner</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Abdul-salam transformed our e-commerce platform with his exceptional Web developement skills. His attention to detail and user experience resulted in a 40% increase in our conversion rates. He&apos;s reliable, talented, and delivers beyond expectations.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Why Work With Me</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Fast delivery without compromising quality</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Mobile-first, responsive designs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">SEO-optimized for better visibility</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">On-going support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-5 text-center">
                  <h4 className="font-semibold mb-3">Get in Touch</h4>
                  <p className="text-purple-100 text-sm mb-4">Have questions? I&apos;m here to help.</p>
                  <Link
                    href="mailto:you@example.com?subject=Website Consultation" 
                    className="block w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Sticky bottom CTA for mobile */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-md lg:hidden">
          <Link
            href="mailto:you@example.com?subject=Free Website Consultation" 
            className="block px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg text-center hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}