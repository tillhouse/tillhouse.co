"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EightBitContextType {
  isEightBit: boolean;
  toggleEightBit: () => void;
}

const EightBitContext = createContext<EightBitContextType>({
  isEightBit: false,
  toggleEightBit: () => {},
});

export function useEightBit() {
  return useContext(EightBitContext);
}

export function EightBitProvider({ children }: { children: ReactNode }) {
  const [isEightBit, setIsEightBit] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved preference
    const saved = localStorage.getItem("8bitMode");
    if (saved === "true") {
      setIsEightBit(true);
    }
  }, []);

  const toggleEightBit = () => {
    setIsEightBit((prev) => {
      const newValue = !prev;
      localStorage.setItem("8bitMode", String(newValue));
      return newValue;
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <EightBitContext.Provider value={{ isEightBit, toggleEightBit }}>
      <div className={isEightBit ? "eight-bit-mode" : ""}>{children}</div>
    </EightBitContext.Provider>
  );
}

