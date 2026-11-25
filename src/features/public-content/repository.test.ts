import { expect, test } from "bun:test";
import { fixtureAnnouncements, fixtureEvents, fixtureNews } from "./fixtures";
import { fixturesEnabled, slugRepository } from "./repository";

test("lists and direct event links expose only public fields and eligible events", async () => {
  const events = slugRepository(async () => fixtureEvents());
  expect(await events.list()).toHaveLength(1);
  expect(await events.find("simulasi-internal")).toBeUndefined();
  expect(await events.find("simulasi-kegiatan")).not.toHaveProperty("participant");
});

test("editorial lists and direct links exclude draft and withdrawn content", async () => {
  const news = slugRepository(async () => fixtureNews());
  expect((await news.find("simulasi-berita"))?.gallery).toHaveLength(1);
  expect(await news.find("simulasi-draft")).toBeUndefined();
  expect(await news.find("simulasi-ditarik")).toBeUndefined();
  expect(fixtureAnnouncements().map(({ title }) => title)).toEqual(["[Simulasi] Pengumuman asrama"]);
});

test("fixtures require explicit development opt-in", () => {
  expect(fixturesEnabled("development", "1")).toBe(true);
  expect(fixturesEnabled("development")).toBe(false);
  expect(fixturesEnabled("production", "1")).toBe(false);
  expect(fixturesEnabled("test", "1")).toBe(false);
});

test("the detail lookup propagates source failures to the route error boundary", async () => {
  const source = slugRepository(async () => { throw new Error("source unavailable"); });
  await expect(source.find("simulasi-kegiatan")).rejects.toThrow("source unavailable");
});
