import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { TranslationCard } from "@/components/conversation/TranslationCard";
import { LinkButton } from "@/components/ui/Button";

export default function PeaceTranslationPage() {
  return (
    <PageShell>
      <PageHeading eyebrow="Step 5 of 8" title="Your Peace Translation" />
      <Card>
        <TranslationCard />
      </Card>
      <div className="mt-6 flex justify-end">
        <LinkButton href="/room">Continue to Shared Peace Room</LinkButton>
      </div>
    </PageShell>
  );
}
