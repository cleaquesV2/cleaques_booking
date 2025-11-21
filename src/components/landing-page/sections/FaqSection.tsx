"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Do I need to create an account before I can book a trip?",
    answer:
      "No, you can browse and explore trips without an account. However, creating an account will allow you to save favorites, manage bookings, and receive personalized recommendations.",
  },
  {
    id: 2,
    question: "Can I pay in my local currency?",
    answer:
      "Yes, we support payments in multiple local currencies. During checkout, you'll be able to select your preferred currency from the available options.",
  },
  {
    id: 3,
    question: "Can I plan my trip with AI?",
    answer:
      "Our AI-powered trip planner can help you create personalized itineraries based on your preferences, budget, and travel style.",
  },
  {
    id: 4,
    question: "How do I know the hotels or rides are legit?",
    answer:
      "All our partners are verified and reviewed by our community. We perform background checks and ensure they meet our quality standards.",
  },
  {
    id: 5,
    question: "What if I need help during my trip?",
    answer:
      "Our 24/7 customer support team is always available. You can reach us via chat, email, or phone for any assistance you need.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 mb-12">
          <div className="flex md:hidden w-full h-[0.5px] bg-gray-500 mb-6"></div>
          <div>
            <h2 className="text-center md:text-left text-4xl md:text-5xl font-bold text-[#f7c31f] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-center md:text-left text-base md:text-lg text-[#FDF3E2]">
              Because great journeys start with clear answers.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="w-full h-[2px] bg-gray-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-4 max-w-[834px]">
            {faqs.map((faq) => (
              <div
                key={faq?.id}
                className="border-b border-yellow-100/20 pb-4 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(faq?.id)}
                  className="flex items-center justify-between w-full py-4 px-2 rounded-lg transition-colors duration-200"
                >
                  <span className="text-base md:text-lg text-yellow-50/90 text-left font-medium">
                    {faq?.question}
                  </span>
                  <span className="text-[24px] lg:text-[43px] text-yellow-400 font-light ml-4 flex-shrink-0 transition-all duration-300">
                    {expandedId === faq?.id ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {expandedId === faq?.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-4">
                        <p className="text-sm md:text-base text-yellow-50/60 leading-relaxed">
                          {faq?.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="mt-8 pt-4 md:h-[500px] flex flex-col md:justify-end">
              <p className="text-base md:text-[32px] leading-[130%] text-[#00AEEF] font-medium">
                Still got questions?
              </p>
              <p className="text-sm text-[#FDF3E2] mt-1">Chat with us →</p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden sticky top-8 relative">
              <Image
                src="/assets/png/KenyanWoman.png"
                alt="Kenyan woman with traditional beaded accessories"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 py-6">
                <p className="text-sm md:text-base font-medium text-[#F7C31F]">
                  A tribe in Kenya showing their beautiful culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
