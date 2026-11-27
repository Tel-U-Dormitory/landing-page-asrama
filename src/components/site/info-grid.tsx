import type { InfoItem } from "@/features/site-content/content";
import styles from "./site.module.css";

export function InfoGrid({ items }: { items: readonly InfoItem[] }) {
  return (
    <ul className={styles.infoGrid}>
      {items.map((item) => (
        <li key={item.title} className={styles.infoCard}>
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
        </li>
      ))}
    </ul>
  );
}