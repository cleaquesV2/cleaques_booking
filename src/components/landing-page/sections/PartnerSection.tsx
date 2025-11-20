"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[100vh] flex items-center justify-center text-center overflow-hidden py-10">
      <Image
        src="/assets/png/PartnerBg.png"
        alt="City skyline background"
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #0B1309 0%, rgba(11,19,9,0.85) 20%, rgba(11,19,9,0.4) 50%, rgba(11,19,9,0.00) 100%)",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 text-[#fdf3e2] ">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-[64px] font-semibold text-[#f7c31f] md:leading-[120%] max-w-[1000px] mb-4 text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Partner With Cleaques, Let&apos;s Grow Journeys Together
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-[24px] md:leading-[130%] mt-5 text-[#fdf3e2]/90 mb-8 max-w-[1000px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Every unforgettable trip begins with you — the hosts, the guides,
          the drivers, the dreamers. Join Cleaques and connect your service
          to travelers across Africa, the Caribbean, and the diaspora.
        </motion.p>

        <motion.button 
          className="bg-[#00AEEF] hover:bg-[#0095cf] text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          List Your Services
        </motion.button>
      </div>
    </section>
  );
};

export default Partner;
