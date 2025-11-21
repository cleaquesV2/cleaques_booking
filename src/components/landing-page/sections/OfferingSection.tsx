"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Offerings = () => {
  const offeringsData = [
    {
      icon: '/assets/svgs/flight.svg',
      title: "Flights",
      description:
        "Book flights that bring you closer to home or new horizons, with best fares for the diaspora traveler.",
    },
    {
      icon: '/assets/svgs/stay.svg',
      title: "Stays",
      description:
        "From the coasts of Cape Town to the heart of Kingston, find stays that welcome you like family.",
    },
    {
      icon: '/assets/svgs/car.svg',
      title: "Rides",
      description:
        "Your trip doesn’t end at the airport. We’ll get you where you need to be, safely, smoothly, locally.",
    },
    {
      icon: '/assets/svgs/experience.svg',
      title: "Experiences",
      description:
        "Walk through history, taste the culture, guided tours that connect you deeper to every destination.",
    },
  ];

  return (
    <div className="bg-[#0B1309] text-[#fdf3e2] px-[30px] sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
        <div className="flex md:hidden w-full h-[2px] bg-gray-500 mb-2"></div>
        <div className="mx-auto md:mx-0">
          <h1 className="text-center md:text-left text-[32px] font-[600] text-[#f7c31f]">
            Our Offerings
          </h1>
          <p className="text-center md:text-left text-sm md:text-base text-[#fdf3e2]/90 mt-1">
            Because every part of the journey matters.
          </p>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between">
          <div className="w-full h-[0.5px] bg-gray-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-[38px] md:mt-16 relative">
        {offeringsData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center text-center md:items-start md:text-left px-4">
            {index !== 0 && (
              <motion.div
                className="block md:hidden absolute left-0 right-0 -top-6 h-[2px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent 0%, #f7c31f 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                animate={{
                  backgroundPositionX: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            )}
            {index !== 0 && (
              <motion.div
                className="hidden md:block absolute -left-6 top-0 bottom-0 w-[2px] rounded-full overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 0%, #f7c31f 40%, transparent 60%, transparent 100%)",
                  backgroundSize: "100% 200%",
                  backgroundRepeat: "no-repeat",
                }}
                animate={{
                  backgroundPositionY: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            )}

            <div className="flex items-center justify-center rounded-full mb-6">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={73}
                height={73}
                className="object-contain"
              />
            </div>

            <h2 className="text-[24px] font-[500] mb-3">{item.title}</h2>
            <p className="text-[16px] text-[#fdf3e2] leading-relaxed max-w-[260px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-4">
        <button className="bg-[#00B7FF] hover:bg-[#00A3E6] text-white font-medium px-8 py-3 rounded-full transition-all mx-auto md:mx-0">
          Plan Your Trip
        </button>

        <p className="text-sm text-[#fdf3e2]/70 md:ml-4 text-center md:text-left">
          Keep track of your flights, stays, and memories — all organized under one roof.
        </p>
      </div>
    </div>
  );
};

export default Offerings;
