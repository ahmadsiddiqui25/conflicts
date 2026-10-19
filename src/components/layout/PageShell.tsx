import type { ReactNode } from "react";

export function PageShell({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <main
      className={`mx-auto w-full flex-1 px-4 py-10 sm:px-6 sm:py-14 ${
        wide ? "max-w-4xl" : "max-w-2xl"
      }`}
    >
      {children}
    </main>
  );
}
