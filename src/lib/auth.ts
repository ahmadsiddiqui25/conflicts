"use client";

import { useSyncExternalStore } from "react";

// Front-end-only session stub (no backend yet). Swap for real auth later.
const KEY = "peace-session";
const EVENT = "peace-session-change";

export type Session = { name: string; email: string };

let cachedRaw: string | null = null;
let cachedValue: Session | null = null;

function read(): Session | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedValue = raw ? (JSON.parse(raw) as Session) : null;
    }
    return cachedValue;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function signIn(session: Session) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(session));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function signOut() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function useSession(): Session | null {
  return useSyncExternalStore(subscribe, read, () => null);
}
