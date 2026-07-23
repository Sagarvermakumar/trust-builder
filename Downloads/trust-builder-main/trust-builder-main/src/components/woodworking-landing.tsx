"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Play, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

export function WoodworkingLanding() {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {!isPlaying ? (
              <>
                <Image
                  src="/assets/image_1784703027994.png"
                  alt="Ted's Woodworking Video Thumbnail"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-colors group-hover:bg-black/45">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#ea580c] hover:bg-[#d97706] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110 pulse-glow">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md py-2.5 px-4 rounded-xl text-left border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold">Video is Playing... Click for Sound</p>
                    <p className="text-zinc-300 text-xs mt-0.5">Presentation by Ted McGrath, Master Woodworker</p>
                  </div>
                  <span className="bg-[#ea580c] text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider animate-pulse">Live</span>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <Play className="w-12 h-12 text-[#ea580c] mb-4 animate-bounce" />
                <h3 className="text-lg font-bold">Connecting to Video Server...</h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-md">The high-speed woodworking tutorial stream is initializing. Please verify your connection details to load the 16,000 plans stream.</p>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                  className="mt-6 text-xs text-[#ea580c] hover:underline font-semibold"
                >
                  Go Back to Preview
                </button>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="bg-[#ea580c] hover:bg-[#d97706] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto pulse-glow">
              Get Instant Access to 16,000 Plans <ArrowRight className="w-5.5 h-5.5" />
            </button>
            <p className="text-xs text-zinc-500 mt-3 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 60-Day Money Back Guarantee • Secure 256-bit SSL Encryption
            </p>
          </div>
        </section>

        {/* Introduction / Letter Section */}
        <section className="bg-white border-y border-zinc-100 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header of Letter */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-zinc-100">
              <Image
                src="/assets/image_1784703095594.png"
                alt="Ted Woody McGrath"
                width={96}
                height={96}
                className="rounded-full object-cover border-4 border-[#faf8f5] shadow-md"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl font-extrabold text-[#2c241e]">From The Desk Of Ted McGrath</h3>
                <p className="text-sm text-zinc-500 font-semibold mt-1">Master Woodworker, Educator, Member of AWI</p>
                <p className="text-xs italic text-[#ea580c] font-bold mt-0.5">Re: The real reason your projects don&apos;t turn out the way you picture them...</p>
              </div>
            </div>

            {/* Letter Content */}
            <div className="mt-8 prose prose-zinc max-w-none text-base sm:text-lg text-zinc-700 space-y-6 leading-relaxed">
              <p className="font-semibold text-[#2c241e]">Dear Fellow Woodworker,</p>
              <p>
                You already know what you want to build. You can picture it perfectly in your mind.
              </p>
              <p className="bg-[#fffbeb] border-l-4 border-amber-500 p-4 rounded-r-lg font-medium text-amber-900">
                &ldquo;The deck out back. The dining table your family actually gathers around. The workbench that finally gets your garage under control.&rdquo;
              </p>
              <p>
                But the moment you start building, reality sets in. The instructions you downloaded are missing steps. The diagrams don&apos;t match the dimensions. You buy extra wood because of a bad measurement sheet. You blame yourself for failing.
              </p>
              <p>
                Here&apos;s the truth: <span className="font-bold text-[#2c241e]">It&apos;s not your fault.</span> Most plans are written by people who shouldn&apos;t be teaching. They skip over critical details, assuming you know exactly what to do.
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
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-zinc-100 transition-all duration-300 transform hover:-translate-y-1 group">
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
                    <span className="flex items-center gap-1 text-[#ea580c] group-hover:underline cursor-pointer">View Details <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Box Section */}
        <section className="bg-[#f0ede6] py-16 px-4 border-t border-b border-zinc-200">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Product Box Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-sm">
                <Image
                  src="/assets/image_1784703150512.png"
                  alt="Ted's Woodworking Pack Mockup"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Copy list */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-[#ea580c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Value Offer</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2c241e] leading-tight">
                16,000+ Woodworking Plans. <br />
                <span className="text-[#ea580c]">Ready to Download.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
                This is the largest collection of woodworking plans available anywhere. Get lifetime access to 16,000 blueprints, complete shopping lists, and detailed guides.
              </p>

              <ul className="space-y-3.5">
                {[
                  "Detailed schematics with multi-angle exploded views",
                  "Complete materials lists (tells you exactly what to buy)",
                  "Step-by-step assembly guides suitable for beginners",
                  "3D drawings to visualize the final product",
                  "Includes plans for furniture, sheds, cabins, toys, and more",
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
          <p className="text-xs max-w-2xl mx-auto leading-relaxed text-zinc-500">
            ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank&apos;s role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </p>
          <div className="flex justify-center gap-4 text-xs font-semibold text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
