"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Message = {
  id: string;
  from: "guide" | "you";
  text: string;
};

type Status = "idle" | "sending" | "error";

const GUIDE_FOLLOW_UPS = [
  "Thank you for sharing that. What has that been like for you day to day?",
  "That makes sense. When you picture a fair outcome here, what would need to be true?",
  "I want to make sure I understand — is there anything the other side may not realize about how this has affected you?",
  "What would feel like an acceptable compromise, even if it isn't your ideal outcome?",
  "I think I have a clear picture now. Ready to review a translation of what you've shared?",
];

// Simulates an occasional AI/network failure so the error + retry state is
// reachable without a real backend. A real integration replaces this with
// the actual request outcome.
const SIMULATED_FAILURE_RATE = 0.2;

function Avatar({ from }: { from: Message["from"] }) {
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        from === "you"
          ? "peace-gradient-bg text-peace-white"
          : "border border-peace-primary/30 bg-peace-light-pink/60 text-peace-secondary"
      }`}
    >
      {from === "you" ? "Me" : "AI"}
    </div>
  );
}

export function ChatThread() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      from: "guide",
      text: "Welcome. My role is to understand your experience without judging you or anyone else. What happened that brought you to this Peace Room, and what has been most difficult about it?",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [pendingReply, setPendingReply] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  function requestReply(replyText: string) {
    setStatus("sending");
    setTimeout(() => {
      if (Math.random() < SIMULATED_FAILURE_RATE) {
        setStatus("error");
        return;
      }
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), from: "guide", text: replyText }]);
      setStatus("idle");
      setPendingReply(null);
    }, 700);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!draft.trim() || status === "sending") return;

    const userMessage: Message = { id: crypto.randomUUID(), from: "you", text: draft.trim() };
    const guideCount = messages.filter((m) => m.from === "guide").length;
    const nextReply = GUIDE_FOLLOW_UPS[Math.min(guideCount - 1, GUIDE_FOLLOW_UPS.length - 1)];

    // Save the user's message before attempting the AI call, so it's never lost on failure.
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setPendingReply(nextReply);
    requestReply(nextReply);
  }

  function retry() {
    if (pendingReply) requestReply(pendingReply);
  }

  return (
    <div className="flex flex-col">
      <div
        ref={scrollRef}
        className="flex h-[32rem] flex-col gap-4 overflow-y-auto rounded-[20px] border border-peace-gray bg-peace-light-pink/10 p-4 sm:h-[36rem] sm:p-6"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2.5 ${
              message.from === "you" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Avatar from={message.from} />
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[60%] ${
                message.from === "you"
                  ? "peace-gradient-bg text-peace-white"
                  : "border border-peace-gray bg-peace-white text-peace-heading"
              }`}
            >
              {message.from === "guide" && (
                <p className="mb-1 text-xs font-semibold text-peace-pink-shade">
                  AI Peace Guide
                </p>
              )}
              {message.text}
            </div>
          </div>
        ))}
        {status === "sending" && (
          <div className="flex items-end gap-2.5">
            <Avatar from="guide" />
            <div className="rounded-2xl border border-peace-gray bg-peace-white px-4 py-3 text-sm text-peace-gray-muted">
              AI Peace Guide is typing…
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-end gap-2.5">
            <Avatar from="guide" />
            <div className="max-w-[75%] rounded-2xl border border-peace-primary/40 bg-peace-light-pink/30 px-4 py-3 text-sm text-peace-secondary sm:max-w-[60%]">
              <p>
                We couldn&apos;t reach your AI Peace Guide. Your message is saved — nothing was
                lost.
              </p>
              <button
                type="button"
                onClick={retry}
                className="mt-2 rounded-full border border-peace-primary px-4 py-1.5 text-xs font-semibold text-peace-primary hover:bg-peace-light-pink/50"
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-wrap gap-3">
        <label htmlFor="response" className="sr-only">
          Your response
        </label>
        <input
          id="response"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type your response…"
          disabled={status !== "idle"}
          className="min-w-0 flex-1 rounded-full border border-peace-gray px-6 py-3.5 text-sm outline-none focus:border-peace-primary disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!draft.trim() || status !== "idle"}
          className="shrink-0 rounded-full peace-gradient-bg px-7 py-3.5 text-sm font-semibold text-peace-white disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
