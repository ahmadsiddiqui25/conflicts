"use client";

import { useState } from "react";

const OUTCOMES = [
  {
    key: "resolved",
    label: "Resolved",
    description: "All required participants approve the agreement.",
  },
  {
    key: "partial",
    label: "Partially Resolved",
    description: "Some issues are agreed upon, others remain open.",
  },
  {
    key: "dissolved",
    label: "Dissolved",
    description: "The room closes without a complete agreement.",
  },
] as const;

export function OutcomeSelector() {
  const [selected, setSelected] = useState<(typeof OUTCOMES)[number]["key"]>("resolved");
  const [closed, setClosed] = useState(false);

  if (closed) {
    const outcome = OUTCOMES.find((o) => o.key === selected)!;
    return (
      <div className="rounded-[10px] border border-peace-primary/40 bg-peace-light-pink/30 p-6 text-center">
        <p className="text-lg font-medium text-peace-secondary">Room closed as {outcome.label}</p>
        <p className="mt-2 text-sm text-peace-body">
          A closing summary has been shared with all participants.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {OUTCOMES.map((outcome) => (
          <button
            key={outcome.key}
            type="button"
            onClick={() => setSelected(outcome.key)}
            className={`rounded-[10px] border p-4 text-left text-sm transition-colors ${
              selected === outcome.key
                ? "border-peace-primary bg-peace-light-pink/30"
                : "border-peace-gray hover:bg-peace-light-pink/10"
            }`}
          >
            <p className="font-semibold text-peace-heading">{outcome.label}</p>
            <p className="mt-1 text-peace-body">{outcome.description}</p>
          </button>
        ))}
      </div>

      <label className="flex items-start gap-3 text-sm text-peace-body">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--peace-primary)]" />
        I consent to sharing de-identified lessons from this room for the future Peace Wisdom
        Library. Nothing is retained without this consent.
      </label>

      <button
        type="button"
        onClick={() => setClosed(true)}
        className="peace-gradient-bg rounded-full px-8 py-3.5 text-sm font-semibold text-peace-white"
      >
        Close Peace Room
      </button>
    </div>
  );
}
