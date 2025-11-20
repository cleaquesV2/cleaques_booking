import '../utils/polyfill-storage';
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/contexts/providers";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import HydrationComponent from "@/components/ui/hydration";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils";
// import "react-date-range/dist/styles.css";
 // main css file
// import "react-date-range/dist/theme/default.css"; 
// theme css file
import { CurrencyProvider } from "@/contexts/currency-provider";
// import TawkProvider from "@/components/providers/TawkProvider";
// import cera from "./";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleaques",
  description: "Official Cleaques WebApp"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/cleaques.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/cleaques.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/cleaques.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#000000" />
      {/* <body className={cn(cera.className, inter.className)}> */}
      <body className={cn("bg-black min-h-screen", inter.className)}>
      {/* <TawkProvider /> */}
      <NextTopLoader height={4} showSpinner={false} />
        <HydrationComponent>
          <QueryProvider>
            <CurrencyProvider>
              {children}
            </CurrencyProvider>
            <Toaster position="top-right" />
          </QueryProvider>
        </HydrationComponent>
      </body>
    </html>
  );
}
