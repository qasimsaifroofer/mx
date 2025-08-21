"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

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


  useEffect(() => {
    // Navigation interactions
    const serviceCards = document.querySelectorAll('.group');
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        console.log('Service card clicked');
      });
    });

    

    // Smooth scrolling for Explore Services button
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (button.textContent.includes('Explore Services')) {
          e.preventDefault();
          document.querySelector('section:nth-of-type(2)').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Posthog analytics
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_t9tkQZJiyi2ps9zUYm8TDsL6qXo4YmZx0Ot5rBlAlEd', {
      api_host: 'https://us.i.posthog.com',
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      capture_performance: { web_vitals: false },
      rageclick: false,
    });
    window.shareKey = '9xwZm159tSOID3xg98ozKw';
    window.host = 'readdy.ai';

    return () => {
      serviceCards.forEach(card => card.removeEventListener('click', () => {}));
      buttons.forEach(button => button.removeEventListener('click', () => {}));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Services - Estimation Xactimate</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
        <script src="https://static.readdy.ai/static/e.js" async />
        <script src="https://static.readdy.ai/static/share.js" async />
        <style>{`
          :where([class^="ri-"])::before { content: "\\f3c2"; }
        `}</style>
      </Head>
      <div className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <header   style={{
              background: "linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)",
             
            }} className=" shadow-sm sticky top-0 z-50 border-b border-gray-800" data-aos="fade-down" data-aos-delay="100">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center" data-aos="fade-right" data-aos-delay="200">
            <div style={{ width: "150px", height: "180px" }}>
              <img src="/logo.jpeg" alt="MX Estimation Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link style={{color : "black"}} href="/" className="text-black-900 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="300">
              <i className="ri-home-line mr-2"></i>
              Home
            </Link>
            <a 
            style={{color : "black"}}
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
              style={{color : "black"}}
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
            <a style={{color : "black"}} href="/work" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="500">
              <i style={{color : "black"}}  className="ri-star-line mr-2"></i>
              work
            </a>
            <Link style={{color : "black"}} href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center" data-aos="fade-left" data-aos-delay="550">
              <i style={{color : "black"}} className="ri-contacts-line mr-2"></i>
              Contact
            </Link>
          </div>
          <a
  href="mailto:mxestimation@gmail.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
  className="bg-white text-black px-6 py-2 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap inline-block"
  data-aos="fade-left"
  data-aos-delay="600"
  target='_blank'
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
                    className="text-gray-300 hover:text-white transition-colors"
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

        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="absolute inset-0">
            <Image
              src="/Roof-Estimate-1.jpeg"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white mb-6">Professional Xactimate Services</h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive estimation and measurement services powered by industry-leading Xactimate technology. From detailed roof assessments to 3D wall sketches, we deliver precision and accuracy for your construction projects.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                    Explore Services
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                    Contact Us
                  </button>
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
                  <button onClick={() => window.location.href = 'tel:+923034297361'} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
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
                  <button onClick={() => window.location.href = 'tel:+923034297361'} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
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
                  <button onClick={() => window.location.href = 'tel:+923034297361'} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
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
                  <button onClick={() => window.location.href = 'tel:+923034297361'} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </section>


        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise in Xactimate technology and commitment to accuracy ensures reliable results for all your estimation needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
                  <i className="ri-award-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Certified Professionals</h3>
                <p className="text-gray-300">
                  Our team consists of certified Xactimate professionals with years of experience in property assessment and estimation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
                  <i className="ri-time-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Turnaround</h3>
                <p className="text-gray-300">
                  Quick and efficient service delivery without compromising on accuracy or quality of our detailed assessments.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
                  <i className="ri-shield-check-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-gray-300">
                  Rigorous quality control processes ensure every estimate and measurement meets industry standards and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and receive a customized quote for our professional Xactimate services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                Request Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="font-['Pacifico'] text-2xl text-white mb-4">logo</div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Professional Xactimate estimation services providing accurate property assessments and detailed measurements for insurance claims and restoration projects.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
                    <i className="ri-facebook-line text-lg"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
                    <i className="ri-twitter-line text-lg"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-lg"></i>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Xactimate Estimate</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Roof ESX</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">3D Wall Sketch</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Aerial Measurements</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300"><i className="ri-phone-line mr-2"></i>(555) 123-4567</li>
                  <li className="text-gray-300"><i className="ri-mail-line mr-2"></i>info@estimationxactimate.com</li>
                  <li className="text-gray-300"><i className="ri-map-pin-line mr-2"></i>123 Business Ave, Suite 100</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">© 2025 Estimation Xactimate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;