"use client";

import { useId, useState } from "react";

type Invitee = {
  id: string;
  name: string;
  email: string;
  status: "draft";
};

export function InviteList({ askLabel }: { askLabel: string }) {
  const [invitees, setInvitees] = useState<Invitee[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameId = useId();
  const emailId = useId();

  function addInvitee() {
    if (!name.trim() || !email.trim()) return;
    setInvitees((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: name.trim(), email: email.trim(), status: "draft" },
    ]);
    setName("");
    setEmail("");
  }

  function removeInvitee(id: string) {
    setInvitees((prev) => prev.filter((invitee) => invitee.id !== id));
  }

  return (
    <div className="rounded-[10px] border border-peace-gray p-4">
      <p className="text-sm font-semibold text-peace-secondary">{askLabel}</p>

      {invitees.length > 0 && (
        <ul className="mt-4 space-y-2">
          {invitees.map((invitee) => (
            <li
              key={invitee.id}
              className="flex items-center justify-between rounded-[10px] bg-peace-light-pink/20 px-4 py-2.5 text-sm"
            >
              <span>
                <span className="font-medium text-peace-heading">{invitee.name}</span>{" "}
                <span className="text-peace-gray-muted">{invitee.email}</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="rounded-full bg-peace-gray px-2.5 py-0.5 text-[11px] font-medium text-peace-body">
                  draft
                </span>
                <button
                  type="button"
                  onClick={() => removeInvitee(invitee.id)}
                  className="text-xs text-peace-gray-muted hover:text-peace-primary"
                  aria-label={`Remove ${invitee.name}`}
                >
                  Remove
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <div>
          <label htmlFor={nameId} className="sr-only">
            First name
          </label>
          <input
            id={nameId}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="w-full rounded-[10px] border border-peace-gray px-4 py-2.5 text-sm outline-none focus:border-peace-primary"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="sr-only">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-[10px] border border-peace-gray px-4 py-2.5 text-sm outline-none focus:border-peace-primary"
          />
        </div>
        <button
          type="button"
          onClick={addInvitee}
          className="rounded-[10px] border border-peace-primary px-4 py-2.5 text-sm font-semibold text-peace-primary transition-colors hover:bg-peace-light-pink/30"
        >
          Add to {askLabel}
        </button>
      </div>
    </div>
  );
}
