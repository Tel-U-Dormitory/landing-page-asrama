"use client";

import Link, { useLinkStatus } from "next/link";

function PendingIndicator() {
  const { pending } = useLinkStatus();
  return pending ? <span role="status"> · Memuat…</span> : null;
}

export function DetailLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} prefetch={false}>
      {title}
      <PendingIndicator />
    </Link>
  );
}
