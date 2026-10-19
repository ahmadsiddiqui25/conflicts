import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { CounterTextArea, CounterTextField, TextField } from "@/components/forms/fields";
import { LinkButton } from "@/components/ui/Button";
import { StepBackLink } from "@/components/layout/StepBackLink";

export default function CreatePeaceRoomPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Step 1 of 8"
        title="Create Peace Room"
        description="Tell us about the situation and how to reach you. Creation date, time and time zone are recorded automatically by the system."
      />
      <Card>
        <form className="space-y-6">
          <CounterTextField label="Title" required maxLength={140} placeholder="A short name for this Peace Room" />
          <CounterTextArea
            label="Situation"
            required
            maxLength={500}
            rows={4}
            placeholder="Tennis and pickleball players disagree about how community courts should be shared."
          />
          <CounterTextArea
            label="Preferred Outcome"
            maxLength={500}
            rows={3}
            placeholder="Find a fair court schedule that everyone can respect."
          />
          <p className="-mt-4 text-xs text-peace-gray-muted">
            Optional. This stays private unless you choose to share it later.
          </p>

          <div>
            <h2 className="mb-4 text-lg font-medium text-peace-heading">Your Information</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="First Name" required placeholder="Jordan" />
              <TextField label="Phone" required type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="mt-5">
              <TextField label="Email" required type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-medium text-peace-heading">Conflict Location</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="City" required placeholder="Austin" />
              <TextField label="State" required placeholder="TX" />
            </div>
          </div>

          <p className="text-xs text-peace-gray-muted">
            Creation date, time and time zone recorded automatically.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <StepBackLink />
            <LinkButton href="/create/asks" className="ml-auto w-full sm:w-auto">
              Continue
            </LinkButton>
          </div>
        </form>
      </Card>
    </PageShell>
  );
}
