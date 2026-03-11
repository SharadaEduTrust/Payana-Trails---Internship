"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showLaunching, setShowLaunching] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleVideoEnd = () => {
    setShowLaunching(true);

    setTimeout(() => {
      setShowLaunching(false);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 500);
    }, 3000);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* --- BACKGROUND VIDEO --- */}
      <div className="fixed inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          className={`object-cover object-center w-full h-full transition-all duration-1000 ease-in-out ${
            showLaunching
              ? "scale-105 opacity-40 blur-sm"
              : "scale-100 opacity-100 blur-0"
          }`}
        >
          {/* Desktop Video */}
          <source
            src="/dskhero.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          {/* Mobile Video */}
          <source src="/mobilehero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- DARK OVERLAY --- */}
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-700 ease-in-out ${
          showContent ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* --- LAUNCHING SOON POPUP --- */}
      <div
        className={`fixed inset-0 z-30 flex items-center justify-center transition-all duration-1000 ease-in-out ${
          showLaunching
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-widest uppercase text-center drop-shadow-2xl">
          Launching Soon
        </h2>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div
        className={`relative z-20 flex flex-col min-h-screen justify-between py-10 transition-all duration-700 ease-in-out ${
          showContent && !showLaunching
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

        <div className="flex-1" />

        {/* Footer */}
        <footer className="px-8 md:px-12 w-full flex justify-between items-end text-xs text-gray-400 uppercase tracking-widest font-sans">
          <span>Est. 2026</span>
          <span>Scroll</span>
        </footer>
      </div>

      {/* --- MUTE/UNMUTE BUTTON --- */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full border border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm cursor-pointer"
        title={isMuted ? "Unmute Audio" : "Mute Audio"}
      >
        {isMuted ? (
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
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
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
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        )}
      </button>

      {/* --- HIDE/SHOW CONTENT BUTTON --- */}
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
