"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth";

export function AuthNav() {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!session) {
    return (
      <Link
        href="/login"
        className="text-sm font-semibold text-peace-secondary transition-colors hover:text-peace-primary"
      >
        Log In
      </Link>
    );
  }

  const initial = (session.name.trim()[0] ?? "?").toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Account menu"
        aria-haspopup="menu"
        aria-expanded={open}
        className="peace-gradient-bg flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-peace-white transition-opacity hover:opacity-90"
      >
        {initial}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 w-60 rounded-[14px] border border-peace-gray bg-peace-white p-2 shadow-lg"
        >
          <div className="border-b border-peace-gray/60 px-3 pb-3 pt-2">
            <p className="truncate text-sm font-semibold text-peace-heading">{session.name}</p>
            <p className="truncate text-xs text-peace-body">{session.email}</p>
          </div>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              signOut();
            }}
            className="mt-1 w-full rounded-[10px] px-3 py-2 text-left text-sm text-peace-body transition-colors hover:bg-peace-light-pink/60 hover:text-peace-secondary"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
