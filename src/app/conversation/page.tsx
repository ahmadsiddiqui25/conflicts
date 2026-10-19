import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { ChatThread } from "@/components/conversation/ChatThread";
import { LinkButton } from "@/components/ui/Button";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function PrivateConversationPage() {
  return (
    <PageShell wide>
      <PageHeading eyebrow="Step 4 of 8" title="Your Private Peace Conversation" />
      <div className="mb-6 rounded-[10px] bg-peace-light-pink/40 p-4 text-sm text-peace-secondary">
        Your words stay private unless you approve sharing.
      </div>
      <Card>
        <ChatThread />
      </Card>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <StepBackLink />
        <LinkButton href="/conversation/translation" className="ml-auto">
          I&apos;m ready for my Peace Translation
        </LinkButton>
      </div>
    </PageShell>
  );
}
