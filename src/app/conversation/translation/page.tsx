import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { TranslationCard } from "@/components/conversation/TranslationCard";
import { LinkButton } from "@/components/ui/Button";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function PeaceTranslationPage() {
  return (
    <PageShell>
      <PageHeading eyebrow="Step 5 of 8" title="Your Peace Translation" />
      <Card>
        <TranslationCard />
      </Card>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <StepBackLink />
        <LinkButton href="/room" className="ml-auto">
          Continue to Shared Peace Room
        </LinkButton>
      </div>
    </PageShell>
  );
}
