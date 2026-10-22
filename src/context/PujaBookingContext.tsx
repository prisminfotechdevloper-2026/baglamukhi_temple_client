"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface PujaBookingContextType {
  isOpen: boolean;
  prefilledPuja: string;
  openBookingModal: (pujaTitle?: string) => void;
  closeBookingModal: () => void;
}

const PujaBookingContext = createContext<PujaBookingContextType | undefined>(undefined);

export function PujaBookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledPuja, setPrefilledPuja] = useState("");

  const openBookingModal = useCallback((pujaTitle?: string) => {
    setPrefilledPuja(pujaTitle || "");
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <PujaBookingContext.Provider
      value={{
        isOpen,
        prefilledPuja,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </PujaBookingContext.Provider>
  );
}

export function usePujaBooking() {
  const context = useContext(PujaBookingContext);
  if (!context) {
    throw new Error("usePujaBooking must be used within a PujaBookingProvider");
  }
  return context;
}
