"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const Home = () => {
  const router = useRouter();

  // ── UI state ─────────────────────────────────────────────────────────────
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a service");
  const [termsChecked, setTermsChecked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let hoverTimeout: NodeJS.Timeout;

  // ── Data ────────────────────────────────────────────────────────────────
  const clients = [
    "Lawyers",
    "Siding Contractors",
    "Emergency Services Contractors",
    "Specialty Contractors",
    "Property Management Companies",
    "General Contractors",
    "Restoration Contractors",
    "Remodeling Contractors",
    "Water Extraction Contractors",
    "Public Adjusters",
    "Roofing Contractors",
    "Drying Contractors",
    "Cleaning Companies",
    "Painting Contractors",
    "Building Owners",
    "Homeowners",
    "Property Owners",
  ];

  const otherservices = [
    "Water Damage",
    "Hail",
    "Fire Damage",
    "Hurricane",
    "Flood",
    "Smoke Cleaning",
    "Sewer and Drain Backup",
    "Freeze",
    "Earthquake",
    "Car Impact",
    "Sewage",
    "Mold Damage",
    "Fallen Trees",
    "Wind Damage",
    "Collapse",
    "Explosions",
    "Theft Damage",
    "Tornadoes",
    "Weight of Ice and Snow",
    "Vandalism",
    "Lightning",
  ];

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

  // ── Close dropdown when clicking outside ─────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Desktop hover handling ───────────────────────────────────────────────
  const handleDesktopHover = (isHovering: boolean) => {
    clearTimeout(hoverTimeout);
    if (isHovering) {
      setDesktopDropdownOpen(true);
    } else {
      hoverTimeout = setTimeout(() => setDesktopDropdownOpen(false), 300);
    }
  };

  // ── Load external assets & init AOS ─────────────────────────────────────
  useEffect(() => {
    // Remixicon fallback
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css";
    document.head.appendChild(link);

    // AOS init (only if the script is loaded)
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const id = a.getAttribute("href")?.slice(1);
        const el = id ? document.getElementById(id) : null;
        el?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  // ── Service selector ────────────────────────────────────────────────────
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setServiceDropdownOpen(false);
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── SEO & Meta ── */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Xactimate Services in the USA: Precision Estimating with MX Estimation | Professional Xactimate Estimator</title>
        <meta
          name="description"
          content="Leading Xactimate estimating services in the USA. Professional Xactimate estimators with Level 3 certification. Fast turnaround, expert customer service, and comprehensive estimation solutions for contractors, adjusters, and property owners nationwide."
        />
        <link rel="canonical" href="https://mxestimation.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" crossOrigin="anonymous" />
        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          .animate { opacity: 0; }
          .animate.fade-up   { animation: fadeInUp   0.8s ease-out forwards; }
          .animate.fade-left { animation: fadeInLeft 0.8s ease-out forwards; }
          .animate.fade-right{ animation: fadeInRight 0.8s ease-out forwards; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}</style>
      </Head>

      {/* ── JSON-LD Schema ── */}
      <Script
        id="matterport-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MX Estimation",
            url: "https://mxestimation.com",
            logo: "https://mxestimation.com/logo.jpeg",
            alternateName: "Xactimate Estimation",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+923034297361",
                contactType: "customer service",
                email: "qasimroofer@gmail.com",
                areaServed: "PK",
                availableLanguage: "en",
              },
            ],
          }),
        }}
      />

      {/* ── Page ── */}
      <div className="bg-black text-white overflow-x-hidden">
        <Header />

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative min-h-screen flex items-center"
          style={{ backgroundImage: "url('/roof.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="relative w-full px-6 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="ri-shield-check-line mr-2" />
                  Level 3 Certified Xactimate Estimators
                </div>

                <h1
                  style={{ color: "orange" }}
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-snug break-words"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Xactimate Services in the USA: Precision Estimating with MX Estimation
                </h1>

                <p
                  className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  In the fast-paced world of property restoration and insurance claims, accuracy and speed matter. Our expert Xactimate estimating services provide reliable, professional solutions that help contractors, adjusters, and homeowners navigate complex repairs with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8" data-aos="fade-up" data-aos-delay="600">
                  <button className="bg-orange-500 text-black px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-[8px] text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-300 transition-colors">
                    Get Your Estimate
                  </button>
                  <Link
                    href="/work"
                    className="border-2 border-gray-600 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-[8px] text-sm sm:text-base md:text-lg font-semibold hover:border-gray-300 hover:text-gray-300 transition-colors"
                  >
                    View Work
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400" data-aos="fade-up" data-aos-delay="700">
                  <div className="flex items-center">
                    <i className="ri-time-line text-white mr-2" />
                    24-48 Hour Turnaround
                  </div>
                  <div className="flex items-center">
                    <i className="ri-price-tag-3-line text-white mr-2" />
                    Fixed Pricing
                  </div>
                  <div className="flex items-center">
                    <i className="ri-shield-check-line text-white mr-2" />
                    No Hidden Fees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE XACTIMATE ── */}
        <section className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="300">
                Why Choose Xactimate Estimating Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                When it comes to damage assessment and cost projection, Xactimate estimating services offer unmatched precision. Whether you're a contractor handling storm damage or an insurance adjuster reviewing claims, having a Xactimate professional on your side ensures every detail is accounted for.
              </p>
            </div>

            {/* Benefits + What makes a great estimator */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Benefits */}
              <div className="space-y-8" data-aos="fade-right" data-aos-delay="500">
                <h3 className="text-3xl font-bold text-orange-400 mb-6">Benefits of Using a Xactimate Estimating Service</h3>
                {[
                  { icon: "ri-check-line", title: "Detailed and Accurate Estimates", desc: "Tailored to industry standards with comprehensive line-item breakdowns that meet insurance requirements and regulatory compliance." },
                  { icon: "ri-time-line", title: "Fast Turnaround Times", desc: "Keep projects moving with our 24-48 hour delivery guarantee, ensuring you never miss critical deadlines." },
                  { icon: "ri-user-star-line", title: "Expert Xactimate Estimators", desc: "Years of field experience combined with Level 3 certification ensures professional-grade estimates every time." },
                  { icon: "ri-customer-service-2-line", title: "Seamless Communication", desc: "Backed by responsive Xactimate customer service that keeps you informed throughout the entire estimation process." },
                ].map((b, i) => (
                  <div key={i} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={600 + i * 100}>
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full flex-shrink-0 mt-1">
                      <i className={`${b.icon} text-white text-lg`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{b.title}</h4>
                      <p className="text-gray-300 text-lg">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What makes a great estimator */}
              <div className="space-y-6" data-aos="fade-left" data-aos-delay="500">
                <div className="bg-gray-900 rounded-2xl p-8 border border-orange-400" data-aos="fade-up" data-aos-delay="600">
                  <h4 className="text-2xl font-bold text-orange-400 mb-4">What Makes a Great Xactimate Estimator?</h4>
                  <p className="text-gray-300 text-lg mb-6">
                    A skilled Xactimate estimator doesn't just crunch numbers—they understand the nuances of property damage, regional pricing, and insurance protocols. With{" "}
                    <a style={{ color: "orange" }} href="https://mxestimation.com/xactimate-estimation">
                      our best Xactimate estimation
                    </a>{" "}
                    in the USA, top estimation companies rely on certified professionals who combine technical expertise with real-world insight.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Deep knowledge of Xactimate estimating software",
                      "Ability to produce comprehensive Xactimate estimates",
                      "Clear communication with clients and insurance carriers",
                      "Commitment to accuracy and transparency",
                    ].map((t, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-6 h-6 flex items-center justify-center bg-orange-500 rounded-full">
                          <i className="ri-check-line text-white text-sm" />
                        </div>
                        <span className="text-white font-medium">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* USA-Based Solutions */}
            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl p-12" data-aos="fade-up" data-aos-delay="700">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Estimation Companies in the USA: Setting the Standard</h3>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Across the United States, estimation companies are raising the bar by offering specialized Xactimate estimating services. From Florida hurricanes to Midwest hailstorms, these firms provide localized expertise and scalable solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-orange-400">USA-Based Xactimate Estimate Solutions</h4>
                  <p className="text-gray-300 text-lg">
                    Whether you're in Texas, California, or New York, you'll find Xactimate estimating professionals who understand your region's unique challenges. These experts deliver:
                  </p>
                  {[
                    { icon: "ri-home-4-line", text: "Residential and commercial Xactimate estimates" },
                    { icon: "ri-file-shield-2-line", text: "Insurance claim support and documentation" },
                    { icon: "ri-search-eye-line", text: "On-site inspections and virtual assessments" },
                    { icon: "ri-heart-line", text: "Personalized service that feels human—not automated" },
                  ].map((i, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-orange-500 rounded-full flex-shrink-0 mt-1">
                        <i className={`${i.icon} text-white text-sm`} />
                      </div>
                      <span className="text-white">{i.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-black/50 rounded-2xl p-8 border border-orange-400">
                  <h4 className="text-2xl font-bold text-orange-400 mb-4">Xactimate Customer Service That Cares</h4>
                  <p className="text-gray-300 text-lg mb-6">
                    Behind every great estimate is a team that listens. Leading Xactimate estimation companies in the USA prioritize customer support, ensuring you're never left in the dark.
                  </p>
                  <p className="text-white font-medium">
                    From initial consultation to final report, our Xactimate customer service is built around your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT MX ESTIMATION ── */}
        <section
          id="about"
          className="py-20"
          style={{
            background: "linear-gradient(100deg, black 40%, #facc15 100%)",
            animation: "gradientAnimation 8s ease infinite",
            backgroundSize: "200% 200%",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <style jsx>{`
            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">
                About MX Estimation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                Led by industry experts with a proven track record in Xactimate estimation and insurance claim support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Team */}
              <div className="space-y-8" data-aos="fade-right" data-aos-delay="500">
                {[
                  {
                    img: "/saif.jpeg",
                    name: "Malik Saif",
                    role: "Lead Estimator & Founder",
                    cert: "Level 3 Certified",
                    exp: "7+ Years Experience",
                  },
                  {
                    img: "/hassan.jpeg",
                    name: "Hasnain Sajjad",
                    role: "CEO & Co-Founder",
                    cert: "Leadership",
                    exp: "Innovation",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    style={{ border: "1px solid orange" }}
                    className="bg-black p-8 rounded-2xl shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={600 + i * 100}
                  >
                    <div className="flex items-start space-x-4">
                      <Image
                        src={p.img}
                        alt={p.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        style={{ border: "3px solid orange" }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                        <p style={{ color: "orange" }} className="font-semibold mb-2">
                          {p.role}
                        </p>
                        <p className="text-gray-400 mb-3">Xactimate Level 3 Certified with over 7 years of hands-on experience...</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span style={{ color: "orange" }} className="flex items-center">
                            <i className="ri-award-line mr-1" />
                            {p.cert}
                          </span>
                          <span style={{ color: "orange" }} className="flex items-center">
                            <i className={i === 0 ? "ri-time-line" : "ri-rocket-line"} mr-1 />
                            {p.exp}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose */}
              <div className="space-y-6" data-aos="fade-left" data-aos-delay="500">
                <h3 className="text-2xl font-bold text-white" data-aos="fade-up" data-aos-delay="600">
                  Why Choose Our Expertise?
                </h3>
                {[
                  { title: "Advanced Certification", desc: "Xactimate Level 3 certification ensures the highest standard of accuracy and professionalism in every estimate." },
                  { title: "Proven Track Record", desc: "Over 7 years of successful project completion with insurance companies, contractors, and property owners." },
                  { title: "Technology Integration", desc: "Seamless Matterport to Xactimate conversion and advanced aerial roof analysis for comprehensive estimates." },
                  { title: "Client-Focused Approach", desc: "Transparent communication, fixed pricing, and rapid turnaround times designed around your business needs." },
                ].map((c, i) => (
                  <div key={i} className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay={700 + i * 100}>
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{c.title}</h4>
                      <p className="text-gray-400">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING / SERVICES ── */}
        <section id="pricing" className="py-20 bg-black" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="300">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                Comprehensive Xactimate estimation services tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 – Xactimate Roof Estimate */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i style={{ color: "orange" }} className="ri-calculator-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Xactimate Roof Estimate</h3>
                <p style={{ fontSize: "20px", textAlign: "center" }}>Hail, Wind, Hurricane / Storm Damage</p>
                <div className="text-gray-300 mb-6 space-y-3">
                  {[
                    { label: "Roof Estimate", price: "$60" },
                    { label: "Siding Estimate", price: "$60" },
                    { label: "Roof + Siding", price: "$80" },
                    { label: "Commercial Roof", price: "$120" },
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                      <span>{p.label}</span>
                      <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                        {p.price}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-400 pt-2">XACTIMATE INTERIOR ESTIMATE start at $100 (up to 150 items)</p>
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/Roof Sample.pdf" download>
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/xactimate-estimate")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>

              {/* Card 2 – Xactimate Roof ESX */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-orange-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i style={{ color: "orange" }} className="ri-home-4-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Xactimate Roof ESX</h3>
                <div className="text-gray-300 mb-6 space-y-3">
                  {[
                    { label: "Under 30 Facets", price: "$20" },
                    { label: "Over 50 Facets", price: "$25" },
                    { label: "Commercial Building", price: "$50" },
                    { label: "Xactimate Roof + 3D Wall Sketch", price: "$30" },
                    { label: "Aerial Roof Report", price: "$15" },
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                      <span>{p.label}</span>
                      <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/7_TREE_CREST.ESX">
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/xactimate-roof-esx")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>

              {/* Card 3 – Matterport to Xactimate Sketch */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i style={{ color: "orange" }} className="ri-ruler-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Matterport to Xactimate Sketch ESX</h3>
                <div className="text-gray-300 mb-6 space-y-3">
                  {[
                    { label: "Up to 1000 SQFT", price: "$50" },
                    { label: "1000-2000 SQFT", price: "$100" },
                    { label: "2000-4000 SQFT", price: "$150" },
                    { label: "4000-6000 SQFT", price: "$200" },
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                      <span>{p.label}</span>
                      <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                        {p.price}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-400 pt-2">Floor plan/Hand Sketch to ESX: $30</p>
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/3952_LOSROBLESDR.ESX" download>
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/matterport-to-xactimate-sketch")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>

              {/* Card 4 – Xactimate Interior Estimate */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i style={{ color: "orange" }} className="ri-layout-masonry-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Xactimate Interior Estimate</h3>
                <p style={{ textAlign: "center" }}>Water Mitigation, Fire, Hurricane, Flood, Smoke, Rebuilds, Mold</p>
                <div className="text-gray-300 mb-6 space-y-3">
                  {[
                    { label: "Up to 150 items", price: "$100" },
                    { label: "150-200 items", price: "$130" },
                    { label: "200-250 items", price: "$150" },
                    { label: "250-300 items", price: "$200" },
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                      <span>{p.label}</span>
                      <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                        {p.price}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-400 pt-2">Larger projects priced accordingly</p>
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/Sample.pdf" download>
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/xactimate-interior-estimate")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>

              {/* Card 5 – Roof Report (PDF) */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i className="ri-file-pdf-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Roof Report (PDF)</h3>
                <div className="text-gray-300 mb-6 space-y-3">
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>PDF file with Roof Sketch and Measurements breakdown</span>
                    <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                      $15
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>Clean and professional work</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>One Time</span>
                  </div>
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/20208 cook oil Rd Mitchell NE 69357.pdf" download>
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/roof-report")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>

              {/* Card 6 – Symbility Roof Sketch (XML + PDF) */}
              <div
                className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-yellow-900 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors">
                  <i className="ri-file-code-line text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Symbility Roof Sketch (XML + PDF)</h3>
                <div className="text-gray-300 mb-6 space-y-3">
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>Symbility XML file + complementary PDF</span>
                    <span style={{ color: "orange", fontSize: "20px" }} className="font-medium">
                      $20
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>Clean and professional work</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-1">
                    <span>One Time</span>
                  </div>
                </div>
                <Link style={{ color: "orange", fontSize: "20px" }} href="/10910 Observatory Way.XML" download>
                  Download Sample
                </Link>
                <br />
                <br />
                <button
                  style={{ border: "2px solid orange", color: "orange" }}
                  onClick={() => router.push("/form/Symbility-roof-sketch")}
                  className="w-full bg-gray-900 text-white py-3 rounded-[8px] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE SHOWCASE (Xactimate Roof Sketch, Matterport, Estimate) ── */}
        <hr className="border-gray-800" />
        <section data-aos="fade-up" className="bg-gray-900 py-16" id="xactimate">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-4">Xactimate Roof Sketch ESX</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                Xactimate Roof Sketch ESX gives you the ability to create professional and accurate roof designs. With this tool, contractors, estimators, and insurance adjusters can easily create complex roof layouts.
              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                This software provides precise measurements on the{" "}
                <a href="https://mxestimation.com/xactimate-Roof-sketch" style={{ color: "orange" }}>
                  complicated roof in sketch
                </a>{" "}
                and their automated calculations that save time and minimize errors, making it a must-have solution for roofing projects.
              </p>
            </div>
            <Image
              src="/xactimate roof sketch ESX.jpeg"
              alt="Xactimate Roof Sketch ESX"
              width={500}
              height={500}
              className="w-full rounded-2xl"
              style={{ boxShadow: "5px 10px 30px yellow" }}
            />
          </div>
        </section>

        <hr className="border-gray-800" />
        <section data-aos="fade-up" className="bg-gray-900 py-16" id="xactimate">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/Matterport to xactimate ESX.jpeg"
              alt="Matterport to Xactimate ESX"
              width={600}
              height={600}
              className="w-full rounded-2xl order-2 md:order-1"
              style={{ boxShadow: "5px 10px 30px yellow" }}
            />
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-yellow-500 mb-4">Matterport to Xactimate ESX</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                Converting Matterport scans into Xactimate ESX files helps contractors, estimators, and insurance adjusters save valuable time while ensuring accuracy. With this process{" "}
                <a style={{ color: "orange" }} href="https://mxestimation.com/matterpoint-to-xactimate-sketch">
                  matterport to xactimate sketch
                </a>{" "}
                that you can transform 3D scans into detailed, ready-to-use roof or property sketches compatible with Xactimate.
              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                This service eliminates the need for manual measurements by providing precise dimensions and automated calculations directly from Matterport data. It speeds up project estimates, reduces errors, and ensures that your reports are professional and reliable.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />
        <section data-aos="fade-up" className="bg-gray-900 py-16" id="xactimate">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-4">Xactimate Estimate</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                Our Xactimate Roof Estimate services provide accurate and reliable cost assessments for insurance claims, property damage, and repair projects. With years of experience, we ensure that every estimate is prepared with precision, helping contractors, adjusters, and property owners make informed decisions.
              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                By using Xactimate, we deliver detailed line-item estimates that follow industry standards and insurance guidelines. This not only speeds up the claims process but also reduces the chances of disputes.
              </p>
            </div>
            <Image
              src="/s1.jpg"
              alt="Xactimate Estimate"
              width={600}
              height={600}
              className="w-full rounded-2xl"
              style={{ boxShadow: "5px 10px 30px yellow" }}
            />
          </div>
        </section>

        {/* ── CLIENTS GRID ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(100deg, black 40%, #facc15 100%)",
            animation: "gradientAnimation 5s ease infinite",
            backgroundSize: "200% 200%",
          }}
        >
          <style jsx>{`
            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Diverse Range of Clients</h2>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
              World Estimating proudly serves a wide variety of clients, delivering tailored solutions to meet their unique needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((c, i) => (
                <div
                  key={i}
                  className="bg-black bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)] transition-shadow duration-300"
                  style={{ border: "2px solid white" }}
                >
                  <p className="text-white text-lg font-semibold">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Xactimate Writing Service</h2>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
              Our expert Xactimate estimators provide professional support for construction projects affected by destructive weather conditions and other disasters, delivering precise insurance estimates with exceptional customer service and personalized attention to every client's needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherservices.map((s, i) => (
                <div
                  key={i}
                  className="bg-black bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)] transition-shadow duration-300"
                  style={{ border: "2px solid white" }}
                >
                  <p className="text-white text-lg font-semibold">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE MX ESTIMATION ── */}
        <section
          className="py-20"
          style={{
            background: "linear-gradient(100deg,rgb(145,120,20) 10%, black 100%)",
            animation: "gradientAnimation 5s ease infinite",
            backgroundSize: "200% 200%",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <style jsx>{`
            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-white mb-4" data-aos-delay="100">
                Why Choose MX Estimation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos-delay="400">
                We deliver exceptional value through expertise, efficiency, and unwavering commitment to client success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "ri-speed-up-line", title: "Fast Turnaround", desc: "Sketches delivered in 12-24 hours, full estimates in 24-48 hours." },
                { icon: "ri-award-line", title: "Expert Certification", desc: "Level 3 Xactimate certification with 7+ years of hands-on experience." },
                { icon: "ri-price-tag-3-line", title: "Transparent Pricing", desc: "Fixed pricing with no hidden fees." },
              ].map((c, i) => (
                <div key={i} className="text-center" data-aos-delay={500 + i * 100}>
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl mx-auto mb-6">
                    <i className={`${c.icon} text-orange-400 text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                  <p className="text-gray-200">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our professional Xactimate estimation services and customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Shout to my man Malik Saif. This is the Quality of Matterport to xactimate Sketch ESXing he can provide. Top notch shit.",
                  name: "Jason Trolinder",
                },
                {
                  quote: "Working with Mx Estimation is always an absolute delight! His talent genuinely blows me away. What made the experience even better was the clear communication, timely delivery, and genuine care throughout the process.",
                  name: "On Site Adjusting",
                },
                {
                  quote: "Shhhhhh, Malik did such a great job. I Would like to keep it a secret but she deserves my honest opinion. Professional, timely, and diligent. If I could give her 10 stars I would.",
                  name: "Valor Restoration, LLC",
                },
              ].map((t, i) => (
                <div key={i} className="bg-black border border-orange-400 rounded-2xl p-8 shadow-sm">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <i key={s} className="ri-star-fill text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">{t.quote}</p>
                  <h4 className="font-semibold text-orange-400">{t.name}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
              <div className="inline-flex items-center space-x-2 text-gray-400">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white">4.9/5</span>
                <span>from 150+ client reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section
          id="contact"
          className="py-20"
          style={{
            background: "linear-gradient(90deg, #facc15 1%, black 200%)",
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 8s ease infinite",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <style jsx>{`
            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get Your Estimate Today</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to get started? Contact us for professional Xactimate estimation services with fast turnaround, transparent pricing, and dedicated customer service that puts your needs first.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div data-aos-delay="600">
                    <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your full name" required />
                  </div>
                  <div data-aos-delay="650">
                    <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 border border-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your email" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-white" placeholder="Enter your phone" />
                  </div>
                  <div data-aos-delay="750">
                    <label className="block text-sm font-semibold text-white mb-2">Service Type *</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full px-4 py-3 border border-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm text-left text-white pr-8"
                        onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                      >
                        {selectedService}
                      </button>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                      {serviceDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border border-white rounded-lg mt-1 shadow-lg z-10" data-aos="fade-up" data-aos-delay="800">
                          <div className="py-2">
                            {[
                              "Roof Estimate ($60)",
                              "Siding Estimate ($60)",
                              "Combo Package ($80)",
                              "Commercial Roof ($120)",
                              "Interior Estimate ($100+)",
                              "Matterport Conversion",
                              "Fire/Water/Mold Damage",
                              "Rebuild Cost Estimation",
                            ].map((s) => (
                              <button
                                key={s}
                                type="button"
                                className="w-full px-4 py-2 text-left hover:bg-gray-700 text-sm text-white"
                                onClick={() => handleServiceSelect(s)}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div data-aos-delay="850">
                  <label className="block text-sm font-semibold text-white mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm resize-none text-white"
                    placeholder="Tell us about your project, property details, damage type, or any specific requirements..."
                  />
                </div>

                <div className="flex items-start space-x-3" data-aos-delay="900">
                  <div
                    className={`w-5 h-5 border-2 ${termsChecked ? "bg-white border-white" : "border-white"} bg-gray-900 rounded cursor-pointer flex items-center justify-center`}
                    onClick={() => setTermsChecked(!termsChecked)}
                  >
                    {termsChecked && <i className="ri-check-line text-black text-sm" />}
                  </div>
                  <label className="text-sm text-gray-400 cursor-pointer">
                    I agree to the terms of service and privacy policy. I understand that estimates will be delivered within 24-48 hours.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-[8px] text-lg font-semibold hover:bg-gray-900 transition-colors"
                  data-aos-delay="950"
                >
                  Send Request
                </button>
              </div>

              {/* Contact Info */}
              <div data-aos-delay="500">
                <div className="space-y-8">
                  <div data-aos-delay="600">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      {[
                        { icon: "ri-mail-line", title: "Email", text: "mxestimation@gmail.com" },
                        { icon: "ri-phone-line", title: "Phone", text: "24/7" },
                        { icon: "ri-time-line", title: "Response Time", text: "Quotes within 2 hours\nEstimates in 24-48 hours" },
                      ].map((c, i) => (
                        <div key={i} className="flex items-start space-x-4" data-aos-delay={650 + i * 50}>
                          <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0 mt-1">
                            <i className={`${c.icon} text-white`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{c.title}</h4>
                            <p className="text-gray-300 whitespace-pre-line">{c.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ border: "2px solid white" }} className="bg-black rounded-2xl p-6" data-aos-delay="800">
                    <h4 className="font-bold text-white mb-4">Why Choose Us?</h4>
                    <ul className="space-y-3">
                      {["Level 3 Xactimate Certified", "24-48 Hour Turnaround", "Fixed Pricing, No Hidden Fees", "Dedicated Support Team"].map((t, i) => (
                        <li key={i} className="flex items-center space-x-3" data-aos-delay={850 + i * 50}>
                          <i className="ri-shield-check-line text-white" />
                          <span className="text-gray-300">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black text-white rounded-2xl p-6" data-aos-delay="1050">
                    <h4 className="font-bold text-white mb-2">Need Urgent Estimates?</h4>
                    <p className="text-white/90 mb-4">For rush orders or large projects, contact us directly for expedited service and custom pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
