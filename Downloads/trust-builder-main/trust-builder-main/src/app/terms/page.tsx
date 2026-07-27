"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <header className="bg-[url('/assets/generated_images/wood-bg.jpg')] bg-cover bg-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2c241e]">Terms &amp; Conditions</h1>
          <p className="mt-3 text-zinc-700">Welcome to The Woodworking Blueprint — please read these terms carefully.</p>
        </div>
      </header>

      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-[#faf8f5] border border-zinc-100 p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c241e]">The Woodworking Blueprint</h3>
              <p className="text-sm text-zinc-600 mt-2">Terms overview, rights &amp; responsibilities.</p>

              <dl className="mt-4 text-sm text-zinc-700">
                <dt className="font-semibold">Last Updated</dt>
                <dd className="mb-3">July 27, 2026</dd>

                <dt className="font-semibold">Contact</dt>
                <dd className="mb-3">thewoodworkingblueprint@gmail.com</dd>
              </dl>
            </div>
          </aside>

          {/* Main */}
          <article className="lg:col-span-8 prose prose-zinc max-w-none">
            <p>These terms and conditions outline the rules and regulations for the use of The Woodworking Blueprint&apos;s Website. By accessing this website, you accept these terms. If you disagree, do not use the site.</p>

            <h2>Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, The Woodworking Blueprint and/or its licensors own all the intellectual property rights and materials contained on this Website. You are granted a limited license for viewing purposes only.</p>

            <h2>Restrictions</h2>
            <p>You are specifically restricted from the following:</p>
            <ul>
              <li>Publishing any Website material in other media without proper credit.</li>
              <li>Selling, sublicensing, or commercializing Website material.</li>
              <li>Using the Website in a damaging way or contrary to laws.</li>
            </ul>

            <h2>No Warranties</h2>
            <p>This Website is provided &quot;as is&quot;. The Woodworking Blueprint makes no warranties regarding the accuracy or reliability of site content.</p>

            <h2>Limitation of Liability</h2>
            <p>In no event shall The Woodworking Blueprint or its team be liable for any losses arising from the use of this Website.</p>

            <h2>Governing Law &amp; Jurisdiction</h2>
            <p>These Terms are governed by the laws of the United States, and disputes will be resolved in U.S. state and federal courts.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
