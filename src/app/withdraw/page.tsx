"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";

export default function WithdrawPage() {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <PageShell>
        <Card className="text-center">
          <p className="text-lg font-medium text-peace-secondary">You&apos;ve left this Peace Room</p>
          <p className="mt-2 text-sm text-peace-body">
            Your private data has been permanently deleted. Any messages you published to the
            shared room now show as &quot;participant withdrew.&quot;
          </p>
        </Card>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHeading
        eyebrow="Leave this room"
        title="Withdraw & Delete My Data"
        description="You can leave at any time. This action cannot be undone."
      />
      <Card className="space-y-5">
        <div className="rounded-[10px] border border-peace-gray p-4 text-sm text-peace-body">
          <p className="font-medium text-peace-heading">What happens when you withdraw:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your private conversation and drafts are permanently deleted.</li>
            <li>
              Any shared messages you already published stay visible to others but are
              re-labeled as &quot;participant withdrew.&quot;
            </li>
            <li>You lose access to this room immediately.</li>
          </ul>
        </div>

        <label className="flex items-start gap-3 text-sm text-peace-body">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--peace-primary)]" />
          I understand this cannot be undone and I want to withdraw and delete my private data.
        </label>

        <button
          type="button"
          onClick={() => setConfirmed(true)}
          className="rounded-full border border-peace-pink-shade px-8 py-3.5 text-sm font-semibold text-peace-pink-shade hover:bg-peace-light-pink/40"
        >
          Withdraw &amp; Delete My Data
        </button>
      </Card>
    </PageShell>
  );
}
