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
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "orange" }}>
              Latest Articles
            </h1>
            <p className="text-gray-400 mt-2">Industry insights, how-tos, and best practices.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="text-xs text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>

                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>

                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>

                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-400 hover:text-white transition-colors font-medium"
                  >
                    Read more
                    <span className="ml-1">External Link</span>
                  </a>
                ) : (
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-orange-400 hover:text-white transition-colors font-medium"
                  >
                    Read more
                  </Link>
                )}
              </article>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
