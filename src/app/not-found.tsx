import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-peace-pink-shade">
        404
      </p>
      <h1 className="text-2xl font-normal text-peace-heading">We couldn&apos;t find that page</h1>
      <p className="mt-3 max-w-sm text-sm text-peace-body">
        The link may have expired or been moved. Try returning to the start.
      </p>
      <Link
        href="/"
        className="peace-gradient-bg mt-8 rounded-full px-8 py-3 text-sm font-semibold text-peace-white"
      >
        Back to Home
      </Link>
    </main>
  );
}
