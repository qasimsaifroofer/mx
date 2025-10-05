'use client';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';

export default function XactimateRoofSketchGuide() {
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service');
  const [termsChecked, setTermsChecked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  let hoverTimeout;

  const services = [
    { id: 'estimator-accelerator', title: 'Estimator Accelerator', href: '/estimator-accelerator' },
    { id: 'matterpoint-to-xactimate-sketch', title: 'Matterpoint to Xactimate Sketch', href: '/matterpoint-to-xactimate-sketch' },
    { id: 'xactimate-estimation', title: 'Xactimate Estimation', href: '/xactimate-estimation' },
    { id: 'xactimate-interior-estimate', title: 'Xactimate Interior Estimate', href: '/xactimate-interior-estimate' },
    { id: 'symbility-estimating-services', title: 'Symbility Estimating Services', href: '/symbility-estimating-services' },
    { id: 'aerial-roof-measurements-pdf', title: 'Aerial Roof Measurements PDF', href: '/Aerial-Roof-Measurements-PDF' },
    { id: 'symbility-sketch-xml', title: 'Symbility Sketch XML', href: '/Symbility-Sketch-XML' },
    { id: 'Xactimate-Roof-Sketch', title: 'Xactimate Roof Sketch', href: '/Xactimate-Roof-Sketch' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  return (
    <>
      <Head>
        <title>Master Xactimate Roof Sketching for Faster Estimates</title>
        <meta
          name="description"
          content="Learn how to master Xactimate roof sketching for faster, more accurate estimates. Boost your efficiency and improve your workflow with expert tips and tools."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@heroicons/react/24/outline/index.css"
        />
        <link rel="canonical" href="https://mxestimation.com/Xactimate-Roof-Sketch" />
      </Head>
      <Script
        id="matterport-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MX Estimation",
            "url": "https://mxestimation.com/Xactimate-Roof-Sketch",
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
          background: 'linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)',
        }}
        className="shadow-sm sticky top-0 z-50 border-b border-gray-800"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-delay="200">
              <img
                style={{ width: '200px', height: '100px' }}
                src="/logo.jpeg"
                alt="MX Estimation Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                style={{ color: 'black', fontSize: '22px' }}
                href="/"
                className="text-black-900 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="ri-home-line mr-2"></i>
                Home
              </Link>
              <a
                style={{ color: 'black', fontSize: '22px' }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <i style={{ color: 'black' }} className="ri-information-line mr-3"></i>
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
                  style={{ color: 'black', fontSize: '22px' }}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                >
                  <i style={{ color: 'black' }} className="ri-service-line mr-2"></i>
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
                style={{ color: 'black', fontSize: '22px' }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <i style={{ color: 'black' }} className="ri-star-line mr-2"></i>
                work
              </a>
              <Link
                style={{ color: 'black', fontSize: '22px' }}
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i style={{ color: 'black' }} className="ri-contacts-line mr-2"></i>
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
              href="mailto:contact@mxestimation.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
              className="bg-white text-black px-10 py-5 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap inline-block"
              data-aos="fade-left"
              data-aos-delay="600"
              target="_blank"
              style={{ fontSize: '20px' }}
            >
              Get Quote
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-aos="fade-left"
              data-aos-delay="650"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl text-white"></i>
              </div>
            </button>
          </div>
          <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="700">
            <div className="flex flex-col space-y-4">
              <a
                style={{ color: 'black' }}
                href="/"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="750"
              >
                <i className="ri-home-line mr-3"></i>
                Home
              </a>
              <a
                style={{ color: 'black' }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <i style={{ color: 'black' }} className="ri-information-line mr-3"></i>
                About
              </a>
              <div className="flex flex-col">
                <button
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  data-aos="fade-up"
                  data-aos-delay="850"
                  style={{ color: 'black' }}
                >
                  <i style={{ color: 'black' }} className="ri-service-line mr-3"></i>
                  Services
                  <i style={{ color: 'black' }} className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div
                  className={`flex flex-col mt-2 space-y-2 pl-6 ${servicesDropdownOpen ? '' : 'hidden'}`}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="text-black-900 hover:text-white transition-colors"
                      data-aos="fade-up"
                      data-aos-delay={950 + index * 50}
                      style={{ color: 'black' }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                style={{ color: 'black' }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <i className="ri-star-line mr-3"></i>
                Our Work
              </a>
              <a
                style={{ color: 'black' }}
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
      <div className="min-h-screen bg-black text-orange-300">
        <main className="container mx-auto px-6 py-16 space-y-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-center leading-tight">
            Master Your Roof Estimates: The Ultimate Guide to Xactimate Roof Sketch
          </h1>
          <p className="text-xl text-orange-200 text-center max-w-4xl mx-auto leading-relaxed">
          The accuracy of your roof estimate can make or break a job done from <a className="text-orange-400 hover:text-orange-600" href="https://mxestimation.com/xactimate-estimation">xactimate estimator</a>. It’s the foundation of your claim, the blueprint for your work, and the key to your profitability. In today’s fast-paced market, guessing doesn’t cut it. You need precision, speed, and clarity. This guide dives deep into mastering the Xactimate Roof Sketch, transforming complex roof structures into detailed, data-driven estimates that insurance carriers respect and approve.
          </p>
          <center>
            <Image src="/xactimate roof ESX.jpeg" alt="Xactimate Roof Sketch" width={800} height={600} />
            <br />
            <Link href="/form/xactimate-estimate">
              <button
                data-aos="fade-up"
                className="w-80 bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Order Now
              </button>
            </Link>
          </center>
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Why Xactimate Roof Sketch is Non-Negotiable
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span><strong>Unmatched Accuracy:</strong> Eliminates human error in measurements and pointing to <a className="text-orange-400 hover:text-orange-600" href="https://mxestimation.com/matterpoint-to-xactimate-sketch">matterport xactimate conversion</a> for precise material and labor costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span><strong>Faster Claims Approval:</strong> Professional sketches reduce back-and-forth with adjusters.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span><strong>Professional Credibility:</strong> Builds trust with adjusters and homeowners.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10h6m-6 0H3m12 0h6m-6-10h6M9 7H3" />
                  </svg>
                  <span><strong>Comprehensive Estimating:</strong> Automatically generates quantities for line-item estimates.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Getting Started: Setting Up Your Sketch
                </h2>
              </div>
              <p className="text-lg text-orange-200">
                Utilize detailed roof reports from providers like EagleView or Hover to start your Xactimate roof sketch:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
                  </svg>
                  <span><strong>Order Your Report:</strong> Use the property address to get a precise aerial measurement report.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 39" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                  </svg>
                  <span><strong>Import into Xactimate:</strong> Import the .CRX or .HIP file into the Sketch tab for a 2D diagram.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Set Your Scale:</strong> Calibrate using a known measurement to ensure accuracy.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10c-1.1 0-2 .9-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7c0-1.1-.9-2-2-2H5z" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Sketching a Complex Roof
                </h2>
              </div>
              <p className="text-lg text-orange-200">
                Trace over the imported image to create an intelligent sketch:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8m4-8v8m4-8v8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                  <span><strong>Start with the Basics:</strong> Trace roof planes using the "Add Surface" tool and also survey for <a className="text-orange-400 hover:text-orange-600" href="https://mxestimation.com/aerial-roof-measurements-pdf">measure square footage of roof arial</a> because it’s really essential job for our customers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
                  </svg>
                  <span><strong>Define the Features:</strong> Add hips, valleys, ridges, and rakes for accurate material takeoffs.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span><strong>Assign Properties:</strong> Define pitch, surface type, and waste factor for precise calculations.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span><strong>Layering for Complexity:</strong> Use "Add Level" and "Add Layer" for dormers and multi-level roofs.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10c-1.1 0-2 .9-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7c0-1.1-.9-2-2-2H5z" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Sketching a Flat Roof on Xactimate
                </h2>
              </div>
              <p className="text-lg text-orange-200">
                Flat roofs require special attention to drainage and surface types:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span><strong>Pitch is (Almost) Zero:</strong> Set pitch to 1/12 or 0/12 to account for slight tapers.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Focus on Drainage Features:</strong> Add drains, scuppers, and edge details.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span><strong>Surface Type is Key:</strong> Select TPO, EPDM, BUR, or modified bitumen accurately.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 01-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span><strong>Include Overlays:</strong> Sketch parapet walls as separate planes for flashing details.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  From Sketch to Estimate
                </h2>
              </div>
              <p className="text-lg text-orange-200">
                Your sketch generates precise quantities for your estimate:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Verify Quantities:</strong> Ensure total squares align with experience.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span><strong>Check Materials:</strong> Confirm ridge caps, drip edges, etc., are correctly associated.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Waste Factors:</strong> Apply higher waste factors for complex roofs.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Advanced Tips and Common Pitfalls
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span><strong>Use the 3D Viewer:</strong> Check for errors in pitch or plane connections.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Don’t Forget the Details:</strong> Include gutters, downspouts, and flashing.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Avoid Over-Sketching:</strong> Keep sketches clear and uncluttered.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Double-Check Your Report:</strong> Verify measurements against the image.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Invest in Your Mastery: Training is Key
                </h2>
              </div>
              <p className="text-lg text-orange-200">
                Invest in Xactimate certification courses, online tutorials, and practice to become fluent in roof sketching. Practice sketching your own home or office to build muscle memory. Mastering Xactimate minimizes disputes, maximizes profit, and projects professionalism.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
