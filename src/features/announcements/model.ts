export type PublicAnnouncement = {
  title: string;
  summary: string;
  publishedAt?: string;
};

export interface AnnouncementRepository {
  list(): Promise<readonly PublicAnnouncement[]>;
}
