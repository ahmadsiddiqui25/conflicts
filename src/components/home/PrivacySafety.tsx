const POINTS = [
  "Consent and an 18+ confirmation are required before any private conversation starts.",
  "You can withdraw and delete your private data at any time — no questions asked.",
  "A safety report button is available on every screen, reviewed by a Peace9 admin who sees only the reported content.",
  "An agreement is never recorded as Resolved unless every active participant has explicitly approved it.",
];

export function PrivacySafety() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="rounded-[20px] border border-peace-primary/20 bg-peace-black p-8 sm:p-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-peace-primary-light">
          Privacy &amp; safety
        </p>
        <h2 className="max-w-lg text-2xl font-normal text-peace-white sm:text-3xl">
          Peace Room is not a crisis service — but it takes safety seriously.
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-peace-white/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full peace-gradient-bg" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
