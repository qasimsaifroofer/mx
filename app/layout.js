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
  title: "mx estimation",
  description:
    "Our Xactimate Estimate services provide precise and reliable cost estimates for insurance claims, property damage assessments, and repairs.",
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
      </head>
      <body
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

