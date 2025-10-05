"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
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
      }, 300); // 300ms delay before closing
    }
  };


  useEffect(() => {
    // Counter Animation Script
    const counters = document.querySelectorAll('[data-count]');
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach((counter) => {
      observer.observe(counter);
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
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> MX Estimation | About Us</title>
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://mxestimation.com/about" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          crossOrigin="anonymous"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate { opacity: 0; }
          .animate.fade-up { animation: fadeInUp 0.8s ease-out forwards; }
          .animate.fade-left { animation: fadeInLeft 0.8s ease-out forwards; }
          .animate.fade-right { animation: fadeInRight 0.8s ease-out forwards; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }

          @font-face {
            font-family: 'remixicon';
            src: url('https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }

          [class^="ri-"], [class*=" ri-"] {
            font-family: 'remixicon' !important;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
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
            "url": "https://mxestimation.com/about",
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
      <div className="bg-black text-white">

      {/* Header */}
      <header   style={{
              background: "linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)",
              
             
            }} className=" shadow-sm sticky top-0 z-50 border-b border-gray-800" data-aos="fade-down" data-aos-delay="100">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div  data-aos="fade-right" data-aos-delay="200">
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
              <i           
 className="ri-menu-line text-xl text-white"></i>
            </div>
          </button>
        </div>
        <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="700">
          <div className="flex flex-col space-y-4">
            <a
            
            style={{color : "black"}}
            href="/" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="750">
              <i   
 className="ri-home-line mr-3"></i>
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
      {/* Hero Section */}
      <section
      data-aos="fade-up"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/about.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 style={{color : "orange"}} className="text-5xl font-bold text-white-900 mb-6">Building Tomorrow's Solutions Today</h1>
            <p className="text-xl text-white-700 mb-8 leading-relaxed">
              At MX Estimation, we combine innovative thinking with proven expertise to deliver exceptional results. Our mission is to transform complex challenges into streamlined solutions that drive sustainable growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" style={{border : "2px solid orange" , color :"orange"}} className="border-2 border-primary text-primary px-8 py-3 rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
      data-aos="fade-up"
     className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 ">Our Story</h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our journey has been defined by innovation, dedication, and an unwavering commitment to excellence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2018 - The Beginning</h3>
                    <p className="text-gray-600">
                      Founded with a vision to revolutionize the estimation industry through cutting-edge technology and unparalleled service quality.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <Image
                    src="/1.jpg"
                    alt="Company founding"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-48"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-8">
                  <Image
                    src="/2.jpg"
                    alt="First milestone"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-48"
                  />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2020 - Major Breakthrough</h3>
                    <p className="text-gray-600">
                      Achieved our first major milestone by serving over 500 clients and establishing partnerships with leading industry players.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2022 - Global Expansion</h3>
                    <p className="text-gray-600">
                      Expanded operations internationally, opening offices in three new countries and doubling our team size.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <Image
                    src="/3.jpg"
                    alt="Global expansion"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-48"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-8">
                  <Image
                    src="/4.jpg"
                    alt="Industry recognition"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-48"
                  />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2024 - Industry Recognition</h3>
                    <p className="text-gray-600">
                      Received multiple industry awards for innovation and excellence, cementing our position as a market leader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
      data-aos="fade-up"
        className="py-20"
        style={{
          background: "linear-gradient(100deg, black 40%, #facc15 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-white">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-lightbulb-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-white">
                We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-shield-check-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-white">
                Honesty and transparency form the foundation of all our relationships, ensuring trust and reliability in every interaction.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-award-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-white">Excellence</h3>
              <p className="text-white">
                We strive for perfection in everything we do, maintaining the highest standards of quality and performance.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-team-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-white">
                We believe in the power of teamwork and foster an environment where diverse perspectives drive innovation.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-customer-service-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Client Focus</h3>
              <p className="text-white">
                Our clients' success is our success. We prioritize their needs and work tirelessly to deliver exceptional value.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <i className="ri-leaf-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-white">Sustainability</h3>
              <p className="text-white">
                We are committed to responsible business practices that contribute to a better future for our planet and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
      data-aos="fade-up"
      className="py-20 bg-black">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-white text-center">Our Team</h2>
      <br />

      <div className="flex justify-center">
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto ">
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow ">

      <div className="aspect-square overflow-hidden">
        <Image
          src="/saif.jpeg"
          alt="saif Malik"
          width={400}
          height={400}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Malik Saif</h3>
        <p className="text-primary font-medium mb-3 text-black">Lead Estimator & Founder</p>
        <p className="text-gray-600 text-sm mb-4">
        Xactimate Level 3 Certified with over 7 years of hands-on experience in property damage estimation and insurance claim support.
        </p>
   
      </div>

    </div>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden">
        <Image
          src="/hassan.jpeg"
          alt="hassan sajjad"
          width={400}
          height={400}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Hasnain Sajjad</h3>
        <p className="text-primary font-medium mb-3 text-black">CEO & Co-Founder</p>
        <p className="text-gray-600 text-sm mb-4">
        Strategic leader driving innovation in estimation services with a focus on client satisfaction and operational excellence.        </p>
        <div className="flex space-x-3">
          <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <i className="ri-linkedin-line text-sm"></i>
          </a>
          <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <i className="ri-github-line text-sm"></i>
          </a>
          <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <i className="ri-mail-line text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* Impact Section */}
      <section
      data-aos="fade-up"
      className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-3xl text-primary"></i>
              </div>
              <div className="text-4xl font-bold text-white mb-2" data-count="1250">0</div>
              <p className="text-gray-600 font-medium text-white">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-briefcase-line text-3xl text-primary"></i>
              </div>
              <div className="text-4xl font-bold  mb-2 text-white" data-count="3400">0</div>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-3xl text-primary"></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 text-white" data-count="15">0</div>
              <p className=" font-medium text-white">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-primary"></i>
              </div>
              <div className="text-4xl font-bold  mb-2 text-white" data-count="28">0</div>
              <p className=" font-medium text-white" >Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
      data-aos="fade-up"
      className="py-20" style={{
        background: "linear-gradient(100deg, black 40%, #facc15 100%)",
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business challenges into opportunities for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/form/info"  className="border-2 border-orange text-white px-8 py-3 rounded-button hover:bg-orange-500 hover:text-black transition-colors whitespace-nowrap font-medium cursor-pointer">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Footer (match Home theme) */}
      <footer className="bg-black-900 text-white py-16 border-t border-gray-800"  data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div  data-aos-delay="200">
                <div style={{color : "orange"}} className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
                <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
                
              </div>
              <div >
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/work/xactimate-estimate" className="hover:text-white transition-colors"  data-aos-delay="500">Xactimate Roof Estimate</Link></li>
                  <li><Link href="/work/matterport-to-xactimate-sketch" className="hover:text-white transition-colors"  data-aos-delay="550">Matterport Conversion</Link></li>
                  <li><Link href="/work/xactimate-interior-estimate" className="hover:text-white transition-colors" data-aos-delay="600">Roof Reports PDF</Link></li>
                  <li><Link href="/work/Symbility-roof-sketch" className="hover:text-white transition-colors"  data-aos-delay="700">Symbility roof sketch</Link></li>
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

              <div  data-aos-delay="1050">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"  data-aos-delay="1100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-line"></i>
                    </div>
                    <a href="mailto:contact@mxestimation.com" className="hover:text-white transition-colors">
                      contact@mxestimation.com
                    </a>
                  </li>
                 
                  <li className="flex items-center"  data-aos-delay="1200">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    24/7
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4">
                  <Link target='_blank' href="https://www.linkedin.com/in/malik-saif-a56510249/?originalSubdomain=pk" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos-delay="300">
                    <i style={{color : "orange"}} className="ri-linkedin-fill"></i>
                  </Link>
                  
                  <Link target='_blank' href="https://www.facebook.com/malik.xactimator" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-facebook-fill"></i>
                  </Link>
                  <Link target='_blank' href="https://www.instagram.com/p/DNKYNXsMsdS/" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors"  data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-instagram-fill"></i>
                  </Link>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8"  data-aos-delay="1250">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm" data-aos-delay="1300">© 2024 MX Estimation. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="http://mxestimation.com/privacy-policy.html" className="text-gray-400 hover:text-white text-sm transition-colors"  data-aos-delay="1350">Privacy Policy</a>
                  <a href="http://mxestimation.com/terms-and-conditions.html" className="text-gray-400 hover:text-white text-sm transition-colors"  data-aos-delay="1400">Terms and Conditions</a>
                  <a href="http://mxestimation.com/cookies-policy.html" className="text-gray-400 hover:text-white text-sm transition-colors"  data-aos-delay="1450">Cookies Policy</a>
                </div>
              </div>
            </div>
            
          </div>

          
        </footer>
      </div>
    </>
  );
}
