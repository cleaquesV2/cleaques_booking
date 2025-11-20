import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#0B1309] text-white ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
