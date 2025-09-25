"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function WebsiteBoostSales() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStat, setActiveStat] = useState(0);

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

  useEffect(() => {
    // Auto-rotate statistics
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % statistics.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const statistics = [
    { value: "64%", label: "of consumers research online before visiting a store" },
    { value: "48%", label: "increase in credibility with a professional website" },
    { value: "3x", label: "more likely to convert with optimized user experience" },
    { value: "57%", label: "of users won't recommend a business with poor mobile design" }
  ];

  return (
    <>
      
      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Navigation */}
        <Navbar/>

        <article className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pt-25">
          {/* HERO */}
          <header className="mb-12 text-center py-12">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Sales Optimization • 2025 Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              How a Professional Website Can Boost Your Sales by 200%+
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the direct connection between website quality and revenue growth. 
              Real data from businesses that transformed their sales with strategic web design.
            </p>

            {/* Statistics Carousel */}
            <div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{statistics[activeStat].value}</div>
                  <p className="text-gray-600 text-sm">{statistics[activeStat].label}</p>
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                {statistics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStat(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStat === index ? 'bg-purple-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="#toc" data-scroll className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                Read the Research
              </a>
              <a href="#case-studies" data-scroll className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                See Case Studies
              </a>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              {/* TOC */}
              <nav id="toc" className="mb-8 top-20 bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <h2 className="font-semibold text-lg mb-3 text-gray-800">In This Guide</h2>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">1</span>
                    <a href="#psychology" data-scroll className="hover:text-purple-600 transition-colors">The Psychology of Trust</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">2</span>
                    <a href="#conversion" data-scroll className="hover:text-purple-600 transition-colors">Conversion Rate Secrets</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">3</span>
                    <a href="#case-studies" data-scroll className="hover:text-purple-600 transition-colors">Real Business Results</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">4</span>
                    <a href="#strategies" data-scroll className="hover:text-purple-600 transition-colors">Sales-Boosting Strategies</a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-3">5</span>
                    <a href="#roi" data-scroll className="hover:text-purple-600 transition-colors">Calculating Your ROI</a>
                  </li>
                </ol>
              </nav>

              {/* Psychology Section */}
              <section id="psychology" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">1</div>
                  <h3 className="text-2xl font-bold text-gray-800">The Psychology of Trust: Why Design Matters</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your website is your digital handshake. Within 50 milliseconds, visitors form an opinion about your business. 
                  A professional design builds immediate trust, while a poor one drives potential customers away.
                 
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                   A
        professional website builds trust, attracts more customers, and can
        directly increase your revenue. In fact, businesses that invest in
        well-structured websites often see sales growth of{" "}
        <strong>200% or more</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Without Professional Design</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        75% of users judge credibility based on design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        88% won&apos;t return after bad experience
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Conversion rates drop by 50% or more
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">With Professional Design</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Trust indicators increase conversions by 400%
                      </li>
                       <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Boosts trust and credibility
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Reaches more customers beyond social media
                      </li>

                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Professional appearance = premium pricing acceptance
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Repeat visitors increase by 60%
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Insight</h4>
                  <p className="text-gray-700">
                    <strong>94% of first impressions are design-related.</strong> Your website&apos;s visual appeal directly impacts 
                    whether visitors perceive your business as trustworthy and competent enough to handle their needs.
                  </p>
                </div>
              </section>

              {/* Conversion Section */}
              <section id="conversion" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">2</div>
                  <h3 className="text-2xl font-bold text-gray-800">Conversion Rate Optimization Secrets</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8">
                  <h4 className="font-semibold text-lg mb-4">Elements That Drive Conversions</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                        Strategic Call-to-Actions
                      </h5>
                      <p className="text-sm text-gray-600">Properly placed CTAs can increase conversions by 80%</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                        Social Proof Integration
                      </h5>
                      <p className="text-sm text-gray-600">Testimonials boost conversion rates by 34% on average</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                        Mobile Optimization
                      </h5>
                      <p className="text-sm text-gray-600">Mobile-friendly sites convert 64% more than non-optimized</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                        Loading Speed
                      </h5>
                      <p className="text-sm text-gray-600">Each second of delay reduces conversions by 7%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">The Conversion Funnel Optimization</h4>
                  <div className="space-y-6">
                    {[
                      { stage: "Awareness", tactic: "SEO & Content Strategy", result: "Increase qualified traffic by 200%" },
                      { stage: "Consideration", tactic: "Trust Signals & Social Proof", result: "Boost engagement by 150%" },
                      { stage: "Decision", tactic: "Clear Value Proposition", result: "Improve conversion rate by 80%" },
                      { stage: "Action", tactic: "Streamlined Checkout Process", result: "Reduce cart abandonment by 65%" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-800">{item.stage}</h5>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{item.result}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.tactic}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Case Studies Section */}
              <section id="case-studies" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">3</div>
                  <h3 className="text-2xl font-bold text-gray-800">Real Business Results: Case Studies</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                        Café
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Bella&apos;s Coffee Shop</h4>
                        <p className="text-sm text-gray-500">Before: Social media only</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Online Orders</span>
                        <span className="font-semibold text-green-600">+320%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Catering Inquiries</span>
                        <span className="font-semibold text-green-600">+180%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Revenue Growth</span>
                        <span className="font-semibold text-green-600">+95%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-lg mr-4">
                        SPA
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Serenity Wellness Spa</h4>
                        <p className="text-sm text-gray-500">Before: Phone bookings only</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Online Bookings</span>
                        <span className="font-semibold text-green-600">+450%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Staff Efficiency</span>
                        <span className="font-semibold text-green-600">+60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Monthly Revenue</span>
                        <span className="font-semibold text-green-600">+125%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">Ready for Similar Results?</h4>
                  <p className="text-purple-100 mb-4">These businesses transformed their sales with professional websites. You can too.</p>
                  <a 
                    href="#cta" 
                    data-scroll
                    className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Transformation
                  </a>
                </div>
              </section>

              {/* Strategies Section */}
              <section id="strategies" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">4</div>
                  <h3 className="text-2xl font-bold text-gray-800">Sales-Boosting Website Strategies</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Immediate Impact Strategies</h4>
                      <div className="space-y-4">
                        {[
                          "Clear value proposition above the fold",
                          "Strategic call-to-action placement",
                          "Trust signals (reviews, certifications)",
                          "Mobile-first responsive design",
                          "Fast loading times (<3 seconds)"
                        ].map((strategy, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Long-Term Growth Tactics</h4>
                      <div className="space-y-4">
                        {[
                          "SEO optimization for organic growth",
                          "Content marketing strategy",
                          "Email marketing integration",
                          "Analytics and conversion tracking",
                          "Continuous A/B testing"
                        ].map((tactic, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{tactic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ROI Section */}
              <section id="roi" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">5</div>
                  <h3 className="text-2xl font-bold text-gray-800">Calculating Your Return on Investment</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">Website Investment vs. Revenue Impact</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">3-6 Months</div>
                      <p className="text-sm text-gray-600">Average break-even period</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">200-500%</div>
                      <p className="text-sm text-gray-600">Typical ROI in first year</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                      <p className="text-sm text-gray-600">Sales representative</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-3">ROI Calculation Example</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Website Investment:</span>
                        <span className="font-medium">₦220,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Monthly Revenue:</span>
                        <span className="font-medium text-green-600">+₦85,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Payback Period:</span>
                        <span className="font-medium">2.6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>First Year ROI:</span>
                        <span className="font-medium text-green-600">364%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <footer id="cta" className="py-8">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Sales?</h3>
                  <p className="text-purple-100 max-w-2xl mx-auto mb-6">
                    Stop leaving money on the table. Let&apos;s build a website that not only looks professional 
                    but actively works to increase your revenue 24/7.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="mailto:you@example.com?subject=Website Sales Boost Consultation" 
                      className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Free Consultation
                    </a>
                    <a 
                      href="tel:+1234567890" 
                      className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                      Call Now: (+234) 816 9415 526
                    </a>
                  </div>
                </div>
              </footer>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Quick Assessment</h4>
                  <p className="text-sm text-gray-600 mb-3">Is your website costing you sales?</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Loading slower than 3 seconds?
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Not mobile-friendly?
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      No clear call-to-action?
                    </li>
                  </ul>
                  <a href="#cta" data-scroll className="block text-center text-purple-600 font-medium mt-4 text-sm hover:underline">
                    Get Free Audit
                  </a>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Recent Success</h4>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">EC</div>
                    <div>
                      <p className="font-medium text-sm">E-commerce Store</p>
                      <p className="text-xs text-gray-500">+217% revenue in 3 months</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    &quot;The professional redesign paid for itself in the first month. Our conversion rate tripled!&quot;
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Sticky bottom CTA for mobile */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-md lg:hidden">
          <a 
            href="mailto:you@example.com?subject=Free Sales Boost Consultation" 
            className="block px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg text-center hover:opacity-90 transition-opacity"
          >
            Get Free Sales Assessment
          </a>
        </div>
      </main>
      <Footer/>
    </>
  );
}