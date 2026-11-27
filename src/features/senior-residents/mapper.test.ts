import { expect, test } from "bun:test";
import { fixtureBuildings, fixtureResidents } from "./fixtures";
import { toPublicResidents } from "./mapper";

const today = new Date("2026-11-26T08:00:00+07:00");

test("hanya SR dengan penugasan aktif pada periode berjalan yang tampil", () => {
  const slugs = toPublicResidents(fixtureResidents, fixtureBuildings, today).map(({ slug }) => slug);
  expect(slugs).toEqual(["sr-simulasi-a", "sr-simulasi-b", "sr-simulasi-c", "sr-simulasi-d"]);
});

test("periode berakhir dikecualikan, hari terakhir periode masih termasuk", () => {
  const lastDay = new Date("2027-07-31T20:00:00+07:00");
  const afterEnd = new Date("2027-08-02T08:00:00+07:00");
  expect(toPublicResidents(fixtureResidents, fixtureBuildings, lastDay)).toHaveLength(4);
  expect(toPublicResidents(fixtureResidents, fixtureBuildings, afterEnd)).toHaveLength(0);
});

test("gedung tidak dikenal tidak tampil dan data internal tidak ikut keluar", () => {
  const result = toPublicResidents(fixtureResidents, fixtureBuildings, today);
  expect(result.find(({ slug }) => slug === "sr-simulasi-tanpa-gedung")).toBeUndefined();
  const json = JSON.stringify(result);
  for (const secret of ["CONTOH_NIM_PRIVAT", "CONTOH_TELEPON_PRIVAT", "CONTOH_EMAIL_PRIVAT"]) {
    expect(json).not.toContain(secret);
  }
  expect(Object.keys(result[0]).sort()).toEqual(
    ["buildingName", "buildingSlug", "name", "periodLabel", "role", "slug"],
  );
});

test("tanggal penugasan rusak gagal aman", () => {
  const broken = [{ ...fixtureResidents[0], assignment: { ...fixtureResidents[0].assignment, start: "bukan-tanggal" } }];
  expect(toPublicResidents(broken, fixtureBuildings, today)).toHaveLength(0);
});
