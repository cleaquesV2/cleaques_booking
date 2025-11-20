"use client";

import React from "react";
import Image from "next/image";

interface OnboardingScreenProps {
  currentStep?: number;
  totalSteps?: number;
  onNext?: () => void;
  onSkip?: () => void;
}

export default function OnboardingScreen({
  currentStep = 1,
  totalSteps = 3,
  onNext,
  onSkip,
}: OnboardingScreenProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/bookings/onboarding-bg.jpg"
          alt="City skyline at sunset"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            // Fallback to gradient if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            if (target.parentElement) {
              target.parentElement.style.background =
                "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #dc2626 100%)";
            }
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            <span className="text-blue-400">C</span> CLEAQUES
          </h1>
        </div>

        {/* Main Text */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Your Next Adventure.
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Find and book flights, hotels, rides, and attractions, all in one
            seamless experience.
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                // Handle dot click if needed
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "bg-yellow-400 w-8"
                  : "bg-white/30"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {onSkip && (
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all backdrop-blur-sm"
            >
              Skip
            </button>
          )}
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="flex-1 py-3 px-6 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

