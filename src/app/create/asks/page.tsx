import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { CounterTextArea } from "@/components/forms/fields";
import { LinkButton } from "@/components/ui/Button";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function DefineAsksPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Step 2 of 8"
        title="What is each ASK?"
        description="Describe what each group is requesting. These are starting points, not final positions."
      />
      <Card>
        <form className="space-y-6">
          <div className="rounded-[10px] border border-peace-gray bg-peace-light-pink/20 p-4">
            <p className="text-sm font-semibold text-peace-secondary">ASK 1</p>
            <div className="mt-3">
              <CounterTextArea
                label="ASK 1 description"
                required
                maxLength={500}
                rows={3}
                placeholder="Dedicated tennis hours"
              />
            </div>
          </div>
          <div className="rounded-[10px] border border-peace-gray bg-peace-light-pink/20 p-4">
            <p className="text-sm font-semibold text-peace-secondary">ASK 2</p>
            <div className="mt-3">
              <CounterTextArea
                label="ASK 2 description"
                required
                maxLength={500}
                rows={3}
                placeholder="Expanded pickleball access"
              />
            </div>
          </div>

          <div className="rounded-[10px] bg-peace-light-pink/40 p-4 text-sm text-peace-body">
            <p className="font-medium text-peace-secondary">Every ASK can evolve</p>
            <p className="mt-1">
              Participants can clarify or propose changes to their ASK after speaking privately
              with the AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <StepBackLink />
            <LinkButton href="/create/invite" className="ml-auto w-full sm:w-auto">
              Continue to Invitations
            </LinkButton>
          </div>
        </form>
      </Card>
    </PageShell>
  );
}
