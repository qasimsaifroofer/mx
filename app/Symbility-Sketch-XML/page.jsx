"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

export default function SymbilitySketchGuide() {
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service');
  const [termsChecked, setTermsChecked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
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

  return (
    <>
    <Head>
      <title>Symbility Sketch XML Guide</title>
      <meta name="description" content="Explore our comprehensive guide to Symbility Sketch XML, detailing conversion from Xactimate, interior sketching, symbol usage, and best practices for insurance and restoration professionals." />
      <link rel="canonical" href="https://mxestimation.com/Symbility-Sketch-XML" />
    </Head>
    <Script
      id="matterport-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MX Estimation",
          "url": "https://mxestimation.com/Symbility-Sketch-XML",
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
                            <i style={{color : "black"}} className="ri-information-line mr-3"></i>

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
    <div className="min-h-screen bg-black text-orange-300">

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 space-y-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-center leading-tight">
          Understanding Symbility Sketch XML: A Comprehensive Guide
        </h1>
        <p className="text-xl text-orange-200 text-center max-w-4xl mx-auto leading-relaxed">
          In the ever-evolving landscape of property insurance and restoration, technology plays a pivotal role in enhancing efficiency and accuracy. One of the most significant tools in this domain is Symbility Sketch, a software solution that streamlines the process of creating detailed building sketches for claims processing and assessments. This guide aims to delve into the intricacies of Symbility Sketch XML and provide valuable insights and tips for maximizing its potential in your workflows.
        </p>


<center>
    <Image src="/Symbility Sketch XML.jpeg" alt="Symbility Sketch XML" width={800} height={600} />
                <br />
                <Link href="/form/Symbility-Sketch-XML">
    <button      data-aos="fade-up"
className="w-80 bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
            Order Now
          </button>
    
    </Link>
</center>

        {/* Sections */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6M3 3h18v18H3V3z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              What is Symbility Sketch XML?
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Symbility Sketch XML is a file format used to store and exchange sketches created within the Symbility platform. This powerful tool allows users to create accurate and detailed floor plans, structural sketches, and other critical visual documentation required in the insurance claims process. The XML format ensures that all the data related to the sketches can be easily shared and integrated with various systems, contributing to a more seamless workflow. The benefits of using Symbility Sketch include high-resolution output, compatibility with various platforms, and the ability to easily update and modify sketches. One of the common requirements among users is converting Xactimate sketches to Symbility formats. This is often needed when companies transition from Xactimate to Symbility for a more robust sketching experience.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Converting Xactimate Sketch to Symbility
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg text-orange-200">
              The transition from Xactimate to Symbility might seem daunting, particularly when it comes to importing existing sketches. However, this process can be simplified with effective strategies. There are various methods available for converting Xactimate sketches into Symbility format, and utilizing the XML format is one way to facilitate this transition. By following a few straightforward steps, you can successfully import your sketches into Symbility and continue your workflows without interruptions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
                </svg>
                <span>
                  <strong>Export the sketch from Xactimate:</strong> Start by exporting your sketch from Xactimate. Make sure to save it in a compatible file format, like an XML file, which can store all necessary data regarding your sketch.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                <span>
                  <strong>Import into Symbility:</strong> Open the Symbility platform and navigate to the import feature. Choose the option to import from Xactimate XML files, and then upload your exported sketch. Symbility will process the file and convert it, maintaining the structural integrity and details of your original sketch.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>Review and refine:</strong> Once the import is completed, it’s essential to review the sketch to ensure all elements have been appropriately integrated. You might need to make minor adjustments or refinements, especially for intricate details or symbols that may not have transferred perfectly.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8m4-8v8m4-8v8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Copying Symbols in Sketch
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Symbols play an essential role in any sketch, serving as visual indicators for various elements within a structure, such as doors, windows, and fixtures. In Symbility, copying symbols within a sketch is a straightforward process, making it easy for users to enhance their visual documentation without having to redraw each component. To copy symbols, simply select the desired symbol, right-click to access the copy function, and then paste it in the required location on the sketch. This feature proves invaluable, especially when working on interior sketches, where precision is key.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Crafting Interior Sketches with Symbility
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Interior sketches are crucial in the insurance industry, providing detailed representations of the insides of a structure. The Symbility platform allows users to create comprehensive interior sketches that can visually convey damages, renovations, and layouts to all stakeholders involved. With tools specifically designed for interior sketches, users can easily draw walls, add doors, and place furniture, fostering a better understanding of the space. The ability to add annotations and notes further amplifies the effectiveness of these interior sketches.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Symbility Interior Sketch App
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              For users who prefer working on mobile devices, the Symbility Interior Sketch app offers an incredible solution. Available for both iOS and Android, this app allows users to create and modify interior sketches on the go. Whether you’re conducting an on-site assessment or simply need to make updates, the mobile app keeps your workflow fluid and efficient.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Interior Sketch Symbility App for iPhone
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Apple users especially benefit from the dedicated interior sketch Symbility app available for iPhone. The app retains the full functionality of the desktop version while optimizing the user experience for mobile. This portability is crucial for professionals who are frequently in the field, allowing them to capture details and updates instantly.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Utilizing Sketch Gang Symbols
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Furthermore, the inclusion of diverse symbols, often referred to as “sketch gang symbols,” enhances the clarity and comprehensiveness of your sketches. These symbols can represent different aspects of a property, including electrical fixtures, plumbing, or other facilities. Effectively utilizing these symbols not only improves the aesthetics of your sketches but also aids in conveying important information quickly.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Understanding Sketches of Fire Symbols
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              In insurance claims, it’s particularly essential to include specific symbols that represent fire damage and safety features. Sketches of fire symbols can highlight crucial elements related to fire safety protocols, such as smoke detectors, sprinklers, and emergency exits. Ensuring these symbols are prominent in your sketches provides critical information to claim adjusters, paving the way for smoother processing of insurance claims.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16l8-8 8 8V4H4z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Symbility Rotating Sketch Other Than 45 Degrees
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              One of the most useful features of Symbility Sketch is the ability to rotate your drawings with precision. While many users are familiar with rotating sketches in standard increments of 45 degrees, Symbility allows for more granular control. Whether you require your sketches to be oriented at a specific angle or need to achieve a more visually appealing layout, this feature ensures you have the freedom to design your sketches to fit your needs. To rotate the sketch, select the item you wish to rotate, choose the rotating tool, and make fine adjustments as desired. Whether for artistic purposes or creating a clearer presentation, being able to manipulate your sketches freely can enhance your overall productivity.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Using Material Symbols in Sketch
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed text-orange-200">
              Lastly, incorporating material symbols into your sketches can greatly enhance the detail and clarity of your visual documentation. These symbols categorize different materials used in construction, which can be crucial for insurance claims, evaluations, and restoration projects. By employing material symbols, you provide context to the items in your sketches. For example, using specific symbols for roofing materials, siding, and flooring can make it easier for claims adjusters to assess damages and determine the best course of action.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Best Practices for Using Symbility Sketch
            </h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md space-y-4">
            <p className="text-lg text-orange-200">To make the most of your experience with Symbility Sketch and its XML functionalities, consider the following best practices:</p>
            <ul className="list-disc pl-6 space-y-2 text-orange-200">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span><strong>Familiarize Yourself with the Interface:</strong> Spend time exploring the tools and features available within Symbility Sketch to enhance your expertise and efficiency.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10h6m-6 0H3m12 0h6m-6-10h6M9 7H3" />
                </svg>
                <span><strong>Utilize Templates:</strong> Using pre-designed templates can save significant time and effort, particularly for common layouts and features.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 01-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span><strong>Stay Organized:</strong> Regularly archive and maintain your sketches, categorizing them based on projects or clients to streamline your access to historical data.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 19h6" />
                </svg>
                <span><strong>Regularly Update Skills:</strong> Make it a point to stay informed about updates to the software and new features, ensuring that you leverage the platform’s full potential.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2" />
                </svg>
                <span><strong>Seek Feedback:</strong> Engage colleagues and clients for feedback on your sketches and utilize their insights to improve your work.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
              <Footer/>
    </div>
    </>
  );
}
