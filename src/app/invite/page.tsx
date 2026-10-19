import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { TextField } from "@/components/forms/fields";
import { LinkButton } from "@/components/ui/Button";

export default function InvitationLandingPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="You've been invited"
        title="Join this Peace Room"
        description="Reena invited you under ASK 1: Dedicated tennis hours. Confirm your email to verify your identity and open the room."
      />
      <Card>
        <form className="space-y-6">
          <TextField label="Email" required type="email" placeholder="The email this invitation was sent to" />
          <p className="text-xs text-peace-gray-muted">
            This link is single-use and expires 7 days after it was sent. Verifying your email
            confirms it&apos;s really you before you see anything in this room.
          </p>
          <LinkButton href="/consent" className="w-full sm:w-auto">
            Verify &amp; Continue
          </LinkButton>
        </form>
      </Card>

      <Card className="mt-6 border-peace-gray/50 bg-peace-light-pink/10">
        <p className="text-sm font-medium text-peace-secondary">Link expired or already used?</p>
        <p className="mt-1 text-sm text-peace-body">
          Ask the room organiser to resend your invitation. Resending automatically revokes the
          earlier link.
        </p>
      </Card>
    </PageShell>
  );
}
