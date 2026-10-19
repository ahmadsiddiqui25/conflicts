import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { OutcomeSelector } from "@/components/room/OutcomeSelector";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function CloseRoomPage() {
  return (
    <PageShell>
      <PageHeading eyebrow="Step 8 of 8" title="Close Peace Room" />
      <Card>
        <OutcomeSelector />
      </Card>
      <div className="mt-6">
        <StepBackLink />
      </div>
    </PageShell>
  );
}
