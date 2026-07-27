"use client";

import React, { useRef, useState } from "react";
import { Check, ShieldCheck, Play, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WoodworkingLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const projects = [
    {
      title: "Adirondack Chair",
      image: "/assets/generated_images/adirondack_chair.jpg",
      description: "Classic outdoor comfort. Perfect angles and comfortable curved backrest design.",
      difficulty: "Medium",
      time: "1 Weekend",
    },
    {
      title: "Bookshelf",
      image: "/assets/generated_images/bookshelf.jpg",
      description: "Sturdy hardwood bookshelf. Adjustable shelves and classic crown molding details.",
      difficulty: "Easy",
      time: "1 Day",
    },
    {
      title: "Nightstand",
      image: "/assets/generated_images/nightstand.jpg",
      description: "Elegant bedside table with a smooth-glide drawer and spacious lower cabinet.",
      difficulty: "Medium",
      time: "2 Days",
    },
    {
      title: "Garden Pergola",
      image: "/assets/generated_images/pergola.jpg",
      description: "Beautiful timber frame backyard pergola. Enhances any patio or garden space.",
      difficulty: "Hard",
      time: "3 Days",
    },
    {
      title: "Picnic Table",
      image: "/assets/generated_images/picnic_table.jpg",
      description: "Heavy-duty outdoor picnic table with attached benches. Built to last generations.",
      difficulty: "Easy",
      time: "1 Day",
    },
    {
      title: "Heavy Workbench",
      image: "/assets/generated_images/workbench.jpg",
      description: "The ultimate garage workbench. Features built-in tool storage and a solid wood top.",
      difficulty: "Medium",
      time: "1 Weekend",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5]">
      {/* ClickBank Header */}
      <header className="bg-black text-[#8e8e8e] text-xs font-semibold py-2.5 px-4 tracking-wider flex justify-center items-center border-b border-zinc-800">
        <span>CLICKBANK®</span>
        <span className="mx-2 text-zinc-700">|</span>
        <span className="flex items-center gap-1 text-white">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> TRUSTED & SECURE
        </span>
      </header>

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 max-w-5xl mx-auto text-center">
          {/* Logo / Badge */}
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="font-serif italic text-2xl font-bold tracking-tight text-[#ea580c] select-none">
              Ted&apos;s<span className="text-[#2c241e]">Woodworking</span>
            </span>
            <div className="h-[2px] w-20 bg-[#ea580c] mt-1.5"></div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2c241e] tracking-tight leading-tight">
            The Plans Were Broken. <br className="hidden md:inline" />
            <span className="text-[#dc2626]">Not You.</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl font-semibold text-[#403328] max-w-3xl mx-auto leading-relaxed">
            Finally Build the Project You&apos;ve Been Planning In Your Head.
          </p>

          <p className="mt-3 text-sm sm:text-base italic text-zinc-500 font-medium max-w-2xl mx-auto">
            (Ever blame yourself when a project fell apart? Watch this before your next build)
          </p>

          {/* Video Container */}
          <div
            className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video relative group cursor-pointer"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/assets/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <>
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-colors group-hover:bg-black/45">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#ea580c] hover:bg-[#d97706] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110 pulse-glow">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md py-2.5 px-4 rounded-xl text-left border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold">Click to play the video</p>
                    <p className="text-zinc-300 text-xs mt-0.5">Presentation by Ted McGrath, Master Woodworker</p>
                  </div>
                  <span className="bg-[#ea580c] text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider animate-pulse">Live</span>
                </div>
              </>
            )}
          </div>

          {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="https://49b84jmcpbim8zwimyvor6vnc9.hop.clickbank.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#ea580c] hover:bg-[#d97706] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl items-center justify-center gap-3 w-full sm:w-auto pulse-glow"
                >
                  Download All 16,000 Plans Now <ArrowRight className="w-5.5 h-5.5" />
                </a>
              </div>
        </section>

        {/* Introduction / Letter Section */}
        <section className="bg-white border-y border-zinc-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header of Letter (two-column grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-zinc-100">
              {/* Left: show uploaded image at its natural size */}
              <div className="lg:col-span-6 flex justify-start">
                <div className="overflow-hidden rounded-md border-4 border-[#faf8f5] shadow-md max-w-full">
                  <Image
                    src="/assets/generated_images/image5.png"
                    alt="Ted Woody McGrath"
                    width={1365}
                    height={360}
                    className="w-auto h-auto block"
                  />
                </div>
              </div>

              {/* Right: heading + intro copy + letter content */}
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2c241e]">From The Desk Of Ted McGrath</h3>
                <p className="text-xs italic text-[#ea580c] font-bold mt-2">Re: The real reason your projects don&apos;t turn out the way you picture them...</p>

                {/* Letter Content (greeting + highlighted quote) */}
                <div className="mt-6 prose prose-zinc max-w-none text-base sm:text-lg text-zinc-700 space-y-6 leading-relaxed">
                  <p className="font-semibold text-[#2c241e]">Dear Fellow Woodworker,</p>
                  <p>
                    You already know what you want to build. You can picture it perfectly in your mind.
                  </p>
                  <p className="bg-[#fffbeb] border-l-4 border-amber-500 p-4 rounded-r-lg font-medium text-amber-900">
                    &ldquo;The deck out back. The dining table your family actually gathers around. The workbench that finally gets your garage under control.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem + Solution Section (full-width content moved here) */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2c241e] mb-6">Why Plans Fail — And The Fix</h3>
            <div className="text-zinc-700 space-y-6 text-base sm:text-lg">
              <p>
                But the moment you start building, reality sets in. The instructions you downloaded are missing steps. The diagrams don&apos;t match the dimensions. You buy extra wood because of a bad measurement sheet. You blame yourself for failing.
              </p>
              <p>
                Here&apos;s the truth: <strong>It&apos;s not your fault.</strong> Most plans are written by people who shouldn&apos;t be teaching. They skip over critical details, assuming you know exactly what to do.
              </p>
              <p>
                That is why I spent years putting together a massive library of 16,000+ step-by-step woodworking plans. Every single plan is built, tested, and contains everything you need to get the job done right the first time.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#ffedd5] text-[#ea580c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Project Catalog</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2c241e] mt-3">
              Explore What You Can Build Today
            </h2>
            <p className="text-zinc-500 mt-2 max-w-lg mx-auto">
              Every plan comes with detailed blueprints, material lists, and clear directions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href="https://49b84jmcpbim8zwimyvor6vnc9.hop.clickbank.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-zinc-100 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2c241e] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm border border-zinc-100">
                      {project.time}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#2c241e] group-hover:text-[#ea580c] transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      project.difficulty === "Easy" ? "bg-emerald-50 text-emerald-700" :
                      project.difficulty === "Medium" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-2.5 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Full Blueprints</span>
                    <span className="flex items-center gap-1 text-[#ea580c] group-hover:underline">View Details <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Product Box Section */}
        <section className="bg-[#f0ede6] py-16 px-4 border-t border-b border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Product Box Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-xl">
                <Image
                  src="/assets/image_b.png"
                  alt="Ted&apos;s Woodworking Pack Mockup"
                  width={500}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Copy list */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-[#ea580c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Value Offer</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2c241e] leading-tight">
                Build Faster. <br />
                <span className="text-[#ea580c]">Create Better.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base sm:text-lg max-w-2xl">
                Stop wasting time on confusing instructions and missing details. With this massive plan library, you get everything needed to turn your ideas into finished projects with confidence.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed max-w-2xl">
                From simple beginner builds to advanced custom furniture, each plan is designed to help you save money, reduce mistakes, and finish projects the right way.
              </p>

              <ul className="space-y-3.5">
                {[
                  "16,000+ detailed woodworking plans for furniture, sheds, cabins, decks, and more",
                  "Complete shopping lists and exact material measurements for every project",
                  "Step-by-step blueprints that make even beginner builds much easier",
                  "Multi-angle views and 3D layouts so you can visualize the final result clearly",
                  "Lifetime access to a growing library of practical, proven designs",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-700 font-medium">
                    <span className="bg-emerald-500 text-white rounded-full p-0.5 mt-1 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button className="bg-[#ea580c] hover:bg-[#d97706] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto pulse-glow">
                <a href="https://49b84jmcpbim8zwimyvor6vnc9.hop.clickbank.net" target="_blank" rel="noopener noreferrer"></a>
                  Download All 16,000 Plans Now <ArrowRight className="w-5.5 h-5.5" />
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#2c241e] text-zinc-400 py-12 px-4 border-t border-[#1a1411]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="font-serif italic text-lg font-bold tracking-tight text-white select-none">
            Ted&apos;s<span className="text-[#ea580c]">Woodworking</span>
          </p>

          <div className="text-left text-xs text-zinc-300 max-w-5xl mx-autoPrivacy Policy  p-4 rounded-md">
            <h4 className="font-semibold text-white mb-2">Disclaimer &amp; FTC Disclosure</h4>
            <p className="mb-2"><strong>Affiliate Disclosure:</strong><br />
            The Woodworking Blueprint is a professional review and promotional website. This site contains affiliate links, which means the owner may receive a commission if you decide to purchase the product recommended through the link provided (at no additional cost to you). We only recommend high-quality woodworking blueprints and guides that we believe will add genuine value to your projects.</p>

            <p className="mb-2"><strong>Earnings &amp; Results Disclaimer:</strong><br />
            Every effort has been made to accurately represent this product and its potential. Please remember that woodworking success depends on individual effort, skill level, time commitment, and proper tool usage. There is no guarantee that you will achieve the exact same results shown in the testimonials, as individual experiences vary.</p>

            <p className="mb-0"><strong>ClickBank Disclaimer:</strong><br />
            ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank&apos;s role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.</p>
          </div>

          <div className="flex justify-center gap-4 text-xs font-semibold text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          <p className="text-xs text-zinc-600 pt-4">
            &copy; {new Date().getFullYear()} Ted&apos;s Woodworking. All Rights Reserved.
          </p>
        </div>
      </footer>

      
    </div>
  );
}
