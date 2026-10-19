"use client";

import { usePathname } from "next/navigation";
import { STEPS, stepForPath } from "@/lib/steps";

export function ProgressSteps() {
  const pathname = usePathname();
  const current = stepForPath(pathname);

  if (!current) return null;

  return (
    <div className="w-full border-b border-peace-gray/60 bg-peace-light-pink/30">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 sm:px-6">
        {STEPS.map((step) => {
          const isActive = step.number === current.number;
          const isDone = step.number < current.number;
          return (
            <div key={step.number} className="flex shrink-0 items-center gap-1">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  isActive
                    ? "peace-gradient-bg text-peace-white"
                    : isDone
                      ? "bg-peace-secondary text-peace-white"
                      : "bg-peace-gray text-peace-body"
                }`}
              >
                {step.number}
              </span>
              <span
                className={`hidden text-xs font-medium sm:inline ${
                  isActive ? "text-peace-secondary" : "text-peace-body"
                }`}
              >
                {step.label}
              </span>
              {step.number !== STEPS.length && (
                <span className="mx-1 h-px w-4 shrink-0 bg-peace-gray sm:w-6" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
