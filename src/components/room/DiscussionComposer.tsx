"use client";

import { useState } from "react";

function softenMessage(text: string) {
  return `I understand this is frustrating. Here's a calmer way to say it: "${text.replace(/!+/g, ".").trim()}"`;
}

export function DiscussionComposer() {
  const [draft, setDraft] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [posted, setPosted] = useState<string[]>([]);

  function requestTranslation() {
    if (!draft.trim()) return;
    setPreview(softenMessage(draft));
  }

  function publish(text: string) {
    setPosted((prev) => [...prev, text]);
    setDraft("");
    setPreview(null);
  }

  return (
    <div className="space-y-3">
      {posted.length === 0 && !preview && (
        <div className="rounded-[10px] border border-dashed border-peace-gray p-6 text-center text-sm text-peace-gray-muted">
          No messages yet. Once both ASKs have an approved Peace Translation, discussion starts
          here.
        </div>
      )}

      {posted.map((text, i) => (
        <div key={i} className="rounded-[10px] border border-peace-gray bg-peace-white p-3 text-sm text-peace-heading">
          {text}
        </div>
      ))}

      {preview && (
        <div className="rounded-[10px] border border-peace-primary/40 bg-peace-light-pink/20 p-4 text-sm">
          <p className="mb-2 text-xs font-semibold text-peace-pink-shade">
            Preview Shared Discussion
          </p>
          <p className="text-peace-body">{preview}</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => publish(preview)}
              className="rounded-full peace-gradient-bg px-4 py-2 text-xs font-semibold text-peace-white"
            >
              Publish rewrite
            </button>
            <button
              type="button"
              onClick={() => publish(draft)}
              className="rounded-full border border-peace-gray px-4 py-2 text-xs font-semibold text-peace-secondary"
            >
              Publish original
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <label htmlFor="shared-response" className="sr-only">
          Your response
        </label>
        <input
          id="shared-response"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Your response"
          className="min-w-0 flex-1 rounded-full border border-peace-gray px-5 py-3 text-sm outline-none focus:border-peace-primary"
        />
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={requestTranslation}
            disabled={!draft.trim()}
            className="shrink-0 whitespace-nowrap rounded-full border border-peace-gray px-5 py-3 text-xs font-semibold text-peace-secondary disabled:opacity-40"
          >
            AI Translate
          </button>
          <button
            type="button"
            onClick={() => publish(draft)}
            disabled={!draft.trim()}
            className="shrink-0 whitespace-nowrap rounded-full peace-gradient-bg px-5 py-3 text-xs font-semibold text-peace-white disabled:opacity-40"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
