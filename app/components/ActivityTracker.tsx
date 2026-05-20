// components/ActivityTracker.tsx

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackActivity } from "@/utils/trackActivity";

export default function ActivityTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackActivity(
      "Page Visit",
      pathname
    );
  }, [pathname]);

  return null;
}