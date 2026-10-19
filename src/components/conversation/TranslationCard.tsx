"use client";

import { useState } from "react";
import Link from "next/link";

const DRAFT =
  "I feel frustrated about losing access to tennis courts that have been important to our community. I would like a fair schedule that provides predictable tennis access while considering the needs of pickleball players.";

const ALT_DRAFT =
  "I value the role tennis has played in this community and want a schedule I can rely on. I'm open to a shared arrangement, as long as pickleball's needs don't come entirely at tennis's expense.";

export function TranslationCard() {
  const [text, setText] = useState(DRAFT);
  const [editing, setEditing] = useState(false);
  const [approved, setApproved] = useState(false);
  function regenerate() {
    setText((prev) => (prev === DRAFT ? ALT_DRAFT : DRAFT));
  }

  if (approved) {
    return (
      <div className="rounded-[10px] border border-peace-primary/40 bg-peace-light-pink/30 p-5 text-sm text-peace-secondary">
        <p className="font-medium">Approved &amp; shared with the room.</p>
        <p className="mt-2 text-peace-body">{text}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[10px] border border-peace-gray bg-peace-light-pink/10 p-5">
        <p className="mb-2 text-sm font-semibold text-peace-pink-shade">
          Here is what I understand you want others to hear.
        </p>
        {editing ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="w-full rounded-[10px] border border-peace-gray bg-peace-white p-4 text-sm text-peace-heading outline-none focus:border-peace-primary"
          />
        ) : (
          <p className="text-base leading-relaxed text-peace-heading">{text}</p>
        )}
      </div>

      <p className="text-sm font-medium text-peace-body">
        Does this accurately represent your position?
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setApproved(true)}
          className="peace-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-peace-white"
        >
          Approve &amp; Share
        </button>
        <button
          type="button"
          onClick={() => setEditing((prev) => !prev)}
          className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-secondary hover:bg-peace-light-pink/40"
        >
          {editing ? "Done Editing" : "Edit"}
        </button>
        <button
          type="button"
          onClick={regenerate}
          className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-secondary hover:bg-peace-light-pink/40"
        >
          Regenerate
        </button>
        <Link
          href="/conversation"
          className="rounded-full border border-peace-gray px-6 py-3 text-sm font-semibold text-peace-secondary hover:bg-peace-light-pink/40"
        >
          Clarify More
        </Link>
      </div>
    </div>
  );
}
