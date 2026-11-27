import { expect, test } from "bun:test";
import { isActive, siteNav } from "./nav";

test("navigasi publik tidak memuat tautan login RESORA (FR-WEB-013 Rejected)", () => {
  for (const { href } of siteNav) {
    expect(href.startsWith("/")).toBe(true);
    expect(href).not.toMatch(/login|resora|cms/i);
  }
});

test("penanda halaman aktif", () => {
  expect(isActive("/", "/")).toBe(true);
  expect(isActive("/events/simulasi-kegiatan", "/events")).toBe(true);
  expect(isActive("/events", "/")).toBe(false);
  expect(isActive("/profil-sr", "/senior-resident")).toBe(false);
});
