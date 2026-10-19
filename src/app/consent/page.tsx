import { PageShell } from "@/components/layout/PageShell";
import { Card, PageHeading } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export default function ConsentPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Before you begin"
        title="Consent & Confirmation"
        description="Please read and confirm before starting your private conversation."
      />
      <Card>
        <form className="space-y-6">
          <div className="max-h-56 overflow-y-auto rounded-[10px] border border-peace-gray p-4 text-sm leading-relaxed text-peace-body">
            <p>
              [Placeholder consent and privacy text supplied by Peace9. This will be replaced
              with the client&apos;s final legal copy covering how your private conversation is
              stored, who can access it, and your rights to withdraw or delete your data.]
            </p>
          </div>

          <label className="flex items-start gap-3 text-sm text-peace-body">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--peace-primary)]" />
            I confirm I am 18 years of age or older.
          </label>

          <label className="flex items-start gap-3 text-sm text-peace-body">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--peace-primary)]" />
            I have read and agree to the consent terms above. I understand my private
            conversation stays private unless I explicitly approve sharing it.
          </label>

          <LinkButton href="/conversation" className="w-full sm:w-auto">
            Continue to Private Conversation
          </LinkButton>
        </form>
      </Card>
    </PageShell>
  );
}
