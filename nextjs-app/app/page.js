"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(true);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* --- BACKGROUND IMAGES --- */}
      <div className="fixed inset-0 z-0">
        <div className="block md:hidden h-full w-full relative">
          <Image
            src="/mobilehero.png"
            alt="Background Mobile"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="hidden md:block h-full w-full relative">
          <Image
            src="/dskhero.png"
            alt="Background Desktop"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* --- DARK OVERLAY --- */}
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-700 ease-in-out ${
          showContent ? "opacity-60" : "opacity-0"
        }`}
      />

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div
        className={`relative z-20 flex flex-col min-h-screen justify-between py-10 transition-all duration-700 ease-in-out ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Top Bar */}
        <header className="flex justify-between items-center px-8 md:px-12 w-full">
          <div className="text-2xl font-display font-bold tracking-tighter">
            PAYANA TRAILS
          </div>
          {/* Menu Icon */}
          <button className="flex flex-col gap-1.5 focus:outline-none group cursor-pointer">
            <span className="h-0.5 w-8 bg-white transition-all group-hover:w-10"></span>
            <span className="h-0.5 w-5 bg-white ml-auto transition-all group-hover:w-8"></span>
          </button>
        </header>

        {/* --- CENTER TEXT SECTION (Updated) --- */}
        {/* md:ml-auto -> Pushes container to the right
            md:w-1/2   -> Limits width to 50% so it doesn't cover the left image
            md:items-end -> Aligns everything to the right edge
            md:pr-16   -> Adds padding so it doesn't touch the screen edge
        */}
        <section className="flex flex-col items-center justify-center text-center px-4 my-8 md:items-end md:text-right md:ml-auto md:w-1/2 md:pr-16">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter uppercase mb-6 drop-shadow-2xl">
            Website Under <br className="hidden md:block" /> Construction
          </h1>
          <p className="text-sm md:text-lg tracking-[0.3em] uppercase text-gray-300 mb-12 font-sans font-light">
            Thoughtfully curated journeys are on their way
          </p>
          <div>
            <Link
              href="mailto:info@payanatrails.com"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-md border-b border-transparent hover:border-white pb-1 tracking-widest font-sans"
            >
              info@payanatrails.com
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 md:px-12 w-full flex justify-between items-end text-xs text-gray-400 uppercase tracking-widest font-sans">
          <span>Est. 2026</span>
          <span>Scroll</span>
        </footer>
      </div>

      {/* --- TOGGLE BUTTON --- */}
      <button
        onClick={() => setShowContent(!showContent)}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full border border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm cursor-pointer"
        title={showContent ? "Hide Text" : "Show Text"}
      >
        {showContent ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        )}
      </button>
    </main>
  );
}
