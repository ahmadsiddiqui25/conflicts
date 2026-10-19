import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-peace-gray/60 bg-peace-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/PEACE-9-e1779092679774.png"
            alt="Peace9"
            width={1000}
            height={295}
            priority
            quality={100}
            className="h-10 w-auto sm:h-11"
          />
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
