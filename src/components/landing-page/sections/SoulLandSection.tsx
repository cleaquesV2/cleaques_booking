import React from "react";
import Image from "next/image";

const SoulLand = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="md:flex flex-1 items-center">
           <div className="md:flex hidden w-full h-[0.5px] bg-gray-500 mb-6"></div>
        </div>
         <div className="flex md:hidden w-full h-[0.5px] bg-gray-500 mb-6"></div>

        <div className="mx-auto md:mx-0">
          <h1 className="text-center md:text-left text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#f7c31f] leading-[123%]">
            Soul of the Land, Experiences & Attractions
          </h1>
          <p className="text-sm text-center md:text-left md:text-base text-[#fdf3e2]/90 mt-2 max-w-md">
            Because the heart of a place is in its rhythm, its people, its pulse.
          </p>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/png/festivals.png"
            alt="Lagos, Nigeria"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 transition-all duration-300" />

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-lg">
            Festivals & Culture
          </p>
        </div>
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/png/OlumoRock.png"
            alt="Accra, Ghana"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 transition-all duration-300" />

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-lg">
            Nature & Heritage
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <div className="relative w-full max-w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/png/dish.png"
            alt="St. Thomas, Jamaica"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 transition-all duration-300" />

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-lg">
            Flavors & Traditions
          </p>
        </div>

        <div className="relative w-full max-w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/png/festival.png"
            alt="Nightlife"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 transition-all duration-300" />

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-lg">
            Nightlife
          </p>
        </div>

        <div className="relative w-full max-w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/png/mermans.png"
            alt="Art & Craft"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 transition-all duration-300" />

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-lg">
            Art & Craft
          </p>
        </div>
      </div>
       <div className="mt-7 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="mx-auto md:mx-0">
          <button className="bg-[#00B7FF] hover:bg-[#00A3E6] text-white font-medium px-8 py-3 rounded-full transition-all md:mx-0 mx-auto ">
           Explore All Experiences
        </button>
        </div>

       <div className="md:flex flex-1 justify-end">
           <div className="md:flex hidden w-full h-[0.5px] bg-gray-500"></div>
        </div>
         <div className="flex md:hidden w-full h-[0.5px] bg-gray-500 mb-6"></div>

      </div>
    </div>
  );
};

export default SoulLand;
