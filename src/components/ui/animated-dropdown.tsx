"use client";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import React from "react";
// import pfp from "@/assets/img/pfp.png";
// import { MAIN_CLIENT_ROUTE } from "@/app/constants";
// import { useAuth } from "@/hooks/use-auth";
// import { StatusAlertModal } from "@/shared/dialog/app-status-alert-modal";

// const user = {
//   name: "Jane Doe",
//   avatar: pfp,
//   accountType: "Premium",
// };
interface UserProps {
  firstName: string;
  lastName: string;
  avatar: string;
}

export const AnimatedDropdown = ({ firstName, lastName, avatar }: UserProps) => {
  const [open, setOpen] = React.useState(false);
  // const { logOut, } = useAuth();

  return (
    <>
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src={avatar}
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <div className="flex flex-col leading-none text-left">
            <span className="text-white font-medium text-sm">{firstName} {lastName}</span>
            <span className="text-gray-400 text-xs">User</span>
          </div>
          <MdKeyboardArrowDown className="text-white text-xl" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal forceMount>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Content asChild sideOffset={8} align="end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1A1A1A] text-white rounded shadow-lg p-2 min-w-40 z-50"
              >
                <DropdownMenu.Item
                  className="px-3 py-2 text-sm hover:bg-[#2A2A2A] rounded cursor-pointer"
                  // onSelect={() => router.push(MAIN_CLIENT_ROUTE.MY_PROFILE)}
                >
                  View Profile
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px my-1 bg-gray-600" />
                <DropdownMenu.Item
                  className="px-3 py-2 text-sm text-red-400 hover:bg-[#2A2A2A] rounded cursor-pointer"
                  onSelect={() => {
                    //todo: replace with real logout
                    console.log("Logging out...");
                    // setLogOpen(true);
                  }}
                >
                  Logout
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    {/* Logout confirmation modal */}
    {/* <StatusAlertModal
        open={logOpen}
        onClose={() => setLogOpen(false)}
        actionText="Logout"
        onAction={() => logOut()}
        DivHeaderProps={{ className: "border-none" }}
        DivFooterProps={{ className: "border-none" }}
        ActionButton={{
          variant: "contained",
          color: "error",
          size: "large",
          className: "rounded-xl !font-normal",
        }}
        SecActionButton={{
          color: "error",
          variant: "outlined",
          size: "large",
          className: "rounded-xl !font-normal",
        }}
        content="Are you sure you want to log out?"
        title="Logout"
    /> */}
    </>
  );
};