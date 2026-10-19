"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

const AUTH_PATHS = ["/login", "/signup"];
const FLOW_PREFIXES = ["/create", "/consent", "/conversation", "/room"];

export function FooterGate({ full, minimal }: { full: ReactNode; minimal: ReactNode }) {
  const pathname = usePathname();
  if (AUTH_PATHS.includes(pathname)) return null;
  const inFlow = FLOW_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  return <>{inFlow ? minimal : full}</>;
}
