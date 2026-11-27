import Image from "next/image";
import type { ReactNode } from "react";
import type { PublicImage } from "@/features/news/model";
import { ShareLink } from "@/components/site/share-link";
import styles from "./content.module.css";

type ContentPageProps = { title: string; children: ReactNode; shareable?: boolean };

export function ContentPage({ title, children, shareable = false }: ContentPageProps) {
  return (
    <main id="konten" className={styles.page}>
      <h1>{title}</h1>
      {shareable && <ShareLink />}
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
  return <main id="konten" className={styles.page}><p role="status">Memuat konten…</p></main>;
}

// Kotak kosong pengganti gambar. Murni CSS, tanpa file. Diganti gambar asli saat admin mengunggah.
export function ImageSlot() {
  return <div className={styles.slot} aria-hidden="true" />;
}
