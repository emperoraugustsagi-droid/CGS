"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const introSelectors = [
  ".page-intro__inner",
  ".section-heading",
  ".section-intro",
  ".research-gallery__header",
  ".team-page-section__heading",
  ".home-gallery__heading",
  ".leadership__copy",
  ".activity__copy",
  ".page-visual__copy",
  ".page-grid.page-grid--wide:has(> .prose) > div:first-child",
];

const mediaSelectors = [
  ".page-visual__media",
  ".person-feature__media",
  ".activity__media",
  ".about-hero__media",
  ".director-card figure",
];

const groupSelectors = [
  ".programme-list",
  ".research-gallery__grid",
  ".team-profile-grid",
  ".principle-grid",
  ".about-fields",
  ".research-grid",
  ".research-pathways",
  ".activity-record-list",
  ".contact-route-grid",
  ".event-people",
  ".event-subtheme-grid",
  ".event-deadlines",
  ".about-next-links",
  ".research-next-links",
  ".activity-next-links",
  ".engage__options",
];

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = new Set<HTMLElement>();

    const register = (element: HTMLElement, type: "reveal" | "media" | "item") => {
      if (element.dataset.motionBound === "true") return;
      element.dataset.motion = type;
      element.dataset.motionBound = "true";
      targets.add(element);
    };

    introSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        register(element, "reveal");
      });
    });

    mediaSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        register(element, "media");
      });
    });

    groupSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement)) return;
          child.style.setProperty("--motion-order", String(index % 6));
          register(child, "item");
        });
      });
    });

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            element.classList.add("is-visible");
            observer.unobserve(element);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      targets.forEach((element) => observer.observe(element));

      const visibleImmediately = Array.from(targets).filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      });

      window.requestAnimationFrame(() => {
        visibleImmediately.forEach((element) => element.classList.add("is-visible"));
      });

      return () => observer.disconnect();
    }
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;

    const updateHeader = () => {
      if (window.scrollY > 24) {
        header.dataset.scrolled = "true";
      } else {
        delete header.dataset.scrolled;
      }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [pathname]);

  return null;
}
