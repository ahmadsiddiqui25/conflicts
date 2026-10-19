import { LinkButton } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-peace-pink-shade">
        Peace is your birthright
      </p>
      <h1 className="max-w-2xl text-4xl font-normal leading-tight text-peace-heading sm:text-5xl">
        Turn competing ASKs into a{" "}
        <span className="peace-gradient-text font-medium">shared agreement</span>
      </h1>
      <p className="mt-6 max-w-xl text-base text-peace-body sm:text-lg">
        Each person is heard privately by an AI Peace Guide, approves a neutral translation of
        their position, then joins a shared room to find common ground together.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <LinkButton href="/create">Create a Peace Room</LinkButton>
        <LinkButton href="/invite" variant="secondary">
          I have an invitation
        </LinkButton>
      </div>
      <p className="mt-12 max-w-md text-xs text-peace-gray-muted">
        No participant, not even the room creator, can read another person&apos;s private
        conversation.
      </p>
    </main>
  );
}
