// components/PageLoader.tsx
"use client"; // Mark this component as client-side

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Hook to get the current route

  useEffect(() => {
    // Show the loader on route change
    setLoading(true);

    // Simulate a delay for the loading spinner to be visible (optional)
    const timeout = setTimeout(() => setLoading(false), 1300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-950 z-50">
      <div className="loader"></div>
    </div>
  );
};
