import Image from "next/image";
import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Create a Peace Room", href: "/create" },
  { label: "I have an invitation", href: "/invite" },
];

const SUPPORT_LINKS = [
  { label: "Report a Safety Concern", href: "/report" },
  { label: "Withdraw & Delete My Data", href: "/withdraw" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-peace-gray/60 bg-peace-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/peace9-logo.png"
              alt="Peace9"
              width={753}
              height={280}
              unoptimized
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-peace-body">
              Peace Room helps two sides of a conflict move from competing requests to a shared
              agreement, guided privately by AI.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-peace-pink-shade">
              Product
            </p>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-peace-body transition-colors hover:text-peace-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-peace-pink-shade">
              Support
            </p>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-peace-body transition-colors hover:text-peace-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-peace-gray/60 pt-6 text-xs text-peace-gray-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Peace9. Peace Room is in private beta.</p>
          <p>
            Peace Room is not a crisis service. If you or someone else is in danger, contact local
            emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MinimalFooter() {
  return (
    <footer className="mt-auto border-t border-peace-gray/60 bg-peace-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-peace-body sm:flex-row sm:px-6">
        <p className="text-peace-gray-muted">&copy; 2026 Peace9</p>
        <nav className="flex gap-4">
          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-peace-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
