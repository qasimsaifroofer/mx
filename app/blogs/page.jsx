"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const dummyPosts = [
  {
    slug: "getting-started-xactimate",
    title: "Getting Started with Xactimate: Tips for Beginners",
    excerpt: "Learn the fundamentals and quick tips to become productive in Xactimate.",
    date: "2025-09-28",
  },
  {
    slug: "roof-measurements-pdf-guide",
    title: "Roof Measurements PDF: Fast, Accurate, and Affordable",
    excerpt: "How to streamline your workflows with aerial roof measurement PDFs.",
    date: "2025-09-20",
  },
  {
    slug: "matterport-to-xactimate",
    title: "Matterport to Xactimate: A Practical Conversion Guide",
    excerpt: "A step-by-step walkthrough to convert scans into reliable sketches and estimates.",
    date: "2025-09-10",
  },
  {
    slug: "estimator-accelerator-intro",
    title: "Introducing Estimator Accelerator",
    excerpt: "Level up your estimation skills with our focused accelerator program.",
    date: "2025-08-30",
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
            {dummyPosts.map((post) => (
              <article key={post.slug} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
                <div className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="text-orange-400 hover:text-white transition-colors">Read more →</Link>
              </article>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

