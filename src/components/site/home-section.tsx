import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./site.module.css";

type Props = { id: string; title: string; href?: string; linkLabel?: string; children: ReactNode };

export function HomeSection({ id, title, href, linkLabel = "Lihat semua", children }: Props) {
  return (
    <section className={`${styles.section} ${styles.container}`} aria-labelledby={id}>
      <div className={styles.sectionHead}>
        <h2 id={id}>{title}</h2>
        {href && <Link className={styles.sectionLink} href={href} prefetch={false}>{linkLabel}</Link>}
      </div>
      {children}
    </section>
  );
}

export function SectionFeedback({ message }: { message: string }) {
  return <p className={styles.empty}>{message}</p>;
}
