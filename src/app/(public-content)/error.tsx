"use client";

import styles from "@/components/public-content/content.module.css";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className={styles.page}>
      <h1>Konten belum dapat dimuat</h1>
      <button type="button" onClick={reset}>Coba lagi</button>
    </main>
  );
}
