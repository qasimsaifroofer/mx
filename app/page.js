"use client"
import React, { useEffect, useState , useRef } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service');
  const [termsChecked, setTermsChecked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout;

  const services = [
    { id: "xactimate-estimate", title: "Xactimate Estimate", href: "/work/xactimate-estimate" },
    { id: "xactimate-roof-esx", title: "Xactimate Roof ESX", href: "/work/xactimate-roof-esx" },
    { id: "matterport-to-xactimate-sketch", title: "Matterport to Xactimate Sketch", href: "/work/matterport-to-xactimate-sketch" },
    { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/work/xactimate-interior-estimate" },
  ];

  // Close dropdown when clicking outside
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
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setServiceDropdownOpen(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MX Estimation - Professional Xactimate Estimator Services | Insurance Claims Support</title>
        <meta name="description" content="Professional Xactimate estimation services by Level 3 certified estimators. Matterport conversion, aerial roof reports, fire/water/mold damage estimates. 24-48hr turnaround." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
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

          /* Remixicon fallback styles */
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
      </Head>
      <div className="bg-black text-white">
      <header className="bg-black shadow-sm sticky top-0 z-50 border-b border-gray-800" data-aos="fade-down" data-aos-delay="100">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center" data-aos="fade-right" data-aos-delay="200">
            <div style={{ width: "180px", height: "150px" }}>
              <img src="/logo.jpeg" alt="MX Estimation Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="300">
              <i className="ri-home-line mr-2"></i>
              Home
            </Link>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="350">
              <i className="ri-information-line mr-2"></i>
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
                className="text-gray-300 hover:text-white transition-colors flex items-center"
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
            <a href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="500">
              <i className="ri-star-line mr-2"></i>
              work
            </a>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="550">
              <i className="ri-contacts-line mr-2"></i>
              Contact
            </Link>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap" data-aos="fade-left" data-aos-delay="600">
            Get Quote
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-aos="fade-left" data-aos-delay="650">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl text-white"></i>
            </div>
          </button>
        </div>
        <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="700">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="750">
              <i className="ri-home-line mr-3"></i>
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="800">
              <i className="ri-information-line mr-3"></i>
              About
            </a>
            <div className="flex flex-col">
              <button
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                data-aos="fade-up"
                data-aos-delay="850"
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
                    className="text-gray-300 hover:text-white transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={950 + index * 50}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1000">
              <i className="ri-star-line mr-3"></i>
              Our  Work
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-up" data-aos-delay="1050">
              <i className="ri-contacts-line mr-3"></i>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
        <main>
          <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundImage: "url('/roof.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos="fade-in" data-aos-delay="100">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            <div className="relative w-full px-6 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="200">
                  <div className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-shield-check-line"></i>
                    </div>
                    Level 3 Certified Xactimate Estimators
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">Professional Xactimate Estimation Services</h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="500">Expert insurance claim support with 7+ years of experience. Fast, accurate estimates with 24-48 hour turnaround and transparent pricing.</p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8" data-aos="fade-up" data-aos-delay="600">
                    <button className="bg-white text-black px-8 py-4 rounded-[8px] text-lg font-semibold hover:bg-gray-300 transition-colors whitespace-nowrap">Get Your Estimate</button>
                    <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-[8px] text-lg font-semibold hover:border-gray-300 hover:text-gray-300 transition-colors whitespace-nowrap">View Services</button>
                  </div>
                  <div className="flex items-center space-x-8 text-sm text-gray-400" data-aos="fade-up" data-aos-delay="700">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-time-line text-white"></i>
                      </div>
                      24-48 Hour Turnaround
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-price-tag-3-line text-white"></i>
                      </div>
                      Fixed Pricing
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-shield-check-line text-white"></i>
                      </div>
                      No Hidden Fees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="py-20 bg-gray-900" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">About MX Estimation</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Led by industry experts with proven track records in Xactimate estimation and insurance claim support.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8" data-aos="fade-right" data-aos-delay="500">
                  <div className="bg-gray-800 p-8 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="600">
                    <div className="flex items-start space-x-4">
                      <Image src="/saif.jpeg" alt="Malik Saif" width={64} height={64} className="rounded-full object-cover" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Malik Saif</h3>
                        <p className="text-white font-semibold mb-2">Lead Estimator & Founder</p>
                        <p className="text-gray-400 mb-3">Xactimate Level 3 Certified with over 7 years of hands-on experience in property damage estimation and insurance claim support.</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-1">
                              <i className="ri-award-line"></i>
                            </div>
                            Level 3 Certified
                          </span>
                          <span className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-1">
                              <i className="ri-time-line"></i>
                            </div>
                            7+ Years Experience
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-8 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="700">
                    <div className="flex items-start space-x-4">
                      <Image src="/hassan.jpeg" alt="Hasnain Sajjad" width={64} height={64} className="rounded-full object-cover" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Hasnain Sajjad</h3>
                        <p className="text-white font-semibold mb-2">CEO & Co-Founder</p>
                        <p className="text-gray-400 mb-3">Strategic leader driving innovation in estimation services with a focus on client satisfaction and operational excellence.</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-1">
                              <i className="ri-user-star-line"></i>
                            </div>
                            Leadership
                          </span>
                          <span className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-1">
                              <i className="ri-rocket-line"></i>
                            </div>
                            Innovation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6" data-aos="fade-left" data-aos-delay="500">
                  <h3 className="text-2xl font-bold text-white" data-aos="fade-up" data-aos-delay="600">Why Choose Our Expertise?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="700">
                      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Advanced Certification</h4>
                        <p className="text-gray-400">Xactimate Level 3 certification ensures the highest standard of accuracy and professionalism in every estimate.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="800">
                      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Track Record</h4>
                        <p className="text-gray-400">Over 7 years of successful project completion with insurance companies, contractors, and property owners.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="900">
                      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Technology Integration</h4>
                        <p className="text-gray-400">Seamless Matterport to Xactimate conversion and advanced aerial roof analysis for comprehensive estimates.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="1000">
                      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Client-Focused Approach</h4>
                        <p className="text-gray-400">Transparent communication, fixed pricing, and rapid turnaround times designed around your business needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">Our Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Comprehensive Xactimate estimation services tailored to your needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-700 group cursor-pointer" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-calculator-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Xactimate Estimate</h3>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Roof Estimate</span>
                      <span className="font-medium">$60</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Siding Estimate</span>
                      <span className="font-medium">$60</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Roof + Siding</span>
                      <span className="font-medium">$80</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Commercial Roof</span>
                      <span className="font-medium">$120</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">XACTIMATE INTERIOR ESTIMATE  start at $100 (up to 150 items)</p>
                    </div>
                  </div>
                  <button onClick={() => router.push('/form/Xactimate-Estimate')} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-700 group cursor-pointer" data-aos="fade-up" data-aos-delay="600">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-home-4-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Xactimate Roof ESX</h3>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Under 30 Facets</span>
                      <span className="font-medium">$20</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Over 30 Facets</span>
                      <span className="font-medium">$25</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Commercial Building</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>3D Wall Sketch</span>
                      <span className="font-medium">$30</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Aerial Roof Report</span>
                      <span className="font-medium">$15</span>
                    </div>
                  </div>
                  <button onClick={() => router.push('/form/Xactimate-Roof-ESX')} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-700 group cursor-pointer" data-aos="fade-up" data-aos-delay="700">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-ruler-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Matterport to xactimate Sketch ESX</h3>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Up to 1000 SQFT</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>1000-2000 SQFT</span>
                      <span className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>2000-4000 SQFT</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>4000-6000 SQFT</span>
                      <span className="font-medium">$200</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Floor plan/Hand Sketch to ESX: $30</p>
                    </div>
                  </div>
                  <button onClick={() => router.push('/form/Matterport-to-Xactimate-Sketch-ESX')} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-700 group cursor-pointer" data-aos="fade-up" data-aos-delay="800">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-layout-masonry-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">XACTIMATE INTERIOR ESTIMATE </h3>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Up to 150 items</span>
                      <span className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>150-200 items</span>
                      <span className="font-medium">$130</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>200-250 items</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>250-300 items</span>
                      <span className="font-medium">$200</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Larger projects priced accordingly</p>
                    </div>
                  </div>
                  <button onClick={() => router.push('/form/Xactimate-Estimate')} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-900" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">Why Choose MX Estimation?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">We deliver exceptional value through expertise, efficiency, and unwavering commitment to client success.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl mx-auto mb-6">
                    <i className="ri-speed-up-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Fast Turnaround</h3>
                  <p className="text-gray-400">Sketches delivered in 12-24 hours, full estimates in 24-48 hours. We understand time-sensitive insurance claims and project deadlines.</p>
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl mx-auto mb-6">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expert Certification</h3>
                  <p className="text-gray-400">Level 3 Xactimate certification with 7+ years of hands-on experience ensures accuracy and industry compliance in every estimate.</p>
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-delay="700">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl mx-auto mb-6">
                    <i className="ri-price-tag-3-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Transparent Pricing</h3>
                  <p className="text-gray-400">Fixed pricing with no hidden fees. You know exactly what you'll pay upfront, making budgeting and project planning simple and predictable.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">Client Testimonials</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">See what our clients say about our professional Xactimate estimation services and customer support.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="500">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"Shout to my man Malik Saif. This is the Quality of Matterport to xactimate Sketch ESXing he can provide. Top notch shit."</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">Jason Trolinder</h4>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="600">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"Working with Mx Estimation is always an absolute delight! His talent genuinely blows me away. What made the experience even better was the clear communication, timely delivery, and genuine care throughout the process. We have formed a great business relationship that will continue to grow for years to come. Thank you MX Estimation for being you usual PHENOMENAL Self."</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">On Site Adjusting</h4>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="700">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"Shhhhhh, Malik did such a great job. I Would like to keep it a secret but she deserves my honest opinion. Professional, timely, and diligent. If I could give her 10 stars I would. Matter of fact, I just did !!"</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">Valor Restoration,LLC</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt WebcamStreamCapture-12" data-aos="fade-up" data-aos-delay="800">
                <div className="inline-flex items-center space-x-2 text-gray-400">
                  <div className="flex space-x-1">
                    <i className="ri-star-fill text-yellow-400"></i>
                    <i className="ri-star-fill text-yellow-400"></i>
                    <i className="ri-star-fill text-yellow-400"></i>
                    <i className="ri-star-fill text-yellow-400"></i>
                    <i className="ri-star-fill text-yellow-400"></i>
                  </div>
                  <span className="text-lg font-semibold text-white">4.9/5</span>
                  <span>from 150+ client reviews</span>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">Get Your Estimate Today</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Ready to get started? Contact us for professional Xactimate estimation services with fast turnaround and transparent pricing.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div data-aos="fade-right" data-aos-delay="500">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div data-aos="fade-up" data-aos-delay="600">
                        <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your full name" required />
                      </div>
                      <div data-aos="fade-up" data-aos-delay="650">
                        <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your email" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div data-aos="fade-up" data-aos-delay="700">
                        <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your phone" />
                      </div>
                      <div data-aos="fade-up" data-aos-delay="750">
                        <label className="block text-sm font-semibold text-white mb-2">Service Type *</label>
                        <div className="relative">
                          <button type="button" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-left text-white pr-8" onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}>
                            {selectedService}
                          </button>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                          <div className={`absolute top-full left-0 right-0 bg-gray-800 border border-gray-700 rounded-lg mt-1 shadow-lg z-10 ${serviceDropdownOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="800">
                            <div className="py-2">
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Roof Estimate ($60)')}>Roof Estimate ($60)</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Siding Estimate ($60)')}>Siding Estimate ($60)</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Combo Package ($80)')}>Combo Package ($80)</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Commercial Roof ($120)')}>Commercial Roof ($120)</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Interior Estimate ($100+)')}>Interior Estimate ($100+)</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Matterport Conversion')}>Matterport Conversion</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Fire/Water/Mold Damage')}>Fire/Water/Mold Damage</button>
                              <button type="button" className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white" onClick={() => handleServiceSelect('Rebuild Cost Estimation')}>Rebuild Cost Estimation</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="850">
                      <label className="block text-sm font-semibold text-white mb-2">Project Details</label>
                      <textarea rows="4" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm resize-none text-white" placeholder="Tell us about your project, property details, damage type, or any specific requirements..."></textarea>
                    </div>
                    <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="900">
                      <div className="relative">
                        <div className={`w-5 h-5 border-2 ${termsChecked ? 'bg-white border-white' : 'border-gray-700'} bg-gray-900 rounded cursor-pointer flex items-center justify-center`} onClick={() => setTermsChecked(!termsChecked)}>
                          <i className={`ri-check-line text-black text-sm ${termsChecked ? '' : 'hidden'}`}></i>
                        </div>
                      </div>
                      <label className="text-sm text-gray-400 cursor-pointer">I agree to the terms of service and privacy policy. I understand that estimates will be delivered within 24-48 hours.</label>
                    </div>
                    <button type="submit" className="w-full bg-white text-black py-4 rounded-[8px] text-lg font-semibold hover:bg-gray-300 transition-colors whitespace-nowrap" data-aos="fade-up" data-aos-delay="950">Send Request</button>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                  <div className="space-y-8">
                    <div data-aos="fade-up" data-aos-delay="600">
                      <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="650">
                          <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0 mt-1">
                            <i className="ri-mail-line text-white"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Email</h4>
                            <p className="text-gray-400">info@mxestimation.com</p>
                            <p className="text-gray-400">estimates@mxestimation.com</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="700">
                          <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0 mt-1">
                            <i className="ri-phone-line text-white"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Phone</h4>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                            <p className="text-sm text-gray-500">Monday - Friday, 8 AM - 6 PM EST</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="750">
                          <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0 mt-1">
                            <i className="ri-time-line text-white"></i>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Response Time</h4>
                            <p className="text-gray-400">Quotes within 2 hours</p>
                            <p className="text-gray-400">Estimates in 24-48 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6" data-aos="fade-up" data-aos-delay="800">
                      <h4 className="font-bold text-white mb-4">Why Choose Us?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="850">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-shield-check-line text-white"></i>
                          </div>
                          <span className="text-gray-300">Level 3 Xactimate Certified</span>
                        </li>
                        <li className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="900">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-time-line text-white"></i>
                          </div>
                          <span className="text-gray-300">24-48 Hour Turnaround</span>
                        </li>
                        <li className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="950">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-price-tag-3-line text-white"></i>
                          </div>
                          <span className="text-gray-300">Fixed Pricing, No Hidden Fees</span>
                        </li>
                        <li className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="1000">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-customer-service-2-line text-white"></i>
                          </div>
                          <span className="text-gray-300">Dedicated Support Team</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white text-black rounded-2xl p-6" data-aos="fade-up" data-aos-delay="1050">
                      <h4 className="font-bold mb-2">Need Urgent Estimates?</h4>
                      <p className="text-black/90 mb-4">For rush orders or large projects, contact us directly for expedited service and custom pricing.</p>
                      <button className="bg-black text-white px-6 py-2 rounded-[8px] font-semibold hover:bg-gray-900 transition-colors whitespace-nowrap">Call Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-900 text-white py-16 border-t border-gray-800" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
                <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="300">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="350">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <h4 className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="500">Xactimate Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="550">Matterport Conversion</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="600">Aerial Roof Reports</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="650">Damage Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="700">Rebuild Cost Analysis</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="750">
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="800">About Us</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="850">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="900">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="950">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="1000">FAQ</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="1050">
                <h4 className="font-bold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-line"></i>
                    </div>
                    info@mxestimation.com
                  </li>
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1150">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-phone-line"></i>
                    </div>
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1200">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    Mon-Fri, 8 AM - 6 PM EST
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

export default Home;