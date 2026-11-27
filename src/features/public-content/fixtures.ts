import type { PublicAnnouncement } from "@/features/announcements/model";
import type { PublicEvent } from "@/features/events/model";
import type { PublicNews } from "@/features/news/model";
import { visibleContent } from "./repository";


const events = [
  {
    slug: "malam-keakraban-penghuni",
    title: "Malam Keakraban Penghuni Asrama",
    summary: "Malam kebersamaan penghuni asrama putra dan putri bersama Senior Resident.",
    description: "Acara untuk mempererat hubungan antar penghuni asrama.\n\nPenghuni dari seluruh gedung diundang hadir. Susunan acara dan informasi teknis diumumkan melalui kanal resmi asrama.",
    startsAt: "2026-12-06",
    visible: true,
  },
  {
    slug: "kerja-bakti-lingkungan-asrama",
    title: "Kerja Bakti Lingkungan Asrama",
    summary: "Membersihkan area bersama di lingkungan asrama secara gotong royong.",
    description: "Penghuni dan Senior Resident membersihkan area bersama asrama.\n\nPeserta dimohon membawa perlengkapan kebersihan masing-masing.",
    startsAt: "2026-11-22",
    visible: true,
  },
  { slug: "rapat-koordinasi-internal", title: "Rapat Koordinasi Internal Senior Resident", visible: false, participant: "CONTOH_DATA_PRIVAT" },
];

const news = [
  {
    slug: "orientasi-penghuni-baru-berlangsung-lancar",
    title: "Orientasi Penghuni Baru Berlangsung Lancar",
    summary: "Penghuni baru mengikuti pengenalan lingkungan, tata tertib, dan fasilitas asrama.",
    body: "Rangkaian orientasi penghuni baru berlangsung selama dua hari.\n\nPenghuni mengenal lingkungan asrama, fasilitas yang tersedia, serta Senior Resident yang mendampingi di setiap gedung.",
    publishedAt: "2026-11-20",
    status: "Published",
  },
  {
    slug: "pelatihan-pendampingan-senior-resident",
    title: "Senior Resident Ikuti Pelatihan Pendampingan Penghuni",
    summary: "Pelatihan membekali Senior Resident untuk mendampingi kehidupan asrama.",
    body: "Senior Resident mengikuti pelatihan pendampingan penghuni.\n\nMateri mencakup komunikasi, penanganan situasi sehari-hari, dan koordinasi antar gedung.",
    publishedAt: "2026-11-12",
    status: "Published",
  },
  {
    slug: "turnamen-olahraga-antar-gedung",
    title: "Turnamen Olahraga Antar Gedung Resmi Dibuka",
    summary: "Penghuni dari setiap gedung berlomba dalam beberapa cabang olahraga.",
    body: "Turnamen olahraga antar gedung resmi dibuka.\n\nPertandingan berlangsung setiap akhir pekan hingga babak final.",
    publishedAt: "2026-11-05",
    status: "Published",
  },
  { slug: "rencana-kegiatan-semester", title: "Rencana Kegiatan Semester", body: "CONTOH_DRAFT_PRIVAT", status: "Draft" },
  { slug: "berita-ditarik", title: "Berita yang Ditarik", body: "CONTOH_KONTEN_DITARIK", status: "Unpublished" },
];

const announcements = [
  { title: "Pendaftaran Malam Keakraban Dibuka", summary: "Penghuni yang ingin ikut dapat mendaftar melalui Senior Resident di gedung masing-masing.", publishedAt: "2026-11-26", status: "Published" },
  { title: "Pemeliharaan Jaringan Wi-Fi Asrama", summary: "Layanan Wi-Fi dapat terganggu sementara selama pemeliharaan berlangsung.", publishedAt: "2026-11-24", status: "Published" },
  { title: "Pengumuman Belum Terbit", summary: "CONTOH_PENGUMUMAN_PRIVAT", status: "Draft" },
];

export function fixtureEvents(): PublicEvent[] {
  return visibleContent(events, ({ visible }) => visible, ({ slug, title, summary, description, startsAt }) =>
    ({ slug, title, summary, description, startsAt }));
}

export function fixtureNews(): PublicNews[] {
  return visibleContent(news, ({ status }) => status === "Published", ({ slug, title, summary, body, publishedAt }) =>
    ({ slug, title, summary, body, publishedAt }));
}

export function fixtureAnnouncements(): PublicAnnouncement[] {
  return visibleContent(announcements, ({ status }) => status === "Published", ({ title, summary, publishedAt }) =>
    ({ title, summary, publishedAt }));
}
