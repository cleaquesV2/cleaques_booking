"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface EmptyStateProps {
  text: string;
  imageSrc: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const EmptyState: React.FC<EmptyStateProps> = ({ text, imageSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center gap-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image src={imageSrc} alt="No data" className="w-48 h-48" width={96} height={96} />
      <p className="text-white text-base font-medium max-w-sm">{text}</p>
    </motion.div>
  );
};
