import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { AgreementPanel } from "@/components/room/AgreementPanel";
import { LinkButton } from "@/components/ui/Button";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function PeaceAgreementPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Step 7 of 8"
        title="Proposed Peace Agreement"
        description="The AI drafts possible solutions, but participants decide what they accept."
      />
      <Card>
        <AgreementPanel />
      </Card>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <StepBackLink />
        <LinkButton href="/room/closed" className="ml-auto">
          Continue to Close Room
        </LinkButton>
      </div>
    </PageShell>
  );
}
