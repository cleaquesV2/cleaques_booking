"use client";
import React from "react";

function HydrationComponent({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? <>{children}</> : null;
}

export default HydrationComponent;
