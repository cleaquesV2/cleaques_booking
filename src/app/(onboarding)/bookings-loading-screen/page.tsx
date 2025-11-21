"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0D1510] text-white flex flex-col items-center justify-center">
      
      {/* CAR + CLOUDS + ROAD */}
      <div className="relative w-[250px] h-[150px]">

        {/* MOVING CLOUD */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 80 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0"
        >
          <Image
            src="/assets/svgs/Cloud.svg"
            alt="cloud"
            width={60}
            height={40}
          />
        </motion.div>

        {/* CAR BOUNCE */}
        <motion.div
          
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="absolute bottom-5 left-[50%] translate-x-[-50%]"
        >
          <Image
            src="/assets/svgs/Carr.svg"
            alt="car"
            width={110}
            height={60}
          />
        </motion.div>

        {/* MOVING ROAD (SEAMLESS LOOP) */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden h-[20px]">
  <motion.div
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 1.2,
      ease: "linear",
    }}
    className="flex"
  >
    {/* Duplicate road segment 1 */}
    <Image
      src="/assets/svgs/Line.svg"
      alt="road"
      width={250}
      height={20}
      className="w-[250px] shrink-0"
    />

    {/* Duplicate road segment 2 */}
    <Image
      src="/assets/svgs/Line.svg"
      alt="road"
      width={250}
      height={20}
      className="w-[250px] shrink-0"
    />
  </motion.div>
</div>

      </div>

      <p className="text-center mt-6 text-[#FDF3E2] w-[70%] text-[24px]">
        We’re matching your preferences with the best flights, stays, and experiences.
      </p>
    </div>
  );
}
