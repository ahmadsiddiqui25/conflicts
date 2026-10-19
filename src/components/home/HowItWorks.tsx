const STEPS = [
  {
    number: "01",
    title: "Share your ASK privately",
    description:
      "Each side speaks privately with an AI Peace Guide about what happened and what they need. Nothing you say is visible to anyone else.",
  },
  {
    number: "02",
    title: "Approve a Peace Translation",
    description:
      "The AI turns your words into a calm, neutral statement. You edit, regenerate, or approve it — nothing is shared until you say so.",
  },
  {
    number: "03",
    title: "Find common ground together",
    description:
      "Once both ASKs have an approved translation, the shared room opens. The AI highlights common interests, never a winner.",
  },
  {
    number: "04",
    title: "Reach a Peace Agreement",
    description:
      "The AI drafts possible commitments. Nothing is recorded as agreed until every active participant has explicitly approved it.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-peace-pink-shade">
          How it works
        </p>
        <h2 className="text-3xl font-normal text-peace-heading sm:text-4xl">
          From competing ASKs to a shared agreement
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-[20px] border border-peace-gray/70 bg-peace-white p-6 shadow-[0px_44px_44px_rgba(0,0,0,0.05)]"
          >
            <span className="peace-gradient-text text-3xl font-semibold">{step.number}</span>
            <h3 className="mt-4 text-lg font-medium text-peace-heading">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-peace-body">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
