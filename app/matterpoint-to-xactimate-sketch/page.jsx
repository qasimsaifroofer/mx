'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  
  // FIX: Use useRef to correctly manage the timeout across re-renders.
  const hoverTimeoutRef = useRef(null);

  const handleDesktopHover = (isHovering) => {
    clearTimeout(hoverTimeoutRef.current);
    if (isHovering) {
      setDesktopDropdownOpen(true);
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setDesktopDropdownOpen(false);
      }, 300);
    }
  };
  
  const navLinkClasses = "text-black text-[22px] hover:text-white transition-colors flex items-center";

  return (
    <header
      className="shadow-sm sticky top-0 z-50 border-b border-gray-800"
      style={{ background: "linear-gradient(100deg, rgba(238, 210, 86, 0.98) 40%, black 100%)" }}
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-aos="fade-right" data-aos-delay="200" className="leading-none">
            {/* FIX: Use Next.js Image for optimization */}
            <Image
              src="/logo.jpeg"
              alt="MX Estimation Logo"
              width={200}
              height={100}
              className="object-contain rounded-lg"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLinkClasses} data-aos="fade-left" data-aos-delay="300">
              <i className="ri-home-line mr-2" aria-hidden="true"></i>Home
            </Link>
            {/* FIX: Use Link for internal navigation */}
            <Link href="/about" className={navLinkClasses} data-aos="fade-left" data-aos-delay="350">
              <i className="ri-information-line mr-3" aria-hidden="true"></i>About
            </Link>
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-delay="400"
              onMouseEnter={() => handleDesktopHover(true)}
              onMouseLeave={() => handleDesktopHover(false)}
            >
              <button type="button" className={navLinkClasses} onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}>
                <i className="ri-service-line mr-2" aria-hidden="true"></i>Services
                <i className="ri-arrow-down-s-line ml-1" aria-hidden="true"></i>
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top ${desktopDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* FIX: Use Link for internal navigation */}
            <Link href="/work" className={navLinkClasses} data-aos="fade-left" data-aos-delay="500">
              <i className="ri-star-line mr-2" aria-hidden="true"></i>Work
            </Link>
            <Link href="/contact" className={navLinkClasses} data-aos-delay="550">
              <i className="ri-contacts-line mr-2" aria-hidden="true"></i>Contact
            </Link>
            <Link href="/pricing" className={navLinkClasses}>
              <i className="ri-exchange-dollar-line mr-2" aria-hidden="true"></i>Pricing
            </Link>
            <Link href="/blogs" className={navLinkClasses}>
              <i className="ri-article-line mr-2" aria-hidden="true"></i>Blogs
            </Link>
            {/* Social icons, etc. */}
          </div>
          
          <a
            href="mailto:mxestimation@gmail.com?subject=Get Quote Request"
            className="bg-white text-black text-[20px] px-10 py-5 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap hidden md:inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Quote
          </a>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
            <i className="ri-menu-line text-xl text-white"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
          {/* Your mobile menu code here */}
        </div>
      </nav>
    </header>
  );
}