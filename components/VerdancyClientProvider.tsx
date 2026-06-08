"use client";

import type { ReactNode } from "react";
import { VerdancyProvider } from "@verdancy/sdk/react";

// Publishable keys (vpk_...) are client-safe identifiers, not secrets —
// they're scoped to allowed origins and safe to ship in the bundle.
const VERDANCY_PUBLISHABLE_KEY = "vpk_lQEW1bKh6Ar8zOem48dfNVcoBtruXGq5";

export function VerdancyClientProvider({ children }: { children: ReactNode }) {
  return (
    <VerdancyProvider publicKey={VERDANCY_PUBLISHABLE_KEY}>
      {children}
    </VerdancyProvider>
  );
}
