"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const posts = [
  {
    slug: "streamline-property-claims-estimating",
    title: "Streamline Property Claims Estimating",
    excerpt: "Discover efficient strategies to optimize property claims estimation processes.",
    date: "2025-10-10",
  },
  {
    slug: "ten-common-xactimate-mistakes",
    title: "Ten Common Xactimate Mistakes",
    excerpt: "Learn the top 10 Xactimate mistakes that could cost you money and how to avoid them.",
    date: "2025-10-16",
  },
  // NEW CARD ADDED BELOW
  {
    slug: "1esx-roof-report",
    title: "1ESX Roof Report – Win Claims & Bids with One Click",
    excerpt: "Get instant ESX/XML roof reports with aerial imagery, 3D measurements & one-page summaries. Trusted by 10,000+ adjusters & roofers.",
    date: "2025-11-06",
    externalUrl: "https://mxestimation.com/blogs/1esx-roof-report",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs | MX Estimation</title>
        <meta name="description" content="Read tips, guides, and updates from MX Estimation." />
        <link rel="canonical" href="https://mxestimation.com/blogs" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "
