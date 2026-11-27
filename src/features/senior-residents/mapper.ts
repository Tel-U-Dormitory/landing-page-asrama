import type { PublicBuilding, PublicSeniorResident } from "./model";

// Bentuk data internal sementara. Ganti sesuai keputusan RSA-29 (sumber profil, penugasan, periode).
export type ResidentRecord = {
  slug: string;
  name: string;
  role: string;
  assignment: { buildingSlug: string; periodLabel: string; start: string; end: string };
  nim?: string;
  phone?: string;
  email?: string;
};

const DAY_MS = 86_400_000;

export function isAssignedOn(record: ResidentRecord, today: Date) {
  const start = new Date(record.assignment.start).getTime();
  const end = new Date(record.assignment.end).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) return false; // gagal aman
  return start <= today.getTime() && today.getTime() < end + DAY_MS;
}

export function toPublicResidents(
  records: readonly ResidentRecord[],
  buildings: readonly PublicBuilding[],
  today: Date,
): PublicSeniorResident[] {
  const names = new Map(buildings.map((building) => [building.slug, building.name]));
  return records
    .flatMap((record) => {
      const buildingName = names.get(record.assignment.buildingSlug);
      if (!buildingName || !isAssignedOn(record, today)) return [];
      // Allowlist eksplisit: field lain tidak ikut keluar.
      return [{
        slug: record.slug,
        name: record.name,
        role: record.role,
        buildingSlug: record.assignment.buildingSlug,
        buildingName,
        periodLabel: record.assignment.periodLabel,
      }];
    })
    .sort((a, b) => a.buildingName.localeCompare(b.buildingName, "id") || a.name.localeCompare(b.name, "id"));
}
