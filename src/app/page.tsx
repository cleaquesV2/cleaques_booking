"use client";

import React, { useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Navbar from "@/components/landing-page/NavBar";
import About from "@/components/landing-page/sections/AboutSection";
import Offerings from "@/components/landing-page/sections/OfferingSection";
import SectionWrapper from "@/components/landing-page/sections/BgWrapper";
import CleaquesPath from "@/components/landing-page/sections/CleaquesPathSection";
import Destinations from "@/components/landing-page/sections/DestinationsSection";
import Partner from "@/components/landing-page/sections/PartnerSection";
import Properties from "@/components/landing-page/sections/PropertieSection";
import SoulLand from "@/components/landing-page/sections/SoulLandSection";
import Testimonial from "@/components/landing-page/sections/TestimonialSection";
import FAQS from "@/components/landing-page/sections/FaqSection";
import Footer from "@/components/landing-page/footer";
import HeroTwo from "@/components/landing-page/sections/Hero2Section";

const Hero = dynamic(
  () => import("@/components/landing-page/sections/HeroSection").then((mod) => mod.Hero),
  { ssr: true }
);

  const backgrounds = [
    "/assets/png/BookingsHeroImage.png",
    "/assets/png/BookingsHeroImage2.png",
    "/assets/png/BookingsHeroImage3.png",
  ];
  
const BookingDashboardPage = () => {
  const router = useRouter();

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const handlePlanTrip = useCallback(() => {
    router.push("/booking/plan");
  }, [router]);

  const handleBookInstantly = useCallback(() => {
    router.push("/booking/instant");
  }, [router]);

  return (
    <main aria-label="Booking dashboard" className="relative min-h-screen">
      <section aria-labelledby="booking-hero" className="relative">

        <Navbar />

        <Hero
          title="Plan Your Journey Home and Beyond."
          subtitle="Reconnect with your roots. Discover Africa, the Caribbean, and the world through curated experiences crafted for the modern explorer."
          background={backgrounds[currentBg]} 
          primaryAction={{ label: "Plan Your Trip", onClick: handlePlanTrip }}
          secondaryAction={{ label: "Book Instantly", onClick: handleBookInstantly }}
        />

        <SectionWrapper>
          <About />
          <Offerings />
          <CleaquesPath />
          <Destinations />
        </SectionWrapper>

        <Partner />

        <SectionWrapper>
          <Properties />
          <SoulLand />
          <Testimonial />
          <FAQS />
          <HeroTwo />
          <Footer />
        </SectionWrapper>
      </section>
    </main>
  );
};

export default BookingDashboardPage;
