"use client";

import { useState } from "react";

const ITEMS = [
  "Dedicated tennis hours on selected mornings",
  "Dedicated pickleball hours on selected afternoons",
  "Review the schedule together after 30 days",
];

const TOTAL_ACTIVE_PARTICIPANTS = 6;

export function AgreementPanel() {
  const [decision, setDecision] = useState<"pending" | "approved" | "revision" | "declined">(
    "pending",
  );
  const [comment, setComment] = useState("");
  const [approvedCount, setApprovedCount] = useState(4);

  function approve() {
    setDecision("approved");
    setApprovedCount((prev) => Math.min(prev + 1, TOTAL_ACTIVE_PARTICIPANTS));
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[10px] border border-peace-gray bg-peace-light-pink/10 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-peace-pink-shade">
          Example proposal, not yet approved
        </p>
        <ul className="space-y-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-peace-heading">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peace-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[10px] bg-peace-light-pink/30 p-4 text-sm text-peace-secondary">
        Agreement status: <span className="font-semibold">{approvedCount} of {TOTAL_ACTIVE_PARTICIPANTS} active participants approved.</span>{" "}
        Each participant must explicitly approve the final proposal. No agreement is recorded
        until the required approvals are complete.
      </div>

      {decision === "pending" && (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={approve}
            className="peace-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-peace-white"
          >
            Approve
          </button>
          <button
            type="button"
            onClick={() => setDecision("revision")}
            className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-secondary hover:bg-peace-light-pink/40"
          >
            Request Revision
          </button>
          <button
            type="button"
            onClick={() => setDecision("declined")}
            className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-gray-muted hover:bg-peace-light-pink/40"
          >
            Decline
          </button>
        </div>
      )}

      {decision === "revision" && (
        <div className="space-y-3">
          <label htmlFor="revision-comment" className="text-sm font-medium text-peace-heading">
            What would you like to see changed?
          </label>
          <textarea
            id="revision-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full rounded-[10px] border border-peace-gray p-4 text-sm outline-none focus:border-peace-primary"
          />
          <button
            type="button"
            onClick={() => setDecision("pending")}
            className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-secondary"
          >
            Submit Revision Request
          </button>
        </div>
      )}

      {decision === "approved" && (
        <p className="rounded-[10px] border border-peace-primary/30 bg-peace-light-pink/20 p-4 text-sm text-peace-secondary">
          You approved the current version of this agreement.
        </p>
      )}

      {decision === "declined" && (
        <p className="rounded-[10px] border border-peace-gray bg-peace-white p-4 text-sm text-peace-gray-muted">
          You declined the current version. The room organiser has been notified.
        </p>
      )}
    </div>
  );
}
