import Link from "next/link";
import { siteNav } from "./nav";
import styles from "./site.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <strong>Telkom University Dormitory</strong>
          <p className={styles.footerNote}>Asrama Putra dan Putri Telkom University</p>
          <p className={styles.footerNote}>© {new Date().getFullYear()} Senior Resident Telkom University Dormitory</p>
        </div>
        <nav aria-label="Tautan footer">
          <ul className={styles.footerLinks}>
            {siteNav.map(({ href, label }) => (
              <li key={href}><Link href={href} prefetch={false}>{label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
