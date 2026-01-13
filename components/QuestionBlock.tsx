"use client";

import { useEightBit } from "./EightBitProvider";

export function QuestionBlock() {
  const { toggleEightBit, isEightBit } = useEightBit();

  return (
    <button
      onClick={toggleEightBit}
      className={`transition-colors relative group ${isEightBit ? "text-yellow-500" : "text-gray-600 hover:text-accent"}`}
      aria-label="Toggle 8-bit mode"
      title="???"
    >
      {/* Simple outline question block - matches Lucide icon style */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform ${isEightBit ? "animate-bounce" : "group-hover:scale-110"}`}
      >
        {/* Outer box */}
        <rect x="3" y="3" width="18" height="18" rx="2" />
        {/* Question mark */}
        <path d="M9 9h.01" />
        <path d="M9 9a3 3 0 0 1 5.12 2.12c0 1.38-1.12 2-2.12 2.5V15" />
        <path d="M12 18h.01" />
      </svg>
    </button>
  );
}

