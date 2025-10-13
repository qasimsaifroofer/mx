'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Script from 'next/script';

export default function EstimatorAccelerator() {
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const services = [
    { id: "estimator-accelerator", title: "Estimator Accelerator", href: "/estimator-accelerator" },
    { id: "matterpoint-to-xactimate-sketch", title: "Matterpoint to Xactimate Sketch", href: "/matterpoint-to-xactimate-sketch" },
    { id: "xactimate-estimation", title: "Xactimate Estimation", href: "/xactimate-estimation" },
    { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/xactimate-interior-estimate" },
    { id: "symbility-estimating-services", title: "Symbility Estimating Services", href: "/symbility-estimating-services" },
    { id: "aerial-roof-measurements-pdf", title: "Aerial Roof Measurements PDF", href: "/Aerial-Roof-Measurements-PDF" },
    { id: "symbility-sketch-xml", title: "Symbility Sketch XML", href: "/Symbility-Sketch-XML" },
    { id: "Xactimate-Roof-Sketch", title: "Xactimate Roof Sketch", href: "/Xactimate-Roof-Sketch" },
  ];

  let hoverTimeout;

  const handleDesktopHover = (isHovering) => {
    clearTimeout(hoverTimeout);
    if (isHovering) {
      setDesktopDropdownOpen(true);
    } else {
      hoverTimeout = setTimeout(() => {
        setDesktopDropdownOpen(false);
      }, 300);
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const dropdownRef = useRef(null);

  return (
    <>
      <head>
        <title>Get the Insurance Estimator Training | MX Estimation</title>
        <meta name="description" content="Get our Xactimate Estimator Training which helps people to beginner to expert level of insurance restoration estimating in just 4 weeks, quote now." />
         <link rel="canonical" href="https://mxestimation.com/estimator-accelerator" />
      </head>
      <Script
        id="matterport-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MX Estimation",
            "url": "https://mxestimation.com/estimator-accelerator",
            "logo": "https://mxestimation.com/logo.jpeg",
            "alternateName": "Xactimate Estimation",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+923034297361",
                "contactType": "customer service",
                "email": "qasimroofer@gmail.com",
                "areaServed": "PK",
                "availableLanguage": "en"
              }
            ]
          })
        }}
      />
      <header
        style={{
          background: "linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)",
        }}
        className="shadow-sm sticky top-0 z-50 border-b border-gray-800"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-delay="200">
              <img
                style={{ width: "200px", height: "100px" }}
                src="/logo.jpeg"
                alt="MX Estimation Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                style={{ color: "black", fontSize: "22px" }}
                href="/"
                className="text-black-900 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="ri-home-line mr-2"></i>
                Home
              </Link>
              <a
                style={{ color: "black", fontSize: "22px" }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <i style={{ color: "black" }} className="ri-information-line mr-3"></i>
                About
              </a>
              <div
                className="relative group"
                data-aos="fade-left"
                data-aos-delay="400"
                ref={dropdownRef}
                onMouseEnter={() => handleDesktopHover(true)}
                onMouseLeave={() => handleDesktopHover(false)}
              >
                <button
                  style={{ color: "black", fontSize: "22px" }}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                >
                  <i style={{ color: "black" }} className="ri-service-line mr-2"></i>
                  Services
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
                    desktopDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  } z-50`}
                >
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={450 + index * 50}
                        onClick={() => setDesktopDropdownOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <a
                style={{ color: "black", fontSize: "22px" }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <i style={{ color: "black" }} className="ri-star-line mr-2"></i>
                Work
              </a>
              <Link
                style={{ color: "black", fontSize: "22px" }}
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i style={{ color: "black" }} className="ri-contacts-line mr-2"></i>
                Contact
              </Link>
              <Link
                href="/pricing"
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i className="ri-exchange-dollar-line mr-2"></i>
                Pricing
              </Link>
              <Link
                href="/blogs"
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay="575"
              >
                <i className="ri-article-line mr-2"></i>
                Blogs
              </Link>
              <div className="flex items-center space-x-3 border-l border-gray-300/40 pl-4">
                <a href="https://youtube.com/@malikxactimator" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="YouTube">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/malik-saif-a56510249" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="LinkedIn">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://www.facebook.com/share/1KY72nkShY/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="Facebook">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/mx_estimation" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white" aria-label="Instagram">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
              </div>
            </div>
            <a
              href="mailto:mxestimation@gmail.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
              className="bg-white text-black px-10 py-5 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap inline-block"
              data-aos="fade-left"
              data-aos-delay="600"
              target="_blank"
              style={{ fontSize: "20px" }}
            >
              Get Quote
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl text-white"></i>
              </div>
            </button>
          </div>
          <div
            className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`}
          >
            <div className="flex flex-col space-y-4">
              <a
                style={{ color: "black" }}
                href="/"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <i className="ri-home-line mr-3"></i>
                Home
              </a>
              <a
                style={{ color: "black" }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <i style={{ color: "black" }} className="ri-information-line mr-3"></i>
                About
              </a>
              <div className="flex flex-col">
                <button
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  style={{ color: "black" }}
                >
                  <i style={{ color: "black" }} className="ri-service-line mr-3"></i>
                  Services
                  <i style={{ color: "black" }} className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div
                  className={`flex flex-col mt-2 space-y-2 pl-6 ${servicesDropdownOpen ? '' : 'hidden'}`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="text-black-900 hover:text-white transition-colors"
                      style={{ color: "black" }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                style={{ color: "black" }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <i className="ri-star-line mr-3"></i>
                Our Work
              </a>
              <a
                style={{ color: "black" }}
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="1050"
              >
                <i className="ri-contacts-line mr-3"></i>
                Contact
              </a>
              <Link
                href="/pricing"
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i className="ri-exchange-dollar-line mr-2"></i>
                Pricing
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-orange-900 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Insurance Estimator Training
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enhance Your Skills and Boost Your Career Today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/form/xactimate-interior-estimate">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Order
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4 bg-[#070707] border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-orange-400">
                  Why Insurance Estimator Training Matters
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  In the competitive landscape of the insurance restoration industry in the United States, having the right skills and knowledge is essential for success. Insurance estimator training provides professionals with the tools they need to excel in this field, ensuring accurate assessments and efficient claims processing.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're a seasoned contractor or new to the industry, investing in estimator training can significantly enhance of <a style={{color : "orange"}} href="https://mxestimation.com/xactimate-estimation">Xactimate estimation</a> work and your capabilities and career prospects.

                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0b0b0b] to-[#0f0a00] border border-orange-900/40 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Improved estimate accuracy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Faster claims approval
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Enhanced customer satisfaction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Career advancement opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-16 px-4 bg-black border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
              The Importance of Insurance Estimator Training in the USA
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#070707] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">Comprehensive Knowledge</h3>
                <p className="text-orange-200/80">
                  Equips individuals with comprehensive knowledge of the insurance claims process, damage assessment, and cost estimation.
                </p>
              </div>
              <div className="bg-[#070707] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">Local Expertise</h3>
                <p className="text-orange-200/80">
                  Ensures estimators are well-versed in local requirements and industry standards across different states in the USA.
                </p>
              </div>
              <div className="bg-[#070707] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">Industry Growth</h3>
                <p className="text-orange-200/80">
                  As the insurance restoration industry continues to grow, estimator training becomes a vital investment for staying competitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Estimator Training Section */}
        <section className="py-16 px-4 bg-[#070707] border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
              What Is Estimator Training?
            </h2>
            <p className="text-xl text-orange-200/90 text-center mb-12 max-w-4xl mx-auto">
              Estimator training encompasses a range of educational programs aimed at developing skills necessary for precise damage assessment and cost estimation. It covers various aspects, including understanding insurance policies, mastering estimation software, and applying industry best practices.
            </p>

            {/* Key Components */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-orange-400">
                Key Components of Estimator Training
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Insurance Policy Knowledge",
                    description: "Understanding coverage, deductibles, and claim procedures specific to the USA.",
                    icon: "📋"
                  },
                  {
                    title: "Damage Assessment",
                    description: "Learning how to evaluate property damage accurately, including structural, water, fire, and storm-related damages.",
                    icon: "🔍"
                  },
                  {
                    title: "Estimate Mastery",
                    description: "Developing the ability to create detailed, accurate, and compliant estimates that meet insurance requirements.",
                    icon: "📊"
                  },
                  {
                    title: "Use of Estimatics Training Tools",
                    description: "Familiarity with estimation software such as Xactimate, Symbility, and other industry-standard platforms.",
                    icon: "💻"
                  },
                  {
                    title: "Insurance Restoration Training",
                    description: "Gaining insights into the restoration process, project management, and customer communication.",
                    icon: "🏗️"
                  }
                ].map((component, index) => (
                  <div
                    key={index}
                    className="bg-[#0b0b0b] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 cursor-pointer shadow-lg"
                    onClick={() => toggleSection(`component-${index}`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{component.icon}</span>
                        <h4 className="text-xl font-bold text-orange-400">{component.title}</h4>
                      </div>
                      <svg
                        className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${activeSection === `component-${index}` ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {activeSection === `component-${index}` && (
                      <p className="text-orange-200/80 mt-4 pl-12">{component.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-black border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
              Benefits of Completing Estimate Training
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enhanced Accuracy",
                  description: "Improve your ability to produce precise estimates, reducing errors and claim disputes.",
                  icon: "🎯"
                },
                {
                  title: "Industry Recognition",
                  description: "Certification from reputable training programs boosts credibility with insurance companies and clients.",
                  icon: "🏆"
                },
                {
                  title: "Increased Efficiency",
                  description: "Streamlined estimation processes save time and resources.",
                  icon: "⚡"
                },
                {
                  title: "Career Advancement",
                  description: "Mastery in estimate creation opens doors to higher-paying roles and leadership positions.",
                  icon: "📈"
                },
                {
                  title: "Compliance and Standards",
                  description: "Ensures your estimates adhere to industry regulations and insurance requirements across the USA.",
                  icon: "✅"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#070707] to-[#0b0b0b] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-orange-400">{benefit.title}</h3>
                  <p className="text-orange-200/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Types Section */}
        <section className="py-16 px-4 bg-[#070707] border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
              Types of Insurance Estimator Training Programs
            </h2>
            <p className="text-xl text-orange-200/90 text-center mb-12">
              There are various training options available to suit different learning preferences and professional needs:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0b0b0b] p-8 rounded-xl border-2 border-orange-900/40 hover:border-orange-600 transition-all duration-300 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">In-Person Training</h3>
                </div>
                <p className="text-orange-200/80 text-center">
                  Hands-on workshops and seminars conducted by industry experts provide practical experience and direct interaction.
                </p>
              </div>
              <div className="bg-[#0b0b0b] p-8 rounded-xl border-2 border-orange-900/40 hover:border-orange-600 transition-all duration-300 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Online Courses</h3>
                </div>
                <p className="text-orange-200/80 text-center">
                  Flexible, self-paced courses covering all aspects of estimator training, including modules on estimate mastery and estimatics training.
                </p>
              </div>
              <div className="bg-[#0b0b0b] p-8 rounded-xl border-2 border-orange-900/40 hover:border-orange-600 transition-all duration-300 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Certification Programs</h3>
                </div>
                <p className="text-orange-200/80 text-center">
                  Specialized programs that culminate in certification, validating your skills in insurance restoration and estimate creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing Training Section */}
        <section className="py-16 px-4 bg-black border-b border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
              Choosing the Right Insurance Restoration Training
            </h2>
            <p className="text-xl text-orange-200/90 text-center mb-12">
              When selecting an insurance estimator training program, consider the following:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Reputation and Accreditation",
                  description: "Ensure the program is recognized within the industry.",
                  icon: "⭐"
                },
                {
                  title: "Curriculum Content",
                  description: "Look for comprehensive coverage of estimator training, estimate mastery, and xactimate training.",
                  icon: "📚"
                },
                {
                  title: "Software Training",
                  description: "Confirm that the program includes instruction on popular estimation tools like Xactimate.",
                  icon: "🛠️"
                },
                {
                  title: "Local Relevance",
                  description: "Opt for training tailored to USA insurance policies and regulations.",
                  icon: "🇺🇸"
                },
                {
                  title: "Support and Resources",
                  description: "Access to ongoing support, updates, and industry resources.",
                  icon: "🤝"
                }
              ].map((factor, index) => (
                <div
                  key={index}
                  className="bg-[#070707] p-6 rounded-xl border border-orange-900/40 hover:border-orange-600/50 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4 mt-1">{factor.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-orange-400">{factor.title}</h3>
                      <p className="text-orange-200/80">{factor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of professionals who have enhanced their skills through our comprehensive insurance estimator training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 px-4 border-t border-orange-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                © 2024 Insurance Estimator Training. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Enhance your skills. Boost your career. Excel in the insurance restoration industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div></div>
              <div>
                <h4 className="font-bold text-white mb-4" style={{color: 'orange'}}>Quick Action</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="http://mxestimation.com/terms-and-conditions.html" className="hover:text-white transition-colors">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="http://mxestimation.com/privacy-policy.html" className="hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="http://mxestimation.com/cookies-policy.html" className="hover:text-white transition-colors">Cookies Policy</a>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}