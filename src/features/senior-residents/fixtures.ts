import type { ResidentRecord } from "./mapper";
import type { PublicBuilding } from "./model";

export const fixtureBuildings: PublicBuilding[] = [
  { slug: "gedung-1", name: "Gedung 1" },
  { slug: "gedung-2", name: "Gedung 2" },
  { slug: "gedung-3", name: "Gedung 3" },
];

const period = { periodLabel: "2026/2027", start: "2026-08-01", end: "2027-07-31" };

export const fixtureResidents: ResidentRecord[] = [
  { slug: "sr-simulasi-a", name: "Dinda Anggraini", role: "Senior Resident", assignment: { buildingSlug: "gedung-1", ...period }, nim: "CONTOH_NIM_PRIVAT", phone: "CONTOH_TELEPON_PRIVAT" },
  { slug: "sr-simulasi-b", name: "Rizky Maulana", role: "Senior Resident", assignment: { buildingSlug: "gedung-1", ...period }, email: "CONTOH_EMAIL_PRIVAT" },
  { slug: "sr-simulasi-c", name: "Fajar Nugroho", role: "Senior Resident", assignment: { buildingSlug: "gedung-2", ...period } },
  { slug: "sr-simulasi-d", name: "Aulia Rahmawati", role: "Senior Resident", assignment: { buildingSlug: "gedung-3", ...period } },
  { slug: "sr-simulasi-lama", name: "Bagas Setiawan", role: "Senior Resident", assignment: { buildingSlug: "gedung-1", periodLabel: "2024/2025", start: "2024-08-01", end: "2025-07-31" } },
  { slug: "sr-simulasi-tanpa-gedung", name: "Nadia Kusuma", role: "Senior Resident", assignment: { buildingSlug: "gedung-x", ...period } },
];
