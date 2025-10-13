"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function OurWork() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
        <title>Our Work - MX Estimation</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
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
            "url": "https://mxestimation.com/work",
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
  href="mailto:mxestimation@gmail.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
  className="bg-white text-black px-10 py-5 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap inline-block"
  data-aos="fade-left"
  data-aos-delay="600"
  target='_blank'
  style={{fontSize : "20px"}}
>
  Get Quote
</a>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-6 flex items-center justify-center">
              <i           
 className="ri-menu-line text-xl text-white"></i>
            </div>
          </button>
        </div>
        <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a
            
            style={{color : "black"}}
            href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <i   
 className="ri-home-line mr-3"></i>
              Home
            </a>
            <a
            style={{color : "black"}}
            href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <i style={{color : "black"}} className="ri-information-line mr-3"></i>
              About
            </a>
            <div className="flex flex-col">
              <button
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
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
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="text-black-900 hover:text-white transition-colors"
                    style={{color : "black"}}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a
            style={{color : "black"}}
            href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <i className="ri-star-line mr-3"></i>
              Our  Work
            </a>
            <a 
            style={{color : "black"}}
            href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
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
          backgroundImage: `url('/work.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 style={{color : "orange"}} className="text-5xl font-bold text-white mb-6">Our Work</h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Explore our portfolio of innovative projects that showcase our expertise in transforming challenges into impactful solutions. Each project reflects our commitment to excellence and client success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="border-2 border-orange text-orange px-8 py-3 rounded-button hover:text-black transition-colors whitespace-nowrap font-medium cursor-pointer bg-orange-500">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section   style={{
          background: "linear-gradient(100deg, black 40%, #facc15 100%)",
        }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A showcase of our diverse portfolio, highlighting our expertise in delivering high-quality solutions across various industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/s1.jpg"
                  alt="Commercial Building Estimation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xactimate Roof Estimate 
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Comprehensive Xactimate Roof Estimate s tailored to accurately assess and document all types of damages.
</p>
                <a href="#project1" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/s2.jpeg"
                  alt="Residential Renovation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xactimate roof ESX
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Xactimate Roof ESX provides precise roofing estimates, streamlining the process for contractors and ensuring accurate calculations for successful project management.

</p>
                <a href="#project2" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/03.jpg"
                  alt="Infrastructure Development"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xactimate 3D wall sketch
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Xactimate 3D Wall Sketch allows for detailed and accurate visual representations of wall structures, enhancing project planning and estimation efficiency.

</p>
                <a href="#project3" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/4 (1).jpg"
                  alt="Industrial Facility Upgrade"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ariel roof measurements
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Aerial roof measurements provide precise data for estimating and assessing roofing projects, ensuring accuracy and efficiency in planning and execution.

</p>
                <a href="#project4" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="500">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/5.jpg"
                  alt="Sustainable Construction"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Matterport to xactimate sketch
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Transform Matterport scans into Xactimate sketches for accurate, detailed estimations, streamlining your workflow and enhancing project management efficiency.

</p>
                <a href="#project5" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="600">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/s6.jpg"
                  alt="Mixed-Use Development"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arial Siding Report
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                Arial Siding Report offers comprehensive assessments of exterior siding, utilizing advanced aerial imagery to ensure precise measurements and informed decision-making.

</p>
                <a href="#project6" className="text-primary font-medium hover:underline text-black">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
       data-aos="fade-up"
      style={{backgroundColor : "black"}} className="py-20 bg-white-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business challenges into opportunities for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a  href="/form/info"  className="border-2 border-orange text-white px-8 py-3 rounded-button hover:bg-orange-500 hover:text-black transition-colors whitespace-nowrap font-medium cursor-pointer">Get Started</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor:"black"}} className="bg-black-900 text-white py-16 border-t border-gray-800"  data-aos-delay="100">
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
                    <a href="mailto:mxestimation@gmail.com" className="hover:text-white transition-colors">
                    mxestimation@gmail.com
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
    </>
  );
}
