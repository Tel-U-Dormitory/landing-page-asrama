"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Dikunci pada alamat halaman, jadi setiap pindah halaman isinya muncul ulang dengan transisi halus.
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname} className="route-enter">{children}</div>;
}