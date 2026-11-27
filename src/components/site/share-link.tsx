"use client";

import { useState } from "react";
import styles from "./site.module.css";

export function ShareLink() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className={styles.shareRow}>
      <button type="button" className={styles.shareBtn} onClick={copy}>Salin tautan</button>
      <span className={styles.shareStatus} role="status">
        {status === "copied" && "Tautan disalin."}
        {status === "failed" && "Tautan gagal disalin. Salin dari bilah alamat browser."}
      </span>
    </div>
  );
}
