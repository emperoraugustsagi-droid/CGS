"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.location.hash) return;

    const root = document.documentElement;
    const previousInlineBehavior = root.style.scrollBehavior;

    // Route changes should land at the top before the next frame paints.
    // Temporarily disable the site's smooth-scroll rule so navigation feels
    // like a new page appearing, not the old page visibly scrolling upward.
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousInlineBehavior;
  }, [pathname]);

  return null;
}
