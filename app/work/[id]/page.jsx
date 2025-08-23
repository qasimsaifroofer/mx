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
  { id: "Symbility-roof-sketch", title: "SymbilityRoof Sketch (XML + PDF)", href: "/work/Symbility-roof-sketch " },


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
  "xactimate-interior-estimate": {
    title: "Xactimate interior estimate",
    description:
      "Our Xactimate interior estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/s1.jpg",
  },

  "Symbility-roof-sketch": {
    title: "Symbility Roof Sketch (XML + PDF)",
    description:
      "Our Symbility Roof Sketch (XML + PDF) estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/Symbility.jpeg",
  },


  "roof-report-pdf": {
    title: "Roof Report (PDF)",
    description:
      "Our Roof Report (PDF) (XML + PDF) estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements, simplifying the process of ordering materials and preparing insurance estimates. Ideal for contractors, property managers, and insurance adjusters, our reports ensure cost-effective planning and accurate documentation. With fast turnaround times and clear, professional outputs, we help you execute siding projects with confidence. Whether for small residential upgrades or large-scale commercial siding replacements, our reports minimize errors, save time, and enhance efficiency in both planning and execution phases.",
    image: "/4 (1).jpg",
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
                  {navservices.map((service, index) => (
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
          </div>
          <a
  href="mailto:mxestimation@gmail.com?subject=Get Quote Request&body=Hello, I would like to get a quote for your services."
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
                {navservices.map((service, index) => (
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
      <button onClick={() => router.push(`/form/${id}`)} className="w-full bg-gray-700 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors">
                    Order Now
                  </button>
   
    </div>

    <footer className="bg-black-900 text-white py-16 border-t border-gray-800" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div data-aos="fade-up" data-aos-delay="200">
                <div style={{color : "orange"}} className="font-['Pacifico'] text-2xl text-white mb-4">MX Estimation</div>
                <p className="text-gray-400 mb-6">Professional Xactimate estimation services with Level 3 certification and 7+ years of experience.</p>
                <div className="flex space-x-4">
                  <Link target='_blank' href="https://www.linkedin.com/in/malik-saif-a56510249/?originalSubdomain=pk" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="300">
                    <i style={{color : "orange"}} className="ri-linkedin-fill"></i>
                  </Link>
                  
                  <Link target='_blank' href="https://www.facebook.com/malik.xactimator" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-facebook-fill"></i>
                  </Link>
                  <Link target='_blank' href="https://www.instagram.com/p/DNKYNXsMsdS/" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-white transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <i style={{color : "orange"}} className="ri-instagram-fill"></i>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="500">Xactimate Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="550">Matterport Conversion</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="600">Aerial Roof Reports</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="650">Damage Estimates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="700">Rebuild Cost Analysis</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="750">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="800">About Us</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="850">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="900">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="950">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors" data-aos="fade-up" data-aos-delay="1000">FAQ</a></li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="1050">
                <h4 style={{color : "orange"}} className="font-bold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-line"></i>
                    </div>
                    <a href="mailto:mxestimation@gmail.com" className="hover:text-white transition-colors">
                      mxestimation@gmail.com
                    </a>
                  </li>
                 
                  <li className="flex items-center" data-aos="fade-up" data-aos-delay="1200">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    24/7
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
      </>
  );
}
