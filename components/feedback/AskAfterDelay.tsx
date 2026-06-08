"use client";

import { useAskAfterDelay } from "@verdancy/sdk/react";

/**
 * Invisible trigger: fires a Verdancy question (by slug) `ms` milliseconds
 * after this component mounts. Renders nothing.
 */
export function AskAfterDelay({ slug, ms }: { slug: string; ms: number }) {
  useAskAfterDelay(slug, ms);
  return null;
}
