"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";

export default function AerialRoofMeasurementsGuide() {
  const services = [
    { id: "estimator-accelerator", title: "Estimator Accelerator", href: "/estimator-accelerator" },
    { id: "matterpoint-to-xactimate-sketch", title: "Matterpoint to Xactimate Sketch", href: "/matterpoint-to-xactimate-sketch" },
    { id: "xactimate-estimation", title: "Xactimate Estimation", href: "/xactimate-estimation" },
    { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/xactimate-interior-estimate" },
    { id: "symbility-estimating-services", title: "Symbility Estimating Services", href: "/symbility-estimating-services" },
    { id: "aerial-roof-measurements-pdf", title: "Aerial Roof Measurements PDF", href: "/aerial-roof-measurements-pdf" },
    { id: "symbility-sketch-xml", title: "Symbility Sketch XML", href: "/Symbility-Sketch-XML" },
    { id: "xactimate-roof-sketch", title: "Xactimate Roof Sketch", href: "/Xactimate-Roof-Sketch" },
  ];

  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a service");
  const [termsChecked, setTermsChecked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  let hoverTimeout;

  useEffect(() => {

    // Handle click outside for dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        <title>Aerial Roof Measurements PDF</title>
        <meta name="description" content="Master Xactimate with precise aerial roof measurements. Learn how to leverage aerial imagery for accurate, efficient, and profitable roofing estimates with our comprehensive guide." />
        <link rel="canonical" href="https://mxestimation.com/Aerial-Roof-Measurements-PDF" />
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
            "url": "https://mxestimation.com/Aerial-Roof-Measurements-PDF",
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
    <div className="min-h-screen bg-black text-orange-300">

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
                    desktopDropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
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
            </div>
            <a
              href="mailto:contact@mxestimation.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
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
              data-aos="fade-left"
              data-aos-delay="650"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl text-white"></i>
              </div>
            </button>
          </div>
          <div
            className={`md:hidden mt-4 ${mobileMenuOpen ? "" : "hidden"}`}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="flex flex-col space-y-4">
              <a
                style={{ color: "black" }}
                href="/"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="750"
              >
                <i className="ri-home-line mr-3"></i>
                Home
              </a>
              <a
                style={{ color: "black" }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <i style={{ color: "black" }} className="ri-information-line mr-3"></i>
                About
              </a>
              <div className="flex flex-col">
                <button
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  data-aos="fade-up"
                  data-aos-delay="850"
                  style={{ color: "black" }}
                >
                  <i style={{ color: "black" }} className="ri-service-line mr-3"></i>
                  Services
                  <i style={{ color: "black" }} className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div
                  className={`flex flex-col mt-2 space-y-2 pl-6 ${servicesDropdownOpen ? "" : "hidden"}`}
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
                data-aos="fade-up"
                data-aos-delay="1000"
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
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-16 space-y-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-center leading-tight">
          From Sky to Estimate: Mastering Xactimate with Aerial Roof Measurements
        </h1>
        <p className="text-xl text-orange-200 text-center max-w-4xl mx-auto leading-relaxed">
        The foundation of a flawless claim lies in the sky. Accurate aerial roof measurements transform the estimation process by correct , delivering irrefutable precision. By leveraging property aerial imagery and detailed measurement reports, you can create bulletproof Xactimate Roof Sketches that ensure fast approvals and maximize profitability. Also providing <a style={{color : "orange"}} href="https://mxestimation.com/matterpoint-to-xactimate-sketch">matterpoint to xactimate services</a> this guide walks you through the journey from aerial data to a professional estimate.

        </p>
        <center>
          <Image
            src="/Arial roof measurements PDF.jpeg"
            alt="Aerial Roof Measurements PDF"
            width={800}
            height={600}
          />
          <br />
          <Link href="/form/aerial-roof-measurements-pdf">
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
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Why Guesswork is Bankrupting Your Estimates
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Manual measurements are inefficient, dangerous, and error-prone. Accurate aerial roof measurements provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Fast Reliable:</strong> <a style={{color : "orange"}} href="https://mxestimation.com/xactimate-estimation">xactimate estimating services</a> which will help you a lot. 
                  .
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>
                  <strong>Faster Approvals:</strong> Objective data reduces disputes with insurers.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Enhanced Trust:</strong> Impress homeowners with cutting-edge technology.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Understanding Property Aerial Imagery
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Aerial reports from providers like Hover include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  <strong>High-Resolution Imagery:</strong> Clear overhead photos from multiple angles.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6M3 3h18v18H3V3z"
                  />
                </svg>
                <span>
                  <strong>CAD-like Diagrams:</strong> Precise line drawings of roof planes and features.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>
                  <strong>Measurements Summary:</strong> Detailed PDF with dimensions and slopes.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span>
                  <strong>3D Model:</strong> Interactive model for viewing and rotating.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Workflow: Aerial Report to Xactimate Sketch
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Connect aerial data to Xactimate with these steps:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2"
                  />
                </svg>
                <span>
                  <strong>Order Your Report:</strong> Enter the property address to receive a PDF and data files.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                  />
                </svg>
                <span>
                  <strong>Import into Xactimate:</strong> Use the Sketch tab to import .CRX or .HIP files.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Calibrate Scale:</strong> Set the scale using a known dimension from the PDF.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10c-1.1 0-2 .9-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7c0-1.1-.9-2-2-2H5z"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Building Your Xactimate Sketch
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Create an intelligent sketch from aerial data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8m4-8v8m4-8v8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
                <span>
                  <strong>Trace the Planes:</strong> Use "Add Surface" to outline roof planes for accurate square footage.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
                  />
                </svg>
                <span>
                  <strong>Define Features:</strong> Add hips, valleys, and ridges for material and labor calculations.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>
                  <strong>Assign Properties:</strong> Set pitch, surface type, and waste factor for precision.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Handling Complexities and Verifying Data
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Ensure accuracy in complex scenarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>
                  <strong>Sense Check:</strong> Verify total square footage against home size and PDF data.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span>
                  <strong>Layering for Dormers:</strong> Use "Add Level" and "Add Layer" for complex roofs.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Generating Your Bulletproof Estimate
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Your sketch populates precise line items:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>
                  <strong>Material Quantities:</strong> Shingles, ridge caps, and underlayment calculated automatically.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>
                  <strong>Backup Documentation:</strong> Attach the PDF to support your claim.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Investing in Precision: The ROI
              </h2>
            </div>
            <p className="text-lg text-orange-200">
              Aerial measurement reports are a high-return investment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Eliminate Mistakes:</strong> Also easily get the <a style={{color : "orange"}} href="https://mxestimation.com/Symbility-Sketch-XML">Symbility Claims Estimating Solutions</a> within a short span of time
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Win More Bids:</strong> Impress with professional technology.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>
                  <strong>Faster Payments:</strong> Speed up claims with accurate data.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6M3 3h18v18H3V3z"
                  />
                </svg>
                <span>
                  <strong>Enhanced Safety:</strong> Reduce the need for rooftop measurements.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
            </>
  );
}
