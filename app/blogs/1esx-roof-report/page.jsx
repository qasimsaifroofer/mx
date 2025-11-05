// app/blogs/1esx-roof-report/page.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RoofReportBlog() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.pageYOffset;
      heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ==== HERO ==== */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
          style={{
            backgroundImage: "url('https://i.imgur.com/YOUR_IMAGE_LINK.jpg')", // ← PUT YOUR IMAGE HERE
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Image
            src="https://i.imgur.com/MxEstimationLogo.png"
            alt="MX Estimation"
            width={200}
            height={80}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Buy a Roof Report To Help Your Insurance Claims or Contractor Bid
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Precision ESX & XML reports delivered in 24h — trusted by adjusters & roofers nationwide.
          </p>
          <a
            href="#order"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition"
          >
            Order Report Now
          </a>
        </div>
      </section>

      {/* ==== MAIN CONTENT ==== */}
      <article className="max-w-5xl mx-auto px-6 py-16 space-y-20 bg-gray-50 text-gray-800">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-block text-orange-600 hover:text-orange-800 font-medium"
        >
          ← Back to Blogs
        </Link>

        {/* Intro */}
        <section className="text-center">
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            A roof report is an essential tool for both insurance claim adjusters and roofing contractors. It’s a
            professionally generated document that assesses the condition, size, and structure of a residential roof.
          </p>
          <p className="mt-6 text-lg">
            At <strong>1ESX</strong>, we provide roof inspection reports that deliver precision and clarity,
            helping clients avoid costly errors and delays. With high-resolution aerial photography and satellite
            imagery, every report is accurate, detailed, and ready to meet insurer requirements.
          </p>
        </section>

        {/* Claims Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              Simplify Claims With An Accurate ESX & XML Roof Measurement Report
            </h2>
            <p className="text-lg mb-6">
              Insurance claims demand solid, verifiable documentation. Our roof inspection reports give adjusters
              everything needed to validate claims fast.
            </p>
            <ul className="space-y-3 text-lg">
              <li>✔ No more manual measurements</li>
              <li>✔ High-res aerial imagery included</li>
              <li>✔ Diagrams, pitch, facets, ridges & valleys</li>
              <li>✔ Instant ESX for Xactimate & XML for Symbility</li>
            </ul>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
        </section>

        {/* Contractors Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              Win More Contracts With Reliable Data
            </h2>
            <p className="text-lg mb-6">
              For contractors, having accurate information is the foundation of a successful bid. Our reports help
              you present precise estimates, stand out, and win more jobs.
            </p>
            <ul className="space-y-3 text-lg">
              <li>✔ Bid with confidence — no guesswork</li>
              <li>✔ 3D roof model + linear measurements</li>
              <li>✔ One-page summary for fast quoting</li>
              <li>✔ PDF, ESX, XML delivered in 24h</li>
            </ul>
          </div>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">
            What’s Inside Every Report
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Satellite",
                title: "Property Image",
                desc: "Google Maps aerial snapshot with precise roof overlay.",
              },
              {
                icon: "Ruler",
                title: "Measurement Reports",
                desc: "3D model, pitch, hips, ridges, valleys, rakes, eaves, flashing.",
              },
              {
                icon: "Document",
                title: "One-Page Summary",
                desc: "All key data on a single page for instant quoting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="order"
          className="text-center py-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to streamline claims & win more bids?
          </h2>
          <p className="text-xl mb-8">
            Order your ESX/XML roof report in under 60 seconds.
          </p>
          <a
            href="mailto:orders@1esx.com"
            className="inline-block px-10 py-5 bg-white text-orange-600 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition text-xl"
          >
            Email orders@1esx.com
          </a>
          <p className="mt-6 text-lg">
            We keep it simple: You order → We deliver in 24h.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t">
          <Image
            src="https://i.imgur.com/MxEstimationLogo.png"
            alt="1ESX"
            width={160}
            height={48}
            className="mx-auto mb-4"
          />
          <p className="text-gray-600">
            © 2025 1ESX Roof Reports – Trusted by 10,000+ adjusters & contractors.
          </p>
        </footer>
      </article>
    </>
  );
}

/* Tailwind Parallax Fix */
const style = `
  @media (max-width: 768px) {
    .parallax { background-attachment: scroll !important; }
  }
`;
export function Head() {
  return (
    <>
      <title>1ESX Roof Report – Win Claims & Bids with One Click</title>
      <meta
        name="description"
        content="Precision ESX & XML roof reports delivered in 24h. Trusted by adjusters & roofers."
      />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </>
  );
}
