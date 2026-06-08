"use client";

import { useAskOnExitIntent, type UseAskOnExitIntentOptions } from "@verdancy/sdk/react";

/**
 * Invisible trigger: fires a Verdancy question (by slug) when the visitor's
 * pointer exits toward the top edge of the viewport (or the page hides, as a
 * touch fallback). Renders nothing.
 */
export function AskOnExitIntent({
  slug,
  options,
}: {
  slug: string;
  options?: UseAskOnExitIntentOptions;
}) {
  useAskOnExitIntent(slug, options);
  return null;
}
