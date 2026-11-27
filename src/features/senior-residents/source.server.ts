import "server-only";
import { fixturesEnabled } from "@/features/public-content/repository";
import { toPublicResidents } from "./mapper";
import type { SeniorResidentRepository } from "./model";

async function fixtures() {
  if (!fixturesEnabled(process.env.NODE_ENV, process.env.PUBLIC_CONTENT_FIXTURES)) return undefined;
  return import("./fixtures");
}

// Ganti dengan adapter resmi setelah keputusan RSA-29 (sumber profil, cakupan penugasan/periode, field publik).
export const seniorResidents: SeniorResidentRepository = {
  async buildings() {
    return (await fixtures())?.fixtureBuildings ?? [];
  },
  async list(buildingSlug) {
    const source = await fixtures();
    if (!source) return [];
    const all = toPublicResidents(source.fixtureResidents, source.fixtureBuildings, new Date());
    return buildingSlug ? all.filter((resident) => resident.buildingSlug === buildingSlug) : all;
  },
};
