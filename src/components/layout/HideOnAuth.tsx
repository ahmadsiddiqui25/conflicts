"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

const AUTH_PATHS = ["/login", "/signup"];

export function HideOnAuth({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (AUTH_PATHS.includes(pathname)) return null;
  return <>{children}</>;
}
