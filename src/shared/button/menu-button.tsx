"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./button";

type MenuItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type MenuButtonProps = {
  label: string;
  items: MenuItem[];
  icon?: React.ReactNode; // custom icon, e.g. from Lucide
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  className?: string;
  menuPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
};

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  items,
  icon = <ChevronDown size={16} />,
  bgColor = "#00AEEF",
  borderColor = "#00AEEF",
  textColor = "#ffffff",
  className,
  menuPosition = "left",
  size = "medium",
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div className="relative inline-block text-left">
      <Button
        ref={buttonRef}
        onClick={toggleMenu}
        size={size}
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          color: textColor,
          border: "1px solid",
          borderRadius: "15px"
        }}
        className={cn("flex items-center gap-2", className)}
        endAdornment={icon}
      >
        {label}
      </Button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
              menuPosition === "right" ? "right-0" : "left-0"
            )}
          >
            <div className="py-1">
              {items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!item.disabled) item.onClick();
                    closeMenu();
                  }}
                  disabled={item.disabled}
                  className={cn(
                    "flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                    item.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuButton;