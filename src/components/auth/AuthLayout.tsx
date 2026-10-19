import Image from "next/image";
import type { ReactNode } from "react";

export function AuthLayout({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="grid h-svh lg:grid-cols-2">
      <section className="peace-gradient-bg relative hidden flex-col justify-between overflow-hidden p-10 text-peace-white lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-peace-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-peace-black/20 blur-3xl"
        />

        <Image
          src="/peace9-logo.png"
          alt="Peace9"
          width={753}
          height={280}
          unoptimized
          className="relative h-10 w-auto self-start"
        />

        <div className="relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-peace-white/70">
            Peace is your birthright
          </p>
          <h2 className="max-w-sm text-3xl font-normal leading-tight">
            Move from competing requests to a shared agreement.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-peace-white/80">
            No participant, not even the room creator, can read another person&apos;s private
            conversation.
          </p>
        </div>

        <p className="relative text-xs text-peace-white/60">&copy; 2026 Peace9</p>
      </section>

      <section className="flex flex-col items-center justify-center overflow-y-auto px-4 py-6 sm:px-6">
        <div className="w-full max-w-md [&_form]:space-y-4 [&_input]:h-12 [&_input]:py-2">
          <div className="mb-4 lg:hidden">
            <Image
              src="/peace9-logo.png"
              alt="Peace9"
              width={753}
              height={280}
              unoptimized
              className="h-9 w-auto"
            />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-peace-pink-shade">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-normal text-peace-heading">{title}</h1>
          <p className="mt-2 text-sm text-peace-body">{description}</p>
          <div className="mt-5">{children}</div>
        </div>
      </section>
    </main>
  );
}
