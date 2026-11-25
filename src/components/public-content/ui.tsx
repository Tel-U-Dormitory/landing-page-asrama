import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PublicImage } from "@/features/news/model";
import styles from "./content.module.css";

const routes = [
  ["/events", "Kegiatan"],
  ["/berita", "Berita dan dokumentasi"],
  ["/pengumuman", "Pengumuman"],
] as const;

export function ContentPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Konten publik">
        {routes.map(([href, label]) => <Link key={href} href={href} prefetch={false}>{label}</Link>)}
      </nav>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export function ContentDate({ value }: { value?: string }) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return (
    <time className={styles.date} dateTime={value}>
      {new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "Asia/Jakarta" }).format(date)}
    </time>
  );
}

export function ContentImage({ image }: { image: PublicImage }) {
  return (
    <figure className={styles.media}>
      <Image unoptimized src={image.url} alt={image.alt} width={image.width} height={image.height} />
    </figure>
  );
}

export function ListFeedback({ message }: { message: string }) {
  return <p className={styles.notice}>{message}</p>;
}

export function ContentLoading() {
  return <main className={styles.page}><p role="status">Memuat konten…</p></main>;
}
