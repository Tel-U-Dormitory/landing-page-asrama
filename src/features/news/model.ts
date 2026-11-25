export type PublicImage = { url: string; alt: string; width: number; height: number };

export type PublicNews = {
  slug: string;
  title: string;
  summary?: string;
  body: string;
  publishedAt?: string;
  thumbnail?: PublicImage;
  gallery?: readonly PublicImage[];
};

export interface NewsRepository {
  list(): Promise<readonly PublicNews[]>;
  find(slug: string): Promise<PublicNews | undefined>;
}
