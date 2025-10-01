'use client';

import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function XactimateGuide() {
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const services = [
    { id: 'estimator-accelerator', title: 'Estimator Accelerator', href: '/estimator-accelerator' },
    { id: 'matterpoint-to-xactimate-sketch', title: 'Matterpoint to Xactimate Sketch', href: '/matterpoint-to-xactimate-sketch' },
    { id: 'xactimate-estimation', title: 'Xactimate Estimation', href: '/xactimate-estimation' },
    { id: 'xactimate-interior-estimate', title: 'Xactimate Interior Estimate', href: '/xactimate-interior-estimate' },
    { id: 'symbility-estimating-services', title: 'Symbility Estimating Services', href: '/symbility-estimating-services' },
    { id: 'aerial-roof-measurements-pdf', title: 'Aerial Roof Measurements PDF', href: '/Aerial-Roof-Measurements-PDF' },
    { id: 'symbility-sketch-xml', title: 'Symbility Sketch XML', href: '/Symbility-Sketch-XML' },
    { id: 'Xactimate-Roof-Sketch', title: 'Xactimate Roof Sketch', href: '/Xactimate-Roof-Sketch' },
  ];

  let hoverTimeout;

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
    <div className="min-h-screen bg-black text-gray-200">
      <Head>
        <title>Xactimate Estimation Online | Freelance Xactimation Services</title>
        <meta
          name="description"
          content="Get the accuract xactimate estimationfor your project with our experienced and skillful engineers lines. get the 100% accurate estimate for your work quote now!"
        />
        <link rel="canonical" href="https://mxestimation.com/xactimate-estimation" />
      </Head>

      <Script
        id="organization-schema-1"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MX Estimation",
            "url": "https://mxestimation.com/estimator-accelerator",
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

      <Script
        id="organization-schema-2"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MX Estimation",
            "url": "https://mxestimation.com/xactimate-estimation",
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

      <header
        style={{
          background: 'linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)',
        }}
        className="shadow-sm sticky top-0 z-50 border-b border-gray-800"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-delay="200">
              <img
                style={{ width: '200px', height: '100px' }}
                src="/logo.jpeg"
                alt="MX Estimation Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                style={{ color: 'black', fontSize: '22px' }}
                href="/"
                className="text-black-900 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="ri-home-line mr-2"></i>
                Home
              </Link>
              <a
                style={{ color: 'black', fontSize: '22px' }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <i style={{ color: 'black' }} className="ri-information-line mr-3"></i>
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
                  style={{ color: 'black', fontSize: '22px' }}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                >
                  <i style={{ color: 'black' }} className="ri-service-line mr-2"></i>
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
              <a
                style={{ color: 'black', fontSize: '22px' }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <i style={{ color: 'black' }} className="ri-star-line mr-2"></i>
                Work
              </a>
              <Link
                style={{ color: 'black', fontSize: '22px' }}
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i style={{ color: 'black' }} className="ri-contacts-line mr-2"></i>
                Contact
              </Link>
              <Link
                href="/pricing"
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i className="ri-exchange-dollar-line mr-2"></i>
                Pricing
              </Link>
            </div>
            <a
              href="mailto:contact@mxestimation.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
              className="bg-white text-black px-10 py-5 rounded-[8px] hover:bg-gray-300 transition-colors whitespace-nowrap inline-block"
              data-aos="fade-left"
              data-aos-delay="600"
              target="_blank"
              style={{ fontSize: '20px' }}
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
          <div className={`md:hidden mt-4 ${mobileMenuOpen ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="700">
            <div className="flex flex-col space-y-4">
              <a
                style={{ color: 'black' }}
                href="/"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="750"
              >
                <i className="ri-home-line mr-3"></i>
                Home
              </a>
              <a
                style={{ color: 'black' }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <i style={{ color: 'black' }} className="ri-information-line mr-3"></i>
                About
              </a>
              <div className="flex flex-col">
                <button
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  data-aos="fade-up"
                  data-aos-delay="850"
                  style={{ color: 'black' }}
                >
                  <i style={{ color: 'black' }} className="ri-service-line mr-3"></i>
                  Services
                  <i style={{ color: 'black' }} className="ri-arrow-down-s-line ml-1"></i>
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
                      style={{ color: 'black' }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                style={{ color: 'black' }}
                href="/work"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <i className="ri-star-line mr-3"></i>
                Our Work
              </a>
              <a
                style={{ color: 'black' }}
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                data-aos="fade-up"
                data-aos-delay="1050"
              >
                <i className="ri-contacts-line mr-3"></i>
                Contact
              </a>
              <Link
                href="/pricing"
                className="text-black hover:text-white transition-colors flex items-center text-base lg:text-lg xl:text-xl"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <i className="ri-exchange-dollar-line mr-2"></i>
                Pricing
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-center leading-tight">
          Comprehensive Guide to Xactimate Estimation for Contractors in the USA
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
          In the competitive world of construction and restoration, accurate cost estimation is crucial for project success. Xactimate, a leading software developed by Xactware, has become the industry standard for property insurance claims, restoration, and construction estimates across the United States. This guide provides an in-depth look at Xactimate estimation, highlighting the best online options, its application for contractors, roofing estimates, and cost considerations for remodel projects.
        </p>
        <center>
          <Link href="/form/xactimate-estimate">
            <button
              data-aos="fade-up"
              className="w-80 bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Order Now
            </button>
          </Link>
        </center>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Why I Choose MX Estimation?
          </h2>
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed">
              MX Estimation has Xactimate skills which is a powerful, user-friendly software designed to help contractors, adjusters, and insurance professionals create precise property estimates. When it combines a comprehensive database of pricing information with intuitive tools to streamline the estimation process. Whether you're working on a small repair or a large-scale remodel, Xactimate ensures your estimates are accurate, consistent, and compliant with industry standards.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Best Xactimate Online Platforms for Contractors
          </h2>
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg">
              You are landed in the right place because for contractors seeking flexibility and efficiency, the best online Xactimate platforms offer cloud-based access, real-time updates, and collaborative features. Some top options include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Xactimate Online:</strong> The official web-based version of Xactimate allows users to access their estimates from any device with internet connectivity.
              </li>
              <li>
                <strong>By MX Xactimate Mobile App:</strong> Designed for on-the-go estimations, the mobile app enables contractors to create and modify estimates directly from the field.
              </li>
              <li>
                <strong>Third-Party Integrations:</strong> Several platforms integrate with Xactimate, providing additional project management and communication tools tailored for contractors.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Xactimate for Contractors: Streamlining Your Workflow
          </h2>
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg">
              Contractors across the USA rely on Xactimate to improve accuracy and efficiency in their estimating process. Here's how Xactimate benefits contractors:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Accurate Cost Data:</strong> The software's extensive database includes up-to-date pricing for materials, labor, and equipment.
              </li>
              <li>
                <strong>Time Savings:</strong> Automated features and pre-built templates reduce manual entry.
              </li>
              <li>
                <strong>Insurance Compatibility:</strong> Widely accepted by insurance companies, simplifying claim submissions.
              </li>
              <li>
                <strong>Detailed Reporting:</strong> Provides comprehensive reports that support transparency and client communication.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Best Xactimate Roofing Estimates
          </h2>
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg">
              Roofing projects often require specialized estimation due to the complexity of materials and labor involved. Xactimate offers dedicated tools and templates for roofing estimates, ensuring accuracy in these specialized projects.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Roofing Materials and Labor:</strong> Includes detailed pricing for shingles, metal roofing, tiles, and more.
              </li>
              <li>
                <strong>Damage Assessment:</strong> Assess storm, hail, or fire damage accurately.
              </li>
              <li>
                <strong>Permits and Additional Costs:</strong> Include fees, debris removal, and other ancillary costs.
              </li>
              <li>
                <strong>Visual Aids:</strong> Sketch tools help contractors create detailed roof diagrams.
              </li>
            </ul>
          </div>
        </section>
        <center>
          <Link href="/form/xactimate-estimate">
            <button
              data-aos="fade-up"
              className="w-80 bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Order Now
            </button>
          </Link>
        </center>
        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Xactremodel Cost: Estimating Remodel Projects Accurately
          </h2>
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg">
              Remodel projects can vary significantly in scope and complexity. Xactimate provides contractors with the tools needed to produce reliable remodel estimates, covering everything from minor upgrades to extensive renovations.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Material and Labor Costs:</strong> Database ensures estimates reflect local market rates.
              </li>
              <li>
                <strong>Scope of Work:</strong> Allows detailed breakdowns of tasks, materials, and labor.
              </li>
              <li>
                <strong>Change Management:</strong> Contractors can update estimates easily during progress.
              </li>
              <li>
                <strong>Cost Analysis:</strong> Compare different options and select cost-effective solutions.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-black-900 text-white py-16 border-t border-gray-800" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div data-aos-delay="200">
              <div style={{ color: 'orange' }} className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
              <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
            </div>
            <div>
              <h4 style={{ color: 'orange' }} className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/work/xactimate-estimate" className="hover:text-white transition-colors" data-aos-delay="500">Xactimate Roof Estimate</Link></li>
                <li><Link href="/work/matterport-to-xactimate-sketch" className="hover:text-white transition-colors" data-aos-delay="550">Matterport Conversion</Link></li>
                <li><Link href="/work/xactimate-interior-estimate" className="hover:text-white transition-colors" data-aos-delay="600">Roof Reports PDF</Link></li>
                <li><Link href="/work/Symbility-roof-sketch" className="hover:text-white transition-colors" data-aos-delay="700">Symbility roof sketch</Link></li>
              </ul>
            </div>
            <div data-aos-delay="1050">
              <h4 style={{ color: 'orange' }} className="font-bold text-white mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center" data-aos-delay="1100">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-mail-line"></i>
                  </div>
                  <a href="mailto:contact@mxestimation.com" className="hover:text-white transition-colors">
                    contact@mxestimation.com
                  </a>
                </li>
                <li className="flex items-center" data-aos-delay="1200">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-time-line"></i>
                  </div>
                  24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8" data-aos-delay="1250">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm" data-aos-delay="1300">© 2024 MX Estimation. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos-delay="1350">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos-delay="1400">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-aos-delay="1450">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}