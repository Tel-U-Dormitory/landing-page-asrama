"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/telkom-dorm.png";
import { isActive, siteNav } from "./nav";
import styles from "./site.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" prefetch={false} className={styles.brand} onClick={() => setOpen(false)}>
          <Image unoptimized priority src={logo} alt="Telkom University Dormitory" className={styles.logo} />
          <span className={styles.brandSub}>Senior Resident</span>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
        <nav id="menu-utama" aria-label="Navigasi utama" className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {siteNav.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                prefetch={false}
                aria-current={active ? "page" : undefined}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}