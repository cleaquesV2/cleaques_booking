"use client";

import AppErrorBoundary from "@/shared/error-boundary/error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppErrorBoundary>{children}</AppErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-right" />
    </QueryClientProvider>
  );
}
