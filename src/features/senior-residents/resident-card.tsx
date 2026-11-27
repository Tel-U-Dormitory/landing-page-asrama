import styles from "@/components/site/site.module.css";
import type { PublicSeniorResident } from "./model";

function initials(name: string) {
  return name
    .replace(/\[.*?\]\s*/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function ResidentCard({ resident }: { resident: PublicSeniorResident }) {
  return (
    <article className={styles.srCard}>
      <span className={styles.avatar} aria-hidden="true">{initials(resident.name)}</span>
      <div>
        <h3 className={styles.srName}>{resident.name}</h3>
        <p className={styles.srMeta}>{resident.role} · {resident.buildingName}</p>
        <p className={styles.srMeta}>Periode {resident.periodLabel}</p>
      </div>
    </article>
  );
}
