import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        < Analytics />
 
        {/* ✅ AOS CSS CDN */}
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
