"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  image: string;
  borderColor: string; 
  highlight?: string; 
};

const testimonials: Testimonial[] = [
  {
    name: "Amara O.",
    location: "London",
    text:
      "As a Caribbean traveler exploring Africa for the first time, I was nervous. But the platform made everything so easy, the guides were local, the rides felt safe, and the recommendations were spot-on.",
    image: "/assets/png/ProfileOne.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Kwame B.",
    location: "Accra",
    text:
      "The experience was incredible. I discovered hidden gems I'd never have found on my own. Highly recommended!",
    image: "/assets/png/ProfileTwo.png",
    borderColor: "", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Lina D.",
    location: "Nairobi",
    text:
      "Everything felt seamless and personalized. I felt welcomed, guided, and understood at every step.",
    image: "/assets/png/ProfileThree.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Marcus T.",
    location: "Kingston",
    text:
      "A journey that connected me to my roots in ways I never imagined. Every moment was thoughtfully curated.",
    image: "/assets/png/ProfileOne.png", 
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Zara K.",
    location: "Cape Town",
    text:
      "From booking to return, everything was smooth. The local guides made all the difference in my experience.",
    image: "/assets/png/ProfileTwo.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "David M.",
    location: "Lagos",
    text:
      "The platform understood what I was looking for. It felt like coming home, even though I'd never been there before.",
    image: "/assets/png/ProfileThree.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Amina S.",
    location: "Dakar",
    text:
      "Incredible attention to detail. Every recommendation felt personal and authentic to the destination.",
    image: "/assets/png/ProfileOne.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
  {
    name: "Kojo S.",
    location: "France",
    text:
      "Incredible attention to detail. Every recommendation felt personal and authentic to the destination.",
    image: "/assets/png/ProfileTwo.png",
    borderColor: "border-yellow-400", 
    highlight: "I explored, I learned, I belonged.",
  },
];

const DashedLine = ({
  fromX,
  fromY,
  toX,
  toY,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}) => (
  <line
    x1={fromX}
    y1={fromY}
    x2={toX}
    y2={toY}
    stroke="#60A5FA" 
    strokeWidth="2"
    strokeDasharray="8 4"
    className="pointer-events-none"
    opacity="0.8"
  />
);

export default function TravelersTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full bg-[#071109] text-white py-16 md:py-24 overflow-hidden lg:min-h-[130vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-3 md:mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
          Every trip leaves a story behind. Our travelers share moments that
          made their journeys unforgettable.
        </p>
      </div>
      <div className="hidden lg:block">
        <div className="absolute left-[50px] lg:left-[80px] 2xl:left-[200px] transform translate-y-[40px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/TopLeftLine.svg"
            alt={testimonials[4].name}
            width={300}
            height={300}
            className="w-[300px] md:w-[500px] lg:w-[500px] 2xl:w-[710px]"
          />
        </div>
        <div className="absolute left-[50px] lg:left-[100px] 2xl:left-[200px] rotate-180 transform top-[500px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/MiddleJoinLine.svg"
            alt={testimonials[4].name}
            width={150}
            height={150}
            className="pointer-events-none"
          />
        </div>
        <div className="absolute left-[50px] lg:left-[100px] 2xl:left-[200px] transform top-[750px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/TopRightLine.svg"
            alt={testimonials[4].name}
            width={300}
            height={300}
            className="w-[300px] md:w-[500px] lg:w-[500px] 2xl:w-[710px]"
          />
        </div>
        <div className="absolute right-[50px] lg:right-[65px] 2xl:right-[200px] transform translate-y-[40px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/TopRightLine.svg"
            alt={testimonials[4].name}
            width={300}
            height={300}
            className="w-[300px] md:w-[500px] lg:w-[500px] 2xl:w-[710px]"
          />
        </div>
        <div className="absolute right-[50px] lg:right-[100px] 2xl:right-[200px] transform top-[550px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/MiddleJoinLine.svg"
            alt={testimonials[4].name}
            width={150}
            height={150}
            className="pointer-events-none"
          />
        </div>
        <div className="absolute right-[50px] lg:right-[100px] 2xl:right-[200px] transform top-[750px] z-10 pointer-events-none">
          <Image
            src="/assets/svgs/TopLeftLine.svg"
            alt={testimonials[4].name}
            width={300}
            height={300}
            className="w-[300px] md:w-[500px] lg:w-[500px] 2xl:w-[710px]"
          />
        </div>
      </div>

      <div>
        <div className="hidden lg:block relative">
          <button
            onClick={() => setActiveIndex(0)}
            className={`absolute z-30 left-[48%] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 0
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileOne.png"
              alt={testimonials[0].name}
              fill
              className="object-cover"
            />
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className={`absolute z-30 left-[20px] 2xl:left-[100px] top-[150px] 2xl:top-[165px] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 1
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileTwo.png"
              alt={testimonials[1].name}
              fill
              className="object-cover"
            />
          </button>

          <button
            onClick={() => setActiveIndex(2)}
            className={`absolute z-30 w-20 h-20 left-[160px] 2xl:left-[240px] top-[285px] md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 2
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileThree.png"
              alt={testimonials[2].name}
              fill
              className="object-cover"
            />
          </button>

          <button
            onClick={() => setActiveIndex(3)}
            className={`absolute z-30 w-20 h-20 left-[30px] 2xl:left-[100px] top-[385px] md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 3
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileFour.png"
              alt={testimonials[3].name}
              fill
              className="object-cover"
            />
          </button>

          <button
            onClick={() => setActiveIndex(4)}
            className={`absolute z-30 left-[48%] top-[550px] 2xl:top-[600px] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 4
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileOne.png"
              alt={testimonials[4].name}
              fill
              className="object-cover"
            />
          </button>

          <button
            onClick={() => setActiveIndex(5)}
            className={`absolute z-30 w-20 h-20 right-[20px] 2xl:right-[100px] top-[150px] 2xl:top-[165px] md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 5
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileTwo.png"
              alt={testimonials[5].name}
              fill
              className="object-cover"
            />
          </button>

          <button
            onClick={() => setActiveIndex(6)}
            className={`absolute z-30 w-20 h-20 right-[160px] 2xl:right-[250px] top-[285px] md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 6
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileThree.png"
              alt={testimonials[6].name}
              fill
              className="object-cover"
            />
          </button>
          <button
            onClick={() => setActiveIndex(7)}
            className={`absolute z-30 w-20 h-20 right-[30px] 2xl:right-[100px] top-[385px] md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
              activeIndex === 7
                ? "border-yellow-400 scale-125 shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src="/assets/png/ProfileFour.png"
              alt={testimonials[7].name}
              fill
              className="object-cover"
            />
          </button>
        </div>
        <div className="lg:relative mt-8 md:mt-16 mx-auto text-center bottom-[-250px] flex flex-col items-center">
          <div className="lg:hidden mb-6 flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-yellow-400/30">
              <Image
                src={active?.image ?? "/assets/png/ProfileOne.png"}
                alt={active?.name ?? "Traveler"}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-yellow-200/90">
              {active?.name}, {active?.location}
            </p>
          </div>
          {active?.highlight && (
            <h3 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-4 md:mb-6 leading-tight">
              {active.highlight}
            </h3>
          )}
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-[300px] lg:max-w-[400px] mx-auto text-center">
            {active?.text}
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-white hidden lg:block">
            {active?.name}, {active?.location}
          </p>
          {/* <div className="mt-6 hidden lg:flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div> */}
          <div className="lg:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
