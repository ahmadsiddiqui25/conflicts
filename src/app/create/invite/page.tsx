import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { Button, LinkButton } from "@/components/ui/Button";
import { InviteList } from "@/components/invite/InviteList";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function InviteParticipantsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Step 3 of 8"
        title="Invite to Peace Room"
        description="Invite everyone involved, organized by ASK. Email invitations send a secure, single-use link."
      />
      <Card className="space-y-5">
        <InviteList askLabel="ASK 1" />
        <InviteList askLabel="ASK 2" />

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <StepBackLink />
            <Button type="button" variant="secondary">
              Copy Invitation List
            </Button>
          </div>
          <LinkButton href="/conversation">Send Invitations</LinkButton>
        </div>

        <p className="text-xs text-peace-gray-muted">
          Prototype only — the working app will send real, expiring, single-use invitation links
          by email.
        </p>
      </Card>
    </PageShell>
  );
}
