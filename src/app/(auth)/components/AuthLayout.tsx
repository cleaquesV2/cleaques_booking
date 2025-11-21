"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface AuthLayoutProps {
  children: React.ReactNode;
}

const slides: Slide[] = [
  {
    image: "/assets/png/AuthImage.png",
    title: "Discover Your Next Adventure",
    subtitle:
      "Find and book flights, hotels, rides, and attractions, all in one seamless experience.",
  },
  {
    image: "/assets/png/AuthImage2.png",
    title: "Explore New Destinations",
    subtitle:
      "From cities to coasts, explore and plan your trips with ease and confidence.",
  },
  {
    image: "/assets/png/AuthImage3.png",
    title: "Seamless Travel Experience",
    subtitle:
      "Manage all your bookings, rides, and experiences under one platform.",
  },
];

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Left Image Section (Desktop only) */}
      <div className="hidden lg:flex relative w-1/2 h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-l-[30px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-l-[30px]" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Top-left logo */}
              <div className="w-auto h-auto hidden lg:block">
                <Image
                  src="/assets/svgs/CleaquesLogo.svg"
                  alt="CLEAQUES logo"
                  width={210}
                  height={32}
                  className="h-auto w-auto max-w-[180px] lg:max-w-[210px]"
                  priority
                />
              </div>

              {/* Bottom-centered text + progress */}
              <div className="flex flex-col items-center text-center mb-6">
                <h1 className="text-white text-[24px] md:text-[32px] font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-white text-sm md:text-base max-w-[280px]">
                  {slide.subtitle}
                </p>

                {/* Progress Circles */}
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3].map((step) => (
                    <span
                      key={step}
                      className="rounded-full"
                      style={{
                        width: "9.84px",
                        height: "9.84px",
                        backgroundColor:
                          currentSlide === step - 1
                            ? "#F7C31F"
                            : "#FFF3CC4D",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-[10px] py-[10px] sm:px-[25px] sm:py-[25px] bg-[#0B1309]">
        <div className="w-full max-w-xl">
          {/* Mobile logo */}
          <div className="md:hidden mb-10 ml-4 mt-3">
            <Image
              src="/assets/svgs/Cleaques.svg"
              alt="CLEAQUES logo"
              width={210}
              height={32}
              className="h-auto w-auto"
              priority
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

