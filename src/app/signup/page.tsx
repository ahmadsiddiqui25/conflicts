"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField, PasswordField } from "@/components/forms/fields";
import { Button, LinkButton } from "@/components/ui/Button";
import { signIn } from "@/lib/auth";

export default function SignupPage() {
  const [created, setCreated] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  if (created) {
    return (
      <AuthLayout
        eyebrow="You're in"
        title="Account created"
        description="You can now create a Peace Room or wait for an invitation."
      >
        <LinkButton href="/create" className="w-full justify-center">
          Create a Peace Room
        </LinkButton>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      description="You'll need this to create a Peace Room or manage one you've joined."
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const passwordsMatch = passwordRef.current?.value === confirmRef.current?.value;
          setMismatch(!passwordsMatch);
          if (passwordsMatch) {
            const data = new FormData(e.currentTarget);
            signIn({
              name: String(data.get("firstName") ?? "").trim() || "there",
              email: String(data.get("email") ?? ""),
            });
            setCreated(true);
          }
        }}
      >
        <TextField label="First Name" name="firstName" required placeholder="Jordan" />
        <TextField label="Email" name="email" required type="email" placeholder="you@example.com" />
        <PasswordField
          label="Password"
          required
          autoComplete="new-password"
          minLength={8}
          placeholder="At least 8 characters"
          ref={passwordRef}
        />
        <PasswordField
          label="Confirm Password"
          required
          autoComplete="new-password"
          minLength={8}
          placeholder="Re-enter your password"
          ref={confirmRef}
        />
        {mismatch && (
          <p className="-mt-3 text-sm text-peace-primary">Passwords don&apos;t match.</p>
        )}

        <label className="flex items-start gap-3 text-sm text-peace-body">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--peace-primary)]" />
          I confirm I am 18 years of age or older and agree to be contacted about my account.
        </label>

        <Button type="submit" className="w-full justify-center">
          Create Account
        </Button>

        <p className="text-center text-sm text-peace-body">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-peace-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
