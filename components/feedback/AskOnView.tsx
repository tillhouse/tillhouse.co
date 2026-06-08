"use client";

import type { Ref, ReactNode } from "react";
import { useAskOnView, type UseAskOnViewOptions } from "@verdancy/sdk/react";

/**
 * Wraps a section of the page and fires a Verdancy question (by slug) the
 * first time the wrapped element scrolls into view. Renders a plain `<div>`
 * so it can drop in around existing markup without changing layout.
 */
export function AskOnView({
  slug,
  className,
  options,
  children,
}: {
  slug: string;
  className?: string;
  options?: UseAskOnViewOptions;
  children: ReactNode;
}) {
  // The SDK's hook types are built against React 19's `RefObject<T | null>`;
  // React 18's `Ref<T>` doesn't accept that shape directly, so we narrow it
  // here. The runtime behavior (a plain mutable ref object) is identical.
  const ref = useAskOnView<HTMLDivElement>(slug, options) as Ref<HTMLDivElement>;
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
