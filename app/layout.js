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

// Default metadata
const defaultMetadata = {
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
        url: "https://mxestimation.com/logo.jpeg",
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
    images: ["https://mxestimation.com/logo.jpeg"],
  },
};

// Metadata for Aerial Roof Measurements PDF page
const aerialRoofMetadata = {
  title: "Aerial Roof Measurements PDF",
  description:
    "Download accurate Aerial Roof Measurements PDFs for precise construction and estimation projects with MX Estimation.",
  metadataBase: new URL("https://mxestimation.com"),
  openGraph: {
    title: "Aerial Roof Measurements PDF",
    description:
      "Download accurate Aerial Roof Measurements PDFs for precise construction and estimation projects with MX Estimation.",
    url: "https://mxestimation.com/aerial-roof-measurements-pdf",
    siteName: "MX Estimation",
    images: [
      {
        url: "https://mxestimation.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aerial Roof Measurements PDF Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerial Roof Measurements PDF - MX Estimation",
    description:
      "Accurate Aerial Roof Measurements PDFs for construction and estimation projects.",
    images: ["https://mxestimation.com/logo.jpeg"],
  },
};

export default function RootLayout({ children, pageProps }) {
  // Determine if the current page is the Aerial Roof Measurements PDF page
  // Replace this logic with your actual page detection mechanism (e.g., based on route or pageProps)
  const isAerialRoofPage = pageProps?.pageName === "aerial-roof-measurements-pdf" || false;
  const metadata = isAerialRoofPage ? aerialRoofMetadata : defaultMetadata;

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ backgroundColor: "black" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
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

export const metadata = (pageProps) => {
  const isAerialRoofPage = pageProps?.pageName === "aerial-roof-measurements-pdf" || false;
  return isAerialRoofPage ? aerialRoofMetadata : defaultMetadata;
};
