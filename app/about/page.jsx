"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <Head>
        <title>About Us - MX Estimation</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
      </Head>

      {/* Header */}
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

      {/* Hero Section */}
      <section
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
            <h1 className="text-5xl font-bold text-white-900 mb-6">Building Tomorrow's Solutions Today</h1>
            <p className="text-xl text-white-700 mb-8 leading-relaxed">
              At MX Estimation, we combine innovative thinking with proven expertise to deliver exceptional results. Our mission is to transform complex challenges into streamlined solutions that drive sustainable growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-900">
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
      <section className="py-20 bg-black">
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
      <section className="py-20 bg-gray-900">
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
      <section className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Our Impact</h2>
            <p className="text-xl text-text max-w-3xl mx-auto">
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
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business challenges into opportunities for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-primary px-8 py-3 rounded-button hover:bg-white-100 transition-colors whitespace-nowrap font-medium">Get Started</button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-button  ">Schedule a Call</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-['Pacifico'] text-2xl mb-4">logo</div>
              <p className="text-gray-400 text-sm">
                Transforming complex challenges into streamlined solutions for sustainable growth.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
                <li><Link href="/services/estimation" className="hover:text-white transition-colors">Estimation</Link></li>
                <li><Link href="/services/project-management" className="hover:text-white transition-colors">Project Management</Link></li>
                <li><Link href="/services/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>123 Business Avenue</p>
                <p>New York, NY 10001</p>
                <p>+1 (555) 123-4567</p>
                <p>info@mxestimation.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 MX Estimation. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="ri-linkedin-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="ri-twitter-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="ri-instagram-fill text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}