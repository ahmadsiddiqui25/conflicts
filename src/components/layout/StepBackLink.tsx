"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STEPS, stepForPath } from "@/lib/steps";

export function StepBackLink() {
  const pathname = usePathname();
  const current = stepForPath(pathname);

  if (!current || current.number === 1) return null;

  const prev = STEPS.find((step) => step.number === current.number - 1);
  if (!prev) return null;

  return (
    <Link
      href={prev.href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-peace-secondary transition-colors hover:text-peace-primary"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path
          d="M15 5 8 12l7 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </Link>
  );
}
