"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

const PricingPage = () => {
  const router = useRouter();
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
    <>
      <head>
        <title>Pricing - MX Estimation</title>
        <meta name="description" content="Transparent fixed pricing for Xactimate estimates, roof ESX, Matterport conversions, interior estimates, and more." />
      </head>
      <link rel="canonical" href="https://mxestimation.com/pricing" />

      <Script
        id="matterport-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MX Estimation",
            "url": "https://mxestimation.com/pricing",
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
      <div className="bg-black text-white overflow-x-hidden">
        <Header />

        <main>
          {/* Pricing cards section (copied from home) */}
          <section id="pricing" className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">Our Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Comprehensive Xactimate estimation services tailored to your needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i style={{color : "orange"}} className="ri-calculator-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Xactimate Roof Estimate </h3>
                  <br/>
                  <p style={{ fontSize : '20px' , textAlign : 'center'}}>Hail, Wind , Hurricane / Storm Damage</p>
                   <br/>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Roof Estimate</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$60</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Siding Estimate</span>
                      <span style={{color : "orange" , fontSize : '20px'}}  className="font-medium">$60</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Roof + Siding</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$80</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Commercial Roof</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$120</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">XACTIMATE INTERIOR ESTIMATE  start at $100 (up to 150 items)</p>
                    </div>
                  </div>
                  <br/>
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/Roof Sample.pdf" download>Download Sample</Link>
                  
                  <br/>
                  <br/>
                  <button style={{border : "2px solid orange" , color : "orange" }} onClick={() => router.push('/form/xactimate-estimate')} className="w-full bg-black-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-orange-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="600">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i style={{color : "orange"}} className="ri-home-4-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Xactimate Roof ESX</h3>

                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Under 30 Facets</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$20</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Over 50 Facets</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$25</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Commercial Building</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Xactimate  Roof + 3D Wall Sketch</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$30</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Aerial Roof Report</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$15</span>
                    </div>
                  </div>
                  <br/>
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/7_TREE_CREST.ESX" >Download Sample</Link>
                  <br/>
                  <br/>                  
                  <button style={{border : "2px solid orange" , color : "orange" }} onClick={() => router.push('/form/xactimate-roof-esx')} className="w-full bg-black-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="700">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i style={{color : "orange"}} className="ri-ruler-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Matterport to xactimate Sketch ESX</h3>
                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>Up to 1000 SQFT</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>1000-2000 SQFT</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>2000-4000 SQFT</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>4000-6000 SQFT</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$200</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Floor plan/Hand Sketch to ESX: $30</p>
                    </div>
                  </div>
                  <br/>
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/3952_LOSROBLESDR.ESX" download>Download Sample</Link>
                  
                  <br/>
                  <br/>
                  <button style={{border : "2px solid orange" , color : "orange" }} onClick={() => router.push("/form/matterport-to-xactimate-sketch") } className="w-full bg-black-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="800">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i style={{color : "orange"}} className="ri-layout-masonry-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Xactimate Interior Estimate </h3>
                  <p style={{textAlign : "center"}}>Water Mitigation, Fire , Hurricane, Flood, Smoke, Rebuilds, Mold</p>
                  <br/>

                  <div className="text-gray-300 mb-6 space-y-3 ">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span >Up to 150 items</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>150-200 items</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$130</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>200-250 items</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>250-300 items</span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$200</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Larger projects priced accordingly</p>
                    </div>
                  </div>
                  <br/>
                  
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/Sample.pdf" download>Download Sample</Link>
                  <br/>
                  <br/>

                  <button style={{border : "2px solid orange" , color : "orange" }} onClick={() => router.push("/form/xactimate-interior-estimate")} className="w-full bg-black-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="800">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-layout-masonry-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Roof Report (PDF)
                  </h3>

                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ PDF file with Roof Sketch and Measurements breakdown
                      </span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$15</span>

                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ clean and professional work</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ One Time </span>
                    </div>
                  
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Larger projects priced accordingly</p>
                    </div>
                  </div>
                  <br/>
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/20208 cook oil Rd Mitchell NE 69357.pdf" download>Download Sample</Link>
                  
                  <br/>
                  <br/>
                  <button  style={{border : "2px solid orange" , color : "orange" }}onClick={() => router.push("/form/roof-report")}  className="w-full bg-black-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
                <div className="bg-black-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer" data-aos="fade-up" data-aos-delay="800">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                    <i className="ri-layout-masonry-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Symbility Roof Sketch (XML + PDF)

                  </h3>

                  <div className="text-gray-300 mb-6 space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ Symbility XML file + complementary PDF
                      </span>
                      <span style={{color : "orange" , fontSize : '20px'}} className="font-medium">$20</span>

                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ clean and professional work</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-1">
                      <span>✔️ One Time </span>
                    </div>
                  
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Larger projects priced accordingly</p>
                    </div>
                  </div>
                  <br/>
                  <Link style={{color : 'orange', fontSize : '20px'}} href="/10910 Observatory Way.XML" download>Download Sample</Link>
                  
                  <br/>
                  <br/>
                  <button  style={{border : "2px solid orange" , color : "orange" }} onClick={() => router.push("/form/Symbility-roof-sketch")}  className="w-full bg-black-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
