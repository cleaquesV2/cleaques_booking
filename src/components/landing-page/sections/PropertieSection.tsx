"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useCurrency } from "@/hooks/use-currency";

type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
  reviews: string;
  price: number; // Base price in NGN
  nights: string;
  category: string;
};

  const properties: Property[] = [
    {
      id: 1,
      image: "/assets/png/AjaniResorts.png",
      title: "Ajani Resorts",
      location: "Lagos, Nigeria",
      reviews: "4.9 (327 reviews)",
      price: 409486, // Base price in NGN
      nights: "for 2 nights",
      category: "Beach homes",
    },
    {
      id: 2,
      image: "/assets/png/QuazimFiesta.png",
      title: "Quazim Fiesta Shortlet",
      location: "Accra, Ghana",
      reviews: "4.8 (110 reviews)",
      price: 107486, // Base price in NGN
      nights: "for 1 night",
      category: "Beach homes",
    },
    {
      id: 3,
      image: "/assets/png/BrianInyangSuites.png",
      title: "Brain Inyang Apartments & Suites",
      location: "St. Thomas, Jamaica",
      reviews: "4.9 (80 reviews)",
      price: 205486, // Base price in NGN
      nights: "for 3 nights",
      category: "Beach homes",
    },
  ];


const TopProperties = () => {
  const { formatAmount } = useCurrency();

  const categories = [
    "Beach homes",
    "Mountain Cabins",
    "Apartments",
    "Countryside",
    "Hotels",
    "Shortlet",
    "Resort",
  ];

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [likedProperties, setLikedProperties] = useState<Set<number>>(
    new Set()
  );

  const filteredProperties = useMemo(() => {
    if (!selectedFilter) return properties;
    return properties.filter(
      (property) =>
        property.category.toLowerCase() === selectedFilter.toLowerCase()
    );
  }, [selectedFilter]);

  const handleFilterClick = (category: string) => {
    setSelectedFilter(selectedFilter === category ? null : category);
  };

  const handleLikeClick = (propertyId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProperties((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(propertyId)) {
        newSet.delete(propertyId);
      } else {
        newSet.add(propertyId);
      }
      return newSet;
    });
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-left text-[28px] sm:text-[32px] font-semibold text-[#f7c31f]">
            Stay at Our Top Properties
          </h1>
          <p className="text-sm md:text-base text-[#fdf3e2]/90 mt-1 max-w-[462px]">
            From castles and villas to boats and igloos, we have it all.
          </p>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <div className="w-full max-w-[700px] border border-[#fdf3e2]/40"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
        {categories?.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterClick(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              selectedFilter === cat
                ? "text-[#2D3E26] bg-[#f7c31f]"
                : "border-[#fdf3e2]/30 text-[#fdf3e2]/80 hover:text-[#f7c31f] border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties?.map((property) => (
          <div key={property?.id} className="w-full">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-[260px] sm:h-[280px] md:h-[300px]">
                <Image
                  src={property?.image ?? ""}
                  alt={property?.title ?? ""}
                  fill
                  className="object-cover rounded-[28px]"
                  loading="lazy"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
                  <Image
                    src="/assets/svgs/leftIcon.svg"
                    alt="Left"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
                  <Image
                    src="/assets/svgs/rightIcon.svg"
                    alt="Right"
                    width={40}
                    height={40}
                  />
                </div>

                <button
                  onClick={(e) => handleLikeClick(property.id, e)}
                  className={`absolute top-3 right-3 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 ${
                    likedProperties.has(property.id)
                      ? "bg-[#f7c31f]"
                      : "bg-[#f7c31f]/40 hover:bg-[#f7c31f]"
                  }`}
                  aria-label={
                    likedProperties.has(property.id)
                      ? "Unlike property"
                      : "Like property"
                  }
                >
                  <Image
                    src="/assets/svgs/love.svg"
                    alt="love"
                    width={22}
                    height={22}
                    className={
                      likedProperties.has(property.id)
                        ? "opacity-100"
                        : "opacity-70"
                    }
                  />
                </button>
              </div>

              <div className="py-5 text-[#fdf3e2]">
                <h3 className="font-semibold text-[18px] sm:text-[20px]">
                  {property?.title}
                </h3>

                <p className="text-sm text-[#fdf3e2]">{property?.location}</p>

                <div className="flex items-center gap-1 text-sm mt-1">
                  <FaStar className="text-[#00AEEF]" />
                  <span>{property?.reviews}</span>
                </div>

                <p className="mt-3 text-[#F46036] font-semibold text-[30px] sm:text-[34px]">
                  {formatAmount(property?.price, "NGN")}
                  <span className="text-[#fdf3e2]/80 text-sm ml-1">
                    {property?.nights}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:justify-end mt-12 gap-6">
        <Image
          src="/assets/svgs/ArrowLeft.svg"
          alt="Previous"
          width={50}
          height={50}
          className="cursor-pointer"
        />

        <Image
          src="/assets/svgs/ArrowRight.svg"
          alt="Next"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default TopProperties;
