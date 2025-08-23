"use client"
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cormorant } from 'next/font/google';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout;

  const services = [
    { id: "xactimate-estimate", title: "Xactimate Estimate", href: "/work/xactimate-estimate" },
    { id: "xactimate-roof-esx", title: "Xactimate Roof ESX", href: "/work/xactimate-roof-esx" },
    { id: "matterport-to-xactimate-sketch", title: "Matterport to Xactimate Sketch", href: "/work/matterport-to-xactimate-sketch" },
    { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/work/xactimate-interior-estimate" },
    { id: "roof-report-pdf", title: "Roof Report (PDF)", href: "/work/roof-report-pdf" },
    { id: "stability-roof-sketch", title: "Stability Roof Sketch (XML + PDF)", href: "/work/stability-roof-sketch" },

 
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
      <Head>
        <title>Contact - Estimation Xactimate</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
        <style>{`
          :where([class^="ri-"])::before { content: "\\f3c2"; }
        `}</style>
      </Head>
      <div className="bg-black text-white min-h-screen">
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
          </div>
        </div>
      </nav>
    </header>
        {/* Contact Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 style={{color : " orange"}} className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full">
                    Submit
                  </button>
                </div>
              </div>
              {/* Contact Info */}
              <div className="flex flex-col justify-center">
                <h2 style={{color : "orange"}} className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
                <ul className="space-y-3">
                  
                  <li className="flex items-center text-gray-300">
                    <i style={{color : "orange"}} className="ri-mail-line text-xl mr-2 text-white"></i>
                    <a href="mailto:mxestimation@gmail.com" className="hover:text-white transition-colors">
                      mxestimation@gmail.com
                    </a>
                  </li>
                 
                </ul>
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
              <div data-aos="fade-up" data-aos-delay="450">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="500">Xactimate Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="550">Matterport Conversion</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="600">Aerial Roof Reports</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="650">Damage Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="700">Rebuild Cost Analysis</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="750">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="800">About Us</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="850">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="900">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="950">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="1000">FAQ</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="1050">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-line"></i>
                    </div>
                    <a href="mailto:mxestimation@gmail.com" className="hover:text-white transition-colors">
                      mxestimation@gmail.com
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
            </div>
            <div className="border-t border-gray-800 pt-8" data-aos="fade-up" data-aos-delay="1250">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="1300">© 2024 MX Estimation. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1350">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1400">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos="fade-up" data-aos-delay="1450">Cookie Policy</a>
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