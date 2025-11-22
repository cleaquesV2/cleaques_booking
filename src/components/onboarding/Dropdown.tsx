"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  placeholder?: string;
  searchable?: boolean;
  onSelect: (value: string) => void;
  className?: string;
  labelClassName?: string;
  buttonClassName?: string;
  mobile?: boolean;
}

export default function Dropdown({
  label,
  value,
  options,
  placeholder = "Select an option",
  searchable = false,
  onSelect,
  className = "",
  labelClassName = "",
  buttonClassName = "",
  mobile = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onSelect(optionValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || value || placeholder;

  if (mobile) {
    return (
      <div ref={dropdownRef} className={`relative ${className}`}>
        <label className={`block text-[12px] text-[#FDF3E2] mb-2 ${labelClassName}`}>
          {label}
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-3 py-2 bg-transparent rounded-[12px] border border-gray-600 text-left text-gray-300 flex items-center justify-between hover:border-cyan-400 transition-colors text-sm ${buttonClassName}`}
        >
          <span>{selectedLabel}</span>
          <ChevronDown size={16} className="text-gray-400" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-1 bg-[#0f1419] border border-gray-600 rounded-[12px] shadow-lg z-20 max-h-[250px] overflow-hidden flex flex-col"
            >
              {searchable && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 bg-[#1a1f24] border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none text-xs"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              <div className={`overflow-y-auto ${searchable ? "max-h-[200px]" : "max-h-[250px]"}`}>
                {filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="w-full px-3 py-2 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-xs"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <label className={`block text-[16px] text-[#FDF3E2] mb-3 ${labelClassName}`}>
        {label}
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-transparent border border-[#fdf3e2] rounded-[12px] text-left text-gray-300 flex items-center justify-between hover:border-[#fdf3e2] transition-colors ${buttonClassName}`}
      >
        <span>{selectedLabel}</span>
        <ChevronDown size={20} className="text-gray-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#0B1309] border border-gray-600 rounded-[12px] shadow-lg z-10 max-h-[300px] overflow-hidden flex flex-col"
          >
            {searchable && (
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-[#0B1309] border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className={`overflow-y-auto ${searchable ? "max-h-[250px]" : "max-h-[300px]"}`}>
              {filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="w-full px-4 py-3 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-sm"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

