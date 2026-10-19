import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-peace-gray/60 bg-peace-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full border border-peace-primary/40 bg-peace-black px-4 py-2 text-sm font-medium tracking-wide text-peace-white"
        >
          PEACE
          <span className="text-peace-primary-light">9</span>
        </Link>
        <Link
          href="/report"
          className="rounded-full border border-peace-pink-shade/50 px-3 py-1.5 text-xs font-semibold text-peace-pink-shade transition-colors hover:bg-peace-light-pink sm:text-sm"
        >
          Report a Safety Concern
        </Link>
      </div>
    </header>
  );
}
