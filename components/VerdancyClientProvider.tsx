"use client";

import type { ReactNode } from "react";
import { VerdancyProvider } from "@verdancy/sdk/react";

// Publishable keys (vpk_...) are client-safe identifiers, not secrets —
// they're scoped to allowed origins and safe to ship in the bundle.
const VERDANCY_PUBLISHABLE_KEY = "vpk_lQEW1bKh6Ar8zOem48dfNVcoBtruXGq5";

export function VerdancyClientProvider({ children }: { children: ReactNode }) {
  return (
    <VerdancyProvider
      publicKey={VERDANCY_PUBLISHABLE_KEY}
      introText="I'm improving this site and may ask a quick question or two as you browse. Skip anytime."
      theme={{ accent: "#1e3a8a", background: "#ffffff", text: "#111827" }}
    >
      {children}
    </VerdancyProvider>
  );
}
