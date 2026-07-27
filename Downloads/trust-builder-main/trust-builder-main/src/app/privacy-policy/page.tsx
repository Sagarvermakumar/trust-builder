"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <header className="bg-[url('/assets/generated_images/wood-bg.jpg')] bg-cover bg-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2c241e]">Privacy Policy</h1>
          <p className="mt-2 text-zinc-700">Effective Date: <strong>July 27, 2026</strong></p>
        </div>
      </header>

      {/* Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-[#faf8f5] border border-zinc-100 p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c241e]">The Woodworking Blueprint</h3>
              <p className="text-sm text-zinc-600 mt-2">Keeping your data safe and transparent.</p>

              <dl className="mt-4 text-sm text-zinc-700">
                <dt className="font-semibold">Effective Date</dt>
                <dd className="mb-3">July 27, 2026</dd>

                <dt className="font-semibold">Contact</dt>
                <dd className="mb-3">thewoodworkingblueprint@gmail.com</dd>

                <dt className="font-semibold">Retailer</dt>
                <dd className="mb-0">ClickBank (payment & delivery)</dd>
              </dl>
            </div>
          </aside>

          {/* Main */}
          <article className="lg:col-span-8 prose prose-zinc max-w-none">
            <p>
              At <strong>The Woodworking Blueprint</strong>, one of our primary goals is to respect and protect your privacy. This policy explains what information we collect, why we collect it, and how you can manage it.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect personal identification information from Users in a variety of ways, including when Users visit our site, register on the site, subscribe to the newsletter, or contact support. The data collected may include name and email address where appropriate.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Personalize your experience and deliver the content you are most interested in.</li>
              <li>Improve our website and product offerings.</li>
              <li>Send important notices, updates, and occasional marketing messages (you can opt-out anytime).</li>
            </ul>

            <h2>Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar technologies to improve site performance and provide personalized content. You can control cookie preferences through your browser settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We use trusted third-party services such as ClickBank for payment processing and delivery. Their privacy practices are governed by their own policies — we recommend reviewing them if you have concerns about how they handle data.
            </p>

            <h2>CalOPPA / CCPA</h2>
            <p>
              We respect your rights under CalOPPA and CCPA. You may request access to, correction of, or deletion of your personal data by contacting us.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative and technical safeguards to protect data. However, no method of transmission is 100% secure — please take care when sharing sensitive information.
            </p>

            <h2>Changes To This Policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the Effective Date shown at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at <a href="mailto:thewoodworkingblueprint@gmail.com" className="text-[#ea580c]">thewoodworkingblueprint@gmail.com</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

