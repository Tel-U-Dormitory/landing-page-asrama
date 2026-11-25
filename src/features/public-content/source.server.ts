import "server-only";
import type { AnnouncementRepository } from "@/features/announcements/model";
import type { EventRepository } from "@/features/events/model";
import type { NewsRepository } from "@/features/news/model";
import { fixturesEnabled, slugRepository } from "./repository";

async function sourceFor<T>(select: (fixtures: typeof import("./fixtures")) => T[]): Promise<T[]> {
  if (!fixturesEnabled(process.env.NODE_ENV, process.env.PUBLIC_CONTENT_FIXTURES)) return [];
  return select(await import("./fixtures"));
}

// Replace each source here with the approved server adapter when its contract is available.
export const events: EventRepository = slugRepository(() => sourceFor((fixtures) => fixtures.fixtureEvents()));
export const news: NewsRepository = slugRepository(() => sourceFor((fixtures) => fixtures.fixtureNews()));
export const announcements: AnnouncementRepository = {
  list: () => sourceFor((fixtures) => fixtures.fixtureAnnouncements()),
};
