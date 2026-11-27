// Hanya field yang aman dipublikasikan. Field internal (NIM, kontak, dll.) tidak ada di tipe ini.
export type PublicBuilding = { slug: string; name: string };

export type PublicSeniorResident = {
  slug: string;
  name: string;
  role: string;
  buildingSlug: string;
  buildingName: string;
  periodLabel: string;
};

export interface SeniorResidentRepository {
  buildings(): Promise<readonly PublicBuilding[]>;
  list(buildingSlug?: string): Promise<readonly PublicSeniorResident[]>;
}
