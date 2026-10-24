"use client";

import { useEffect, useState } from "react";

export default function SitePreloader() {
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 600);

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
    }, 950);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading..."
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FFF8E7] transition-opacity duration-300 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Simple Clean Circular Loading Spinner */}
      <div className="h-11 w-11 rounded-full border-[3.5px] border-amber-200 border-t-[#D89B18] animate-spin" />

      {/* Simple Text */}
      <p className="mt-4 text-sm sm:text-base font-medium text-stone-700 tracking-wide">
        Loading...
      </p>
    </div>
  );
}
