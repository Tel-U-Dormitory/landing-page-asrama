export type PublicEvent = {
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  startsAt?: string;
};

export interface EventRepository {
  list(): Promise<readonly PublicEvent[]>;
  find(slug: string): Promise<PublicEvent | undefined>;
}
