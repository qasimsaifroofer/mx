"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout;

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

  return (
    <header
      style={{
        background: "linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)",
      }}
      className=" shadow-sm sticky top-0 z-50 border-b border-gray-800"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div data-aos="fade-right" data-aos-delay="200">
            <img src="/logo.jpeg" alt="MX Estimation Logo" className="h-10 w-auto sm:h-12 md:h-16 object-contain rounded-lg" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="300">
              <i className="ri-home-line mr-2"></i>
              Home
            </Link>
            <a
              href="/about"
              className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
              data-aos="fade-left"
              data-aos-delay="350"
            >
              <i className="ri-information-line mr-3"></i>
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
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              >
                <i className="ri-service-line mr-2"></i>
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
            <a href="/work" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="500">
              <i className="ri-star-line mr-2"></i>
              work
            </a>
            <Link href="/contact" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="550">
              <i className="ri-contacts-line mr-2"></i>
              Contact
            </Link>
            <Link href="/pricing" className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl" data-aos="fade-left" data-aos-delay="550">
              <i className="ri-exchange-dollar-line mr-2"></i>
              Pricing
            </Link>
          </div>
          <a
            href="mailto:contact@mxestimation.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
            className="hidden md:inline-block bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap"
            data-aos="fade-left"
            data-aos-delay="600"
            target='_blank'
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
              style={{ color: "black" }}
              href="/" className="text-gray-300 hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="750">
              <i className="ri-home-line mr-3"></i>
              Home
            </a>
            <a
              style={{ color: "black" }}
              href="/about" className="text-gray-300 hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="800">
              <i className="ri-information-line mr-3"></i>
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
                <i className="ri-service-line mr-3"></i>
                Services
                <i className="ri-arrow-down-s-line ml-1"></i>
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
                    style={{ color: "black" }}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a
              style={{ color: "black" }}
              href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1000">
              <i className="ri-star-line mr-3"></i>
              Our  Work
            </a>
            <a
              style={{ color: "black" }}
              href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1050">
              <i className="ri-contacts-line mr-3"></i>
              Contact
            </a>
            <a
              style={{ color: "black" }}
              href="/pricing" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1075">
              <i className="ri-exchange-dollar-line mr-3"></i>
              Pricing
            </a>
            <a
              href="mailto:contact@mxestimation.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
              className="mt-2 inline-flex items-center justify-center bg-white text-black px-3 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors"
              data-aos="fade-up"
              data-aos-delay="1100"
              target="_blank"
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
