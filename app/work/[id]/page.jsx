// app/work/[id]/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams ,useRouter   } from "next/navigation";
import { useEffect, useRef, useState } from "react";


const navservices =  [
  { id: "xactimate-estimate", title: "Xactimate Estimate", href: "/work/xactimate-estimate" },
  { id: "xactimate-roof-esx", title: "Xactimate Roof ESX", href: "/work/xactimate-roof-esx" },
  { id: "matterport-to-xactimate-sketch", title: "Matterport to Xactimate Sketch", href: "/work/matterport-to-xactimate-sketch" },
  { id: "xactimate-interior-estimate", title: "Xactimate Interior Estimate", href: "/work/xactimate-interior-estimate" },
  { id: "roof-report-pdf", title: "Roof Report (PDF)", href: "/work/roof-report-pdf" },
  { id: "stability-roof-sketch", title: "Stability Roof Sketch (XML + PDF)", href: "/work/stability-roof-sketch" },


];

const services = {
  "xactimate-estimate": {
    title: "Xactimate Estimate",
    description:
      "Our Xactimate Estimate service delivers highly accurate, industry-standard cost estimates for restoration, repair, and insurance claims. Leveraging the latest Xactimate software, our team meticulously prepares detailed reports that cover every aspect of your project, from material costs to labor expenses. Whether you're a contractor, insurance adjuster, or property owner, our estimates streamline the claims process, reduce disputes, and ensure compliance with insurance requirements. Trust us to provide transparent, reliable, and timely estimates tailored to your specific needs. With years of experience, we help you maximize efficiency, minimize claim delays, and maintain professional credibility while ensuring fair settlements for all parties involved.",
    image: "/s1.jpg",
  },
  "xactimate-roof-esx": {
    title: "Xactimate Roof ESX",
    description:
      "Our Xactimate Roof ESX service provides precise roof sketches and ESX files designed for insurance claims and construction projects. Using advanced Xactimate tools, we create detailed diagrams that include pitch, area, and line measurements, ensuring accuracy for roofing contractors and adjusters. These files integrate seamlessly with insurance workflows, enabling faster approvals and project starts. Our service is ideal for roofing professionals seeking reliable documentation to support cost estimation and material planning, delivered with speed and precision. From residential roofing jobs to complex commercial installations, we guarantee consistency, accuracy, and compliance with industry standards to help you win more projects and close claims faster.",
    image: "/s2.jpeg",
  },

  "matterport-to-xactimate-sketch": {
    title: "Matterport to Xactimate Sketch",
    description:
      "Bridge the gap between advanced scanning technology and industry-standard estimation with our Matterport to Xactimate Sketch service. We convert detailed Matterport 3D scans into accurate Xactimate sketches, providing a seamless workflow for insurance claims, restoration, and construction projects. Our service ensures that every detail from the scan is translated into precise measurements and diagrams, saving time and enhancing accuracy for contractors and adjusters. Experience a streamlined process with our expert conversion services. By integrating immersive 3D data into Xactimate, we make claim settlements smoother, provide unmatched detail for property documentation, and help professionals deliver better results to clients with confidence and efficiency.",
    image: "/5.jpg",
  },
  "Xactimate-interior-estimate": {
    title: "xactimate interior estimate",
    description:
      "Our xactimate interior estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/s1.jpg",
  },

  "stability-roof-sketch": {
    title: "Stability Roof Sketch (XML + PDF)",
    description:
      "Our Stability Roof Sketch (XML + PDF) estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/s1.jpg",
  },


  "Roof-report-pdf": {
    title: "Roof Report (PDF)",
    description:
      "Our Roof Report (PDF) (XML + PDF) estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/s1.jpg",
  },


};
export default function ServiceDetail() {

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);  
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const dropdownRef = useRef(null);
let hoverTimeout;


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


  const router = useRouter();

  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-2">Please check the URL and try again.</p>
      </div>
    );
  }

  return (
    <>
       {/* Header */}
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
                  {navservices.map((service, index) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      data-aos="fade-up"
                      data-aos-delay={450 + index * 50}
                      onClick={() => setDesktopDropdownOpen(false)}
                      style={{color : "black"}}

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
                {navservices.map((service, index) => (
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

    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <br />
      <Image src={service.image}   
      width={800}  
      height={500}  />
      <br />
      <p className="text-lg leading-relaxed">{service.description}</p>
      <br />
      <button onClick={() => window.location.href = 'tel:+923034297361'} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
   
    </div>
      </>
  );
}
