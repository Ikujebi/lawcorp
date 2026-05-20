// components/ActivityTracker.tsx

"use client";

import {
  useEffect,
  useRef,
} from "react";

import { usePathname } from "next/navigation";

import { trackActivity } from "@/utils/analytics";

export default function ActivityTracker() {
  const pathname = usePathname();

  const previousPath =
    useRef("");

  useEffect(() => {
    if (
      previousPath.current === pathname
    )
      return;

    previousPath.current = pathname;

    trackActivity(
      "page_view",
      pathname
    );
  }, [pathname]);

  useEffect(() => {
    const start =
      Date.now();

    return () => {
      const duration =
        Math.round(
          (Date.now() - start) / 1000
        );

      trackActivity(
        "page_leave",
        pathname,
        {
          durationSeconds:
            duration,
        }
      );
    };
  }, [pathname]);

  return null;
}