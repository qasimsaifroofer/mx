"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";

const Footer = () => {
  
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Xactimate Services in the USA: Precision Estimating with MX Estimation | Professional Xactimate Estimator</title>
        <meta name="description" content="Leading Xactimate estimating services in the USA. Professional Xactimate estimators with Level 3 certification. Fast turnaround, expert customer service, and comprehensive estimation solutions for contractors, adjusters, and property owners nationwide." />
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
    <footer className="bg-black-900 text-white py-16 border-t border-gray-800" data-aos-delay="100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div data-aos-delay="200">
            <div style={{ color: "orange" }} className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
            <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
          </div>
      
          <div data-aos-delay="1050">
            <h4 style={{ color: "orange" }} className="font-bold text-white mb-4">Contact Info</h4>
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
            <p className="text-gray-400 text-sm" data-aos-delay="1300">© 2025 MX Estimation. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
