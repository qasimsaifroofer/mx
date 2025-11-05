<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>1ESX Roof Report – Win Claims & Bids with One Click</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .parallax { background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; }
    @media (max-width: 768px) { .parallax { background-attachment: scroll; } }
  </style>
</head>
<body class="bg-gray-50 text-gray-800">

  <div id="root"></div>

  <script type="text/babel">
    const { useEffect, useRef } = React;

    const RoofReportBlog = () => {
      const heroRef = useRef(null);

      useEffect(() => {
        const handleScroll = () => {
          const scrolled = window.pageYOffset;
          if (heroRef.current) {
            heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <>
          {/* Hero with Full-Width Image */}
          <section className="relative h-screen overflow-hidden">
            <div 
              ref={heroRef}
              className="absolute inset-0 parallax"
              style={{backgroundImage: "url('https://i.imgur.com/YourUploadedImageHere.jpg')"}} // ← REPLACE WITH YOUR UPLOADED IMAGE URL
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <img src="https://i.imgur.com/MxEstimationLogo.png" alt="MX Estimation" className="h-20 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Buy a Roof Report To Help Your Insurance Claims or Contractor Bid
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl">
                Precision ESX & XML reports delivered in 24h — trusted by adjusters & roofers nationwide.
              </p>
              <a href="#order" className="mt-8 inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition">
                Order Report Now
              </a>
            </div>
          </section>

          {/* Main Content */}
          <article className="max-w-5xl mx-auto px-6 py-16 space-y-20">

            {/* Intro */}
            <section className="prose prose-lg mx-auto text-center">
              <p className="lead text-xl text-gray-600">
                A roof report is an essential tool for both insurance claim adjusters and roofing contractors. 
                It’s a professionally generated document that assesses the condition, size, and structure of a residential roof.
              </p>
              <p className="mt-4">
                At <strong>1ESX</strong>, we provide roof inspection reports that deliver precision and clarity, 
                helping clients avoid costly errors and delays. With the help of advanced technologies like 
                high-resolution aerial photography and satellite imagery, we ensure every roof report is 
                accurate, detailed, and ready to meet insurer requirements.
              </p>
            </section>

            {/* Claims Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  Simplify Claims With An Accurate ESX & XML Roof Measurement Report
                </h2>
                <p className="text-lg">
                  Insurance claims demand solid, verifiable documentation. Our roof inspection reports are 
                  designed to provide adjusters with everything they need to validate a claim efficiently.
                </p>
                <ul className="mt-6 space-y-3 text-lg">
                  <li>✔ No more manual measurements</li>
                  <li>✔ High-res aerial imagery included</li>
                  <li>✔ Diagrams, pitch, facets, ridges & valleys</li>
                  <li>✔ Instant ESX for Xactimate & XML for Symbility</li>
                </ul>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
            </section>

            {/* Contractors Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  Win More Contracts With Reliable Data
                </h2>
                <p className="text-lg">
                  For contractors, having accurate information is the foundation of a successful bid. 
                  Our roof reports help contractors present precise estimates, stand out from competitors, 
                  and ultimately win more jobs.
                </p>
                <ul className="mt-6 space-y-3 text-lg">
                  <li>✔ Bid with confidence — no guesswork</li>
                  <li>✔ 3D roof model + linear measurements</li>
                  <li>✔ One-page summary for fast quoting</li>
                  <li>✔ PDF, ESX, XML delivered in 24h</li>
                </ul>
              </div>
            </section>

            {/* Features Grid */}
            <section>
              <h2 className="text-4xl font-bold text-center mb-12">What’s Inside Every Report</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🛰️</span>
                  </div>
                  <h3 className="text-xl font-bold">Property Image</h3>
                  <p className="mt-2">
                    Google Maps aerial snapshot with precise roof overlay.
                  </p>
                </div>
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📏</span>
                  </div>
                  <h3 className="text-xl font-bold">Measurement Reports</h3>
                  <p className="mt-2">
                    3D model, pitch, hips, ridges, valleys, rakes, eaves, flashing.
                  </p>
                </div>
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📄</span>
                  </div>
                  <h3 className="text-xl font-bold">One-Page Summary</h3>
                  <p className="mt-2">
                    All key data on a single page for instant quoting.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section id="order" className="text-center py-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white">
              <h2 className="text-4xl font-bold mb-4">
                Ready to streamline claims & win more bids?
              </h2>
              <p className="text-xl mb-8">
                Order your ESX/XML roof report in under 60 seconds.
              </p>
              <a href="mailto:orders@1esx.com" className="inline-block px-10 py-5 bg-white text-orange-600 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition text-xl">
                Email orders@1esx.com
              </a>
              <p className="mt-6 text-lg">
                We keep it simple: You order → We deliver in 24h.
              </p>
            </section>

            {/* Footer */}
            <footer className="text-center py-12 border-t">
              <img src="https://i.imgur.com/MxEstimationLogo.png" alt="1ESX" className="h-12 mx-auto mb-4" />
              <p className="text-gray-600">
                © 2025 1ESX Roof Reports – Trusted by 10,000+ adjusters & contractors.
              </p>
            </footer>
          </article>
        </>
      );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<RoofReportBlog />);
  </script>
</body>
</html>
