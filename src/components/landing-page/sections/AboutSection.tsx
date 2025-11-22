import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="relative -mt-[250px] pt-[250px]">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 19, 9, 0.01) 0%, rgba(11, 19, 9, 0.01) 5%, rgba(11, 19, 9, 0.01) 15%, rgba(11, 19, 9, 0.01) 25%, rgba(11, 19, 9, 0.4) 40%, rgba(11, 19, 9, 0.5) 60%, rgba(11, 19, 9, 0.8) 80%, rgba(11, 19, 9, 1) 100%)",
          height: "250px",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 md:py-20 py-10 
                      flex flex-col md:flex-row justify-center  gap-10">

        <div className="md:flex-1">
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px] 
                         text-[#fdf3e2] max-w-[421px]">
            To simplify diaspora travel and reconnect the world with the soul of Africa.
            From vibrant cities to serene coasts, Cleaques brings together the people,
            places, and stories that make every journey unforgettable.
          </p>
        </div>

        <div className="relative md:flex-1 max-w-[550px] 4xl:max-w-[700px]">
          <Image
            src="/assets/png/DiasporaTravels.png"
            alt=""
            width={442}
            height={443}
            className="w-full h-auto  mx-auto rounded-[30px]"
            loading="lazy"
          />
        </div>

        <div className="md:flex-1 flex md:justify-end md:items-end">
          <p className="font-[500] 
                         text-[26px] sm:text-[32px] md:text-[40px] 
                         text-[#f7c31f] 
                         max-w-[640px] leading-tight text-left md:text-right">
            Your story doesn’t end where you live, it continues where your roots begin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
