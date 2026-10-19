function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.6A7.96 7.96 0 0 1 4 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BalanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M12 4v16M5 8h14M5 8l-3 6h6L5 8Zm14 0l-3 6h6l-3-6Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="17.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

const BENEFITS = [
  {
    icon: LockIcon,
    title: "Private by design",
    description:
      "No participant, not even the room creator, can read another person's private conversation.",
  },
  {
    icon: ChatIcon,
    title: "Neutral AI guidance",
    description: "The AI Peace Guide listens without judgment and never takes a side.",
  },
  {
    icon: BalanceIcon,
    title: "No forced compromise",
    description: "The AI never declares a winner or pressures anyone toward an agreement.",
  },
  {
    icon: PhoneIcon,
    title: "Works on any device",
    description: "Mobile-first, so every participant can take part from their phone.",
  },
];

export function Benefits() {
  return (
    <section className="bg-peace-light-pink/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-peace-pink-shade">
            Why Peace Room
          </p>
          <h2 className="text-3xl font-normal text-peace-heading sm:text-4xl">
            Built around one rule: privacy first
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[20px] bg-peace-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full peace-gradient-bg text-peace-white">
                <Icon />
              </div>
              <h3 className="mt-4 text-base font-medium text-peace-heading">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-peace-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
