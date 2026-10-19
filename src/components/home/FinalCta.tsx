import { LinkButton } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-4 text-center sm:px-6 sm:pb-28">
      <h2 className="text-2xl font-normal text-peace-heading sm:text-3xl">
        Ready to find common ground?
      </h2>
      <p className="mt-3 text-sm text-peace-body sm:text-base">
        It starts with one honest conversation, held privately, on your terms.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <LinkButton href="/create">Create a Peace Room</LinkButton>
        <LinkButton href="/invite" variant="secondary">
          I have an invitation
        </LinkButton>
      </div>
    </section>
  );
}
