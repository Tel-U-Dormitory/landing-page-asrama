import { expect, spyOn, test } from "bun:test";
import { safeLoad } from "./safe-load";

test("sumber yang gagal menghasilkan daftar kosong, bukan error", async () => {
  const log = spyOn(console, "error").mockImplementation(() => {});
  expect(await safeLoad(async () => { throw new Error("sumber mati"); })).toEqual({ items: [], failed: true });
  expect(await safeLoad(async () => [1, 2])).toEqual({ items: [1, 2], failed: false });
  log.mockRestore();
});
