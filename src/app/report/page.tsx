"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["Threats", "Abuse or harassment", "Coercion", "Something else"];

export default function SafetyReportPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageShell>
        <Card className="text-center">
          <p className="text-lg font-medium text-peace-secondary">Report submitted</p>
          <p className="mt-2 text-sm text-peace-body">
            A Peace9 admin will review only the content you reported. They do not see your full
            private conversation. If you or someone else is in immediate danger, please contact
            local emergency services.
          </p>
        </Card>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHeading
        eyebrow="Safety report"
        title="Report a Safety Concern"
        description="This report is reviewed by a Peace9 admin, who sees only what you submit here — never your full private conversation."
      />
      <Card>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <p className="mb-2 text-sm font-medium text-peace-heading">What&apos;s this about?</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="cursor-pointer rounded-full border border-peace-gray px-4 py-2 text-xs font-medium text-peace-body has-[:checked]:border-peace-primary has-[:checked]:bg-peace-light-pink/40 has-[:checked]:text-peace-secondary"
                >
                  <input type="radio" name="category" value={category} required className="sr-only" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium text-peace-heading">
              What happened? <span className="text-peace-primary">*</span>
            </label>
            <textarea
              id="details"
              required
              rows={5}
              placeholder="Describe what you'd like reviewed. Include only what you're comfortable sharing."
              className="w-full rounded-[10px] border border-peace-gray p-4 text-sm outline-none focus:border-peace-primary"
            />
          </div>

          <Button type="submit">Submit Report</Button>
        </form>
      </Card>
    </PageShell>
  );
}
