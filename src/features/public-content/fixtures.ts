import type { PublicAnnouncement } from "@/features/announcements/model";
import type { PublicEvent } from "@/features/events/model";
import type { PublicNews } from "@/features/news/model";
import { visibleContent } from "./repository";

const events = [
  { slug: "simulasi-kegiatan", title: "[Simulasi] Kegiatan asrama", summary: "Contoh ringkasan kegiatan.", description: "Contoh halaman detail kegiatan.", startsAt: "2026-11-25", visible: true },
  { slug: "simulasi-internal", title: "[Simulasi] Kegiatan internal", visible: false, participant: "CONTOH_DATA_PRIVAT" },
];

const thumbnail = {
  url: "/fixtures/dokumentasi.png",
  alt: "Ilustrasi simulasi dokumentasi kegiatan",
  width: 640,
  height: 360,
};

const news = [
  { slug: "simulasi-berita", title: "[Simulasi] Berita asrama", summary: "Contoh ringkasan berita.", body: "Contoh artikel dan dokumentasi.", publishedAt: "2026-11-25", thumbnail, gallery: [thumbnail], status: "Published" },
  { slug: "simulasi-draft", title: "[Simulasi] Draft berita", body: "CONTOH_DRAFT_PRIVAT", status: "Draft" },
  { slug: "simulasi-ditarik", title: "[Simulasi] Berita ditarik", body: "CONTOH_KONTEN_DITARIK", status: "Unpublished" },
];

const announcements = [
  { title: "[Simulasi] Pengumuman asrama", summary: "Contoh ringkasan pengumuman.", publishedAt: "2026-11-25", status: "Published" },
  { title: "[Simulasi] Pengumuman belum terbit", summary: "CONTOH_PENGUMUMAN_PRIVAT", status: "Draft" },
];

export function fixtureEvents(): PublicEvent[] {
  return visibleContent(events, ({ visible }) => visible, ({ slug, title, summary, description, startsAt }) =>
    ({ slug, title, summary, description, startsAt }));
}

export function fixtureNews(): PublicNews[] {
  return visibleContent(news, ({ status }) => status === "Published", ({ slug, title, summary, body, publishedAt, thumbnail, gallery }) =>
    ({ slug, title, summary, body, publishedAt, thumbnail, gallery }));
}

export function fixtureAnnouncements(): PublicAnnouncement[] {
  return visibleContent(announcements, ({ status }) => status === "Published", ({ title, summary, publishedAt }) =>
    ({ title, summary, publishedAt }));
}
