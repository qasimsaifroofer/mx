'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Script from 'next/script';

export default function InteriorDamageEstimate() {
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
      {/* SEO metadata is handled by metadata.js */}
      {/* Social sharing tags */}
      <head>
        <title>Symbility Estimating Services | Insurance & Claims Estimating Solutions</title>
        <meta name="description" content="Professional Symbility Estimating Services for accurate insurance estimates. We provide reliable Symbility Insurance Estimating Services and Symbility Claims." />
        <link rel="canonical" href="https://mxestimation.com/symbility-estimating-services" />
        <meta property="og:title" content="Symbility Estimating Services | Insurance & Claims Estimating Solutions" />
        <meta property="og:description" content="Professional Symbility Estimating Services for accurate insurance estimates. We provide reliable Symbility Insurance Estimating Services and Symbility Claims." />
        <meta property="og:url" content="https://mxestimation.com/symbility-estimating-services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MX Estimation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Symbility Estimating Services | Insurance & Claims Estimating Solutions" />
        <meta name="twitter:description" content="Professional Symbility Estimating Services for accurate insurance estimates. We provide reliable Symbility Insurance Estimating Services and Symbility Claims." />
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
            "url": "https://mxestimation.com/symbility-estimating-services",
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

      {/* === REST OF YOUR COMPONENT (unchanged) === */}
      <header
        style={{
          background: 'linear-gradient(100deg,rgba(238, 210, 86, 0.98) 40%, black 100%)',
        }}
        className="shadow-sm sticky top-0 z-50 border-b border-gray-800"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        {/* ... rest of your JSX ... */}
      </header>

      {/* ... main, footer, etc. ... */}
    </div>
  );
}