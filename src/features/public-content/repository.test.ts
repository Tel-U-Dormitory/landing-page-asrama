import { expect, test } from "bun:test";
import { fixtureAnnouncements, fixtureEvents, fixtureNews } from "./fixtures";
import { fixturesEnabled, slugRepository } from "./repository";

test("lists and direct event links expose only public fields and eligible events", async () => {
  const events = slugRepository(async () => fixtureEvents());
  expect(await events.list()).toHaveLength(2);
  expect(await events.find("rapat-koordinasi-internal")).toBeUndefined();
  expect(await events.find("malam-keakraban-penghuni")).not.toHaveProperty("participant");
});

test("editorial lists and direct links exclude draft and withdrawn content", async () => {
  const news = slugRepository(async () => fixtureNews());
  expect(await news.list()).toHaveLength(3);
  expect(await news.find("rencana-kegiatan-semester")).toBeUndefined();
  expect(await news.find("berita-ditarik")).toBeUndefined();
  expect(fixtureAnnouncements().map(({ title }) => title)).toEqual([
    "Pendaftaran Malam Keakraban Dibuka",
    "Pemeliharaan Jaringan Wi-Fi Asrama",
  ]);
});

test("fixtures do not reference any image file", () => {
  const json = JSON.stringify([fixtureEvents(), fixtureNews(), fixtureAnnouncements()]);
  expect(json).not.toMatch(/\.(png|jpe?g|webp|gif|svg)/i);
  expect(json).not.toContain("thumbnail");
});

test("fixtures require explicit development opt-in", () => {
  expect(fixturesEnabled("development", "1")).toBe(true);
  expect(fixturesEnabled("development")).toBe(false);
  expect(fixturesEnabled("production", "1")).toBe(false);
  expect(fixturesEnabled("test", "1")).toBe(false);
});

test("the detail lookup propagates source failures to the route error boundary", async () => {
  const source = slugRepository(async () => { throw new Error("source unavailable"); });
  await expect(source.find("malam-keakraban-penghuni")).rejects.toThrow("source unavailable");
});
