import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Accurate Xactimate Estimating Services - Mx Estimation",
  description:
    "Mx Estamation Offers accurate, construction estimating services and handling all the trade like commercial, industrial, and residential projects so qoute us now!",
  metadataBase: new URL("https://mxestimation.com"),
  openGraph: {
    title: "Get Accurate Xactimate Estimating Services - Mx Estimation",
    description:
      "Mx Estamation Offers accurate, construction estimating services and handling all the trade like commercial, industrial, and residential projects so qoute us now!",
    url: "https://mxestimation.com",
    siteName: "MX Estimation",
    images: [
      {
        url: "https://mxestimation.com/logo.jpeg", // 👈 apni hosted image ka link lagao
        width: 1200,
        height: 630,
        alt: "MX Estimation Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MX Estimation - Xactimate Estimate Services",
    description:
      "Accurate and reliable cost estimates for insurance claims, property damage assessments, and repairs.",
    images: ["https://mxestimation.com/logo.jpeg"], // 👈 same OG image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ AOS CSS CDN */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
        
        <meta name="google-site-verification" content="almZ8-c0gXrYmAK90agGqyEDDjEMxCwhazN7p6LjmPc" />
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ML5BTCL6RB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ML5BTCL6RB');
</script>

      </head>
      <body
        style={{ backgroundColor: "black" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ AOS JS CDN */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              AOS.init({
                duration: 500,
                once: true
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
