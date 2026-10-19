import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-10 py-[18.5px] text-[22px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const variants = {
  primary: `${base} peace-btn`,
  secondary: `${base} border border-peace-gray text-peace-secondary hover:bg-peace-light-pink/40`,
  ghost: `${base} text-peace-pink-shade hover:bg-peace-light-pink/40`,
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants }) {
  return <button {...props} className={`${variants[variant]} ${className}`} />;
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
