/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Button from "../button/button";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: any;
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert" className=" shadow-lg px-3 py-4 flex flex-col gap-3 items-start">
      <p className=" animate-bounce hover:animate-none text-error-100 font-semibold text-4xl">Opps!!! Something went wrong:</p>
      <pre className=" text-sm italic text-error-150">{error.message}</pre>
      <div className=" break-words">{JSON.stringify(error.stack)}</div>
      <Button variant="contained" color="error" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}

const myErrorHandler = (error: Error, info: React.ErrorInfo) => {
  console.log({ error, info: info.componentStack });
};

export const AppErrorBoundary = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;
