import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[20px] border border-peace-gray/70 bg-peace-white p-6 shadow-[0px_44px_44px_rgba(0,0,0,0.05)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 text-center sm:text-left">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-peace-pink-shade">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-normal text-peace-heading sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-peace-body">{description}</p>}
    </div>
  );
}
