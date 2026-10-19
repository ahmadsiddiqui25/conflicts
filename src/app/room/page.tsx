import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { DiscussionComposer } from "@/components/room/DiscussionComposer";

export default function SharedPeaceRoomPage() {
  return (
    <PageShell>
      <PageHeading eyebrow="Step 6 of 8" title="Shared Peace Room" />

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-peace-pink-shade">
            ASK 1
          </p>
          <p className="mt-1 text-base font-medium text-peace-heading">Dedicated tennis hours</p>
          <p className="mt-1 text-sm text-peace-gray-muted">3 participants</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-peace-pink-shade">
            ASK 2
          </p>
          <p className="mt-1 text-base font-medium text-peace-heading">
            Expanded pickleball access
          </p>
          <p className="mt-1 text-sm text-peace-gray-muted">5 participants</p>
        </Card>
      </div>

      <Card className="mb-6 border-peace-primary/30 bg-peace-light-pink/20">
        <p className="mb-2 text-xs font-semibold text-peace-pink-shade">AI Peace Guide</p>
        <p className="text-sm leading-relaxed text-peace-secondary">
          I hear that both ASKs value access to community recreation facilities. ASK 1 is
          concerned about predictable tennis availability. ASK 2 is concerned about opportunities
          to play pickleball. Could we explore a schedule that protects dedicated time for both
          activities?
        </p>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-medium text-peace-heading">Discussion</h2>
        <DiscussionComposer />
      </Card>

      <div className="mt-6 flex justify-end">
        <LinkButton href="/room/agreement">Continue to Peace Agreement</LinkButton>
      </div>
    </PageShell>
  );
}
