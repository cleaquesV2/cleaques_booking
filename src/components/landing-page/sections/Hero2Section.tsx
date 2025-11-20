"use client";
import Image from "next/image";

export default function HeroSection() {

  return (
    <>
     <section className="relative w-full h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
  <Image
    src="/assets/png/hero2.png"
    alt="Mountain landscape"
    fill
    className="object-cover"
    priority
  />

  <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "linear-gradient(180deg, #0B1309 0%, rgba(11,19,9,0.85) 20%, rgba(11,19,9,0.4) 50%, rgba(11,19,9,0) 100%)",
    }}
  />
  <div className="absolute inset-0 bg-black/40 z-20"></div>

  <div className="relative z-30 text-center px-4 md:px-8">
    <h1 className="text-[32px] md:text-6xl font-bold text-[#F7C31F] mb-6">
      Plan Your Return. Redefine Your Journey.
    </h1>
    <p className="text-base md:text-[24px] text-[#FDF3E2] leading-[130%] mb-8 max-w-[333px] md:max-w-2xl  mx-auto pt-[33px]">
      Because going back isnt just about travel. Its about rediscovery. Let Cleaques guide you home.
    </p>
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
      Plan Your Trip
    </button>
  </div>

</section>

    </>
  );
}
