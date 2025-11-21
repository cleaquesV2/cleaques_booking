import React from "react";
import Image from "next/image";

const Destinations = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 md:py-20 min-h-[800px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
        <div className="flex md:hidden w-full h-[0.5px] bg-gray-500 mb-6"></div>
        <div className="mx-auto md:mx-0">
          <h1 className="text-center md:text-left text-[28px] md:text-[32px] font-[600] text-[#f7c31f]">
            Top Destinations
          </h1>
          <p className="text-center md:text-left text-sm md:text-base text-[#fdf3e2]/90 mt-1 max-w-[462px]">
            From Africa’s golden shores to the Caribbean’s turquoise waters,
            explore destinations that sing your language of warmth and wonder.
          </p>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-end">
          <div className="w-full h-[0.5px] bg-gray-500"></div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <div className="relative w-full h-[333px] md:w-full md:max-w-[500px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/assets/png/Lagos.png"
            alt="Lagos, Nigeria"
            fill
            className="object-cover rounded-[30px] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1309]/70 via-[#0b1309]/20 to-transparent group-hover:from-[#0b1309]/90 group-hover:via-[#0b1309]/50 transition-all duration-300"></div>

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-[24px] md:text-[32px] z-10 transition-all duration-300 group-hover:text-white">
            Lagos, Nigeria
          </p>
        </div>

        <div className="relative w-full h-[333px] md:w-full md:max-w-[500px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/assets/png/Accra.png"
            alt="Accra, Ghana"
            fill
            className="object-cover rounded-[30px] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1309]/70 via-[#0b1309]/20 to-transparent group-hover:from-[#0b1309]/90 group-hover:via-[#0b1309]/50 transition-all duration-300"></div>

          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-[24px] md:text-[32px] z-10 transition-all duration-300 group-hover:text-white">
            Accra, Ghana
          </p>
        </div>

        <div className="relative w-full h-[333px] md:w-full md:max-w-[500px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/assets/png/Jamaica.png"
            alt="St. Thomas, Jamaica"
            fill
            className="object-cover rounded-[30px] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1309]/70 via-[#0b1309]/20 to-transparent group-hover:from-[#0b1309]/90 group-hover:via-[#0b1309]/50 transition-all duration-300"></div>
          <p className="absolute bottom-4 left-4 text-[#fdf3e2] font-semibold text-[24px] md:text-[32px] z-10 transition-all duration-300 group-hover:text-white">
            St. Thomas, Jamaica
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end mt-8 gap-4">
        <Image
          src="/assets/svgs/ArrowLeft.svg"
          alt="Previous"
          width={50}
          height={50}
        />
        <Image
          src="/assets/svgs/ArrowRight.svg"
          alt="Next"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Destinations;
