"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField, PasswordField } from "@/components/forms/fields";
import { Button, LinkButton } from "@/components/ui/Button";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  const [signedIn, setSignedIn] = useState(false);

  if (signedIn) {
    return (
      <AuthLayout
        eyebrow="Welcome back"
        title="You're signed in"
        description="Head to your Peace Room, or start a new one."
      >
        <LinkButton href="/create" className="w-full justify-center">
          Create a Peace Room
        </LinkButton>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in"
      description="Sign in to manage your Peace Rooms and continue a conversation."
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const email = String(new FormData(e.currentTarget).get("email") ?? "");
          signIn({ name: email.split("@")[0] || "there", email });
          setSignedIn(true);
        }}
      >
        <TextField label="Email" name="email" required type="email" placeholder="you@example.com" />
        <PasswordField
          label="Password"
          required
          autoComplete="current-password"
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-peace-body">
            <input type="checkbox" className="h-4 w-4 accent-[var(--peace-primary)]" />
            Remember me
          </label>
          <Link href="#" className="font-medium text-peace-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full justify-center">
          Log In
        </Button>

        <p className="text-center text-sm text-peace-body">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-peace-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
