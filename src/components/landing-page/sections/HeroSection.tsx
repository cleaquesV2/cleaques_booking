"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  background: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  background,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="relative w-full h-[600px] lg:min-h-[100vh] flex flex-col justify-center text-white overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={background}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-cover bg-no-repeat bg-[65%_top] sm:bg-[center_30%] md:bg-[center_40%] lg:bg-[70%_30%]"
          style={{ backgroundImage: `url(${background})` }}
        />
      </AnimatePresence>

      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(11, 19, 9, 0.58) 0%, rgba(11, 19, 9, 0) 100%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(11, 19, 9, 0.58) 0%, rgba(11, 19, 9, 0.55) 20%, rgba(11, 19, 9, 0.5) 40%, rgba(11, 19, 9, 0.4) 60%, rgba(11, 19, 9, 0.3) 75%, rgba(11, 19, 9, 0.2) 85%, rgba(11, 19, 9, 0.1) 95%, rgba(11, 19, 9, 0.05) 100%)',
          height: '250px',
        }}
      />

      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-20 md:pt-24">
        <div className="lg:max-w-3xl lg:text-left text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-4 md:mb-6 text-[#F7C31F] font-semibold leading-[123%]">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 md:mb-8 text-white/95 leading-relaxed max-w-2xl lg:max-w-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-[40px] justify-center lg:justify-start items-center">
            {primaryAction && (
              <div className="flex flex-col">
                <button
                  onClick={primaryAction.onClick}
                  className="bg-[#00AEEF] hover:bg-[#0099D6] active:bg-[#0088C0] text-white py-[6px] px-[24px] md:py-[10px] md:px-6 rounded-full text-sm md:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50 focus:ring-offset-2 focus:ring-offset-transparent "
                  aria-label={primaryAction.label}
                >
                  {primaryAction.label}
                </button>
                <span className="text-[10px] text-[#FDF3E2] mt-1.5 md:mt-2 ml-1">
                  Customize your travel experience
                </span>
              </div>
            )}
            {secondaryAction && (
              <div className="flex flex-col">
                <button
                  onClick={secondaryAction.onClick}
                  className="border border-white hover:bg-white hover:text-black active:bg-white active:text-black text-white py-2 px-6 md:py-[10px] md:px-6 rounded-full text-sm md:text-base font-semibold transition-all duration-200 "
                  aria-label={secondaryAction.label}
                >
                  {secondaryAction.label}
                </button>
                <span className="text-[10px] text-[#FDF3E2] mt-1.5 md:mt-2 ml-1">
                  Quickly book flights, hotels, or more
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
