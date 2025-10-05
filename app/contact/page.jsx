"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cormorant } from 'next/font/google';
import Script from 'next/script';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    message: ''
  });
  const dropdownRef = useRef(null);
  let hoverTimeout;


  
  const services =  [
    
      
    // 👇 nayi entries add ki gayi hain
    { id: "estimator-accelerator", title: "Estimator Accelerator", href: "/estimator-accelerator" },
    { id: "matterpoint-to-xactimate-sketch", title: "Matterpoint to Xactimate Sketch", href: "/matterpoint-to-xactimate-sketch" },
    { id: "xactimate-estimation", title: "Xactimate Estimation", href: "/xactimate-estimation" },
    { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/xactimate-interior-estimate" },
    { id: "symbility-estimating-services", title: "Symbility Estimating Services", href: "/symbility-estimating-services" },
    { id: "aerial-roof-measurements-pdf", title: "Aerial Roof Measurements PDF", href: "/Aerial-Roof-Measurements-PDF" },
    { id: "symbility-sketch-xml", title: "Symbility Sketch XML", href: "/Symbility-Sketch-XML" },
    { id: "Xactimate-Roof-Sketch", title: "Xactimate Roof Sketch", href: "/Xactimate-Roof-Sketch" },
  ];
  const serviceOptions = [
    "Xactimate Estimate",
    "Xactimate Roof ESX", 
    "Matterport to Xactimate Sketch",
    "Xactimate Interior Estimate",
    "Roof Report (PDF)",
    "Stability Roof Sketch"
  ];

  const projectTypes = [
    "Residential",
    "Commercial", 
    "Industrial",
    "Emergency Restoration",
    "Insurance Claim",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
    
    // Create email body with form data
    const emailBody = `
Hello MX Estimation Team,

I'm interested in your services. Here are my details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Needed: ${formData.service}
Project Type: ${formData.projectType}

Message:
${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
    `.trim();

    // Open email client with pre-filled data
    const mailtoLink = `mailto:contact@mxestimation.com?subject=Service Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  useEffect(() => {
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

  useEffect(() => {
    // Load Remixicon CSS dynamically as fallback
    const loadRemixicon = () => {
      const existingLink = document.querySelector('link[href*="remixicon"]');
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    };

    loadRemixicon();

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
    }

    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Mobile Menu Script
    const menuButton = document.querySelector('button.md\\:hidden');
    const nav = document.querySelector('nav.hidden');
    if (menuButton && nav) {
      menuButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-full');
        nav.classList.toggle('left-0');
        nav.classList.toggle('right-0');
        nav.classList.toggle('bg-white');
        nav.classList.toggle('shadow-lg');
        nav.classList.toggle('p-4');
      });
    }
  }, []);

  return (
    <>
      <head>
        <title>Contact - Estimation Xactimate</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
        <link rel="canonical" href="https://mxestimation.com/contact" />
        <style>{`
          :where([class^="ri-"])::before { content: "\\f3c2"; }
        `}</style>
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
            "url": "https://mxestimation.com/contact",
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
      <div className="bg-black text-white min-h-screen">
        {/* Header */}
        <header style={{
              background: "linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)",
            }} className=" shadow-sm sticky top-0 z-50 border-b border-gray-800" data-aos="fade-down" data-aos-delay="100">
          <nav className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div data-aos="fade-right" data-aos-delay="200">
                  <img style={{width : "200px", height : "100px"}} src="/logo.jpeg" alt="MX Estimation Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link style={{color : "black" , fontSize : "22px"}} href="/" className="text-black-900 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="300">
                  <i className="ri-home-line mr-2"></i>
                  Home
                </Link>
                <a 
                style={{color : "black" , fontSize : "22px"}}
                href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="350">
                               <i style={{color : "black"}} className="ri-information-line mr-2"></i>
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
                  style={{color : "black" , fontSize : "22px"}}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  >
                    <i style={{color : "black"}} className="ri-service-line mr-2"></i>
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
                <a style={{color : "black" , fontSize : "22px"}} href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="500">
                  <i style={{color : "black"}}  className="ri-star-line mr-2"></i>
                  work
                </a>
                <Link style={{color : "black",fontSize : "22px"}} href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="550">
                  <i style={{color : "black"}} className="ri-contacts-line mr-2"></i>
                  Contact
                </Link>
                <Link href="/pricing" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="550">
              <i className="ri-exchange-dollar-line mr-2"></i>
              Pricing
            </Link>
            <Link href="/blogs" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="575">
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
                target='_blank'
                style={{fontSize : "20px"}}
              >
                Get Quote
              </a>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-aos="fade-left" data-aos-delay="650">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-menu-line text-xl text-white"></i>
                </div>
              </button>
            </div>
            <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="700">
              <div className="flex flex-col space-y-4">
                <a
                style={{color : "black"}}
                href="/" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="750">
                  <i className="ri-home-line mr-3"></i>
                  Home
                </a>
                <a
                style={{color : "black"}}
                href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <i style={{color : "black"}} className="ri-information-line mr-3"></i>
                  About
                </a>
                <div className="flex flex-col">
                  <button
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    data-aos="fade-up"
                    data-aos-delay="850"
                    style={{color : "black"}}
                  >
                    <i
                    style={{color : "black"}}
                    className="ri-service-line mr-3"></i>
                    Services
                    <i 
                    style={{color : "black"}}
                    className="ri-arrow-down-s-line ml-1"></i>
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
                        style={{color : "black"}}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <a
                style={{color : "black"}}
                href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1000">
                  <i className="ri-star-line mr-3"></i>
                  Our  Work
                </a>
                <a 
                style={{color : "black"}}
                href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1050">
                  <i className="ri-contacts-line mr-3"></i>
                  Contact
                </a>
                <Link href="/pricing" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="550">
              <i className="ri-exchange-dollar-line mr-2"></i>
              Pricing
            </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Contact Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Form */}
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700" data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <i className="ri-message-3-line mr-3 text-orange-500"></i>
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-user-line mr-2 text-orange-500"></i>
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-user-line mr-2 text-orange-500"></i>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-mail-line mr-2 text-orange-500"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-phone-line mr-2 text-orange-500"></i>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                      <i className="ri-building-line mr-2 text-orange-500"></i>
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-service-line mr-2 text-orange-500"></i>
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <i className="ri-home-gear-line mr-2 text-orange-500"></i>
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                      <i className="ri-message-2-line mr-2 text-orange-500"></i>
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 w-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <i className="ri-send-plane-line mr-3"></i>
                    Send Message
                  </button>
                </form>
              </div>

              {/* Enhanced Contact Info */}
              <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-delay="400">
                <h2 style={{color : "orange"}} className="text-3xl font-semibold text-white mb-8 flex items-center">
                  <i className="ri-customer-service-2-line mr-3"></i>
                  Get in Touch
                </h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <i className="ri-mail-line text-xl text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p className="text-gray-400 mb-2">Send us your project details</p>
                      <a href="mailto:contact@mxestimation.com" className="text-orange-500 hover:text-orange-400 transition-colors font-medium">
                        contact@mxestimation.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <i className="ri-time-line text-xl text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                      <p className="text-gray-400 mb-2">Quick turnaround guaranteed</p>
                      <span className="text-orange-500 font-medium">Within 2-4 hours</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <i className="ri-shield-check-line text-xl text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                      <p className="text-gray-400 mb-2">Level 3 Certified Professional</p>
                      <span className="text-orange-500 font-medium">7+ Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <i className="ri-share-line mr-3 text-orange-500"></i>
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <Link 
                      target='_blank' 
                      href="https://www.linkedin.com/in/malik-saif-a56510249/?originalSubdomain=pk" 
                      className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                    >
                      <i className="ri-linkedin-fill text-xl text-orange-500 group-hover:text-white"></i>
                    </Link>
                    
                    <Link 
                      target='_blank' 
                      href="https://www.facebook.com/malik.xactimator" 
                      className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                    >
                      <i className="ri-facebook-fill text-xl text-orange-500 group-hover:text-white"></i>
                    </Link>
                    
                    <Link 
                      target='_blank' 
                      href="https://www.instagram.com/p/DNKYNXsMsdS/" 
                      className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-pink-600 transition-all duration-300 group hover:scale-110"
                    >
                      <i className="ri-instagram-fill text-xl text-orange-500 group-hover:text-white"></i>
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    Connect with us on social media for updates and industry insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black-900 text-white py-16 border-t border-gray-800" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div data-aos="fade-up" data-aos-delay="200">
                <div style={{color : "orange"}} className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
                <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/work/xactimate-estimate" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="500">Xactimate Estimates</Link></li>
                  <li><Link href="/work/matterport-to-xactimate-sketch" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="550">Matterport Conversion</Link></li>
                  <li><Link href="/work/xactimate-interior-estimate" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="600">Roof Reports PDF</Link></li>
                  <li><Link href="/work/Symbility-roof-sketch" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="700">Symbility roof sketch</Link></li>
                </ul>
              </div>
            
              <div>
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Quick Action</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="http://mxestimation.com/terms-and-conditions.html" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                  <li><a href="http://mxestimation.com/privacy-policy.html" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="http://mxestimation.com/cookies-policy.html" className="hover:text-white transition-colors">Cookies Policy</a></li>
                </ul>
              </div>

              <div  data-aos="fade-up" data-aos-delay="1050">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-line"></i>
                    </div>
                    <a href="mailto:contact@mxestimation.com" className="hover:text-white transition-colors">
                      contact@mxestimation.com
                    </a>
                  </li>
                 
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1200">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    24/7
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4">
                  <Link target='_blank' href="https://www.linkedin.com/in/malik-saif-a56510249/?originalSubdomain=pk" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="300">
                    <i style={{color : "orange"}} className="ri-linkedin-fill"></i>
                  </Link>
                  
                  <Link target='_blank' href="https://www.facebook.com/malik.xactimator" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-facebook-fill"></i>
                  </Link>
                  <Link target='_blank' href="https://www.instagram.com/p/DNKYNXsMsdS/" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-instagram-fill"></i>
                  </Link>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8" data-aos="fade-up" data-aos-delay="1250">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="1300">© 2024 MX Estimation. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="http://mxestimation.com/privacy-policy.html" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1350">Privacy Policy</a>
                  <a href="http://mxestimation.com/terms-and-conditions.html" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1400">Terms and Conditions</a>
                  <a href="http://mxestimation.com/cookies-policy.html" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1450">Cookies Policy</a>
              </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
