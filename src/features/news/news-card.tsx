import { DetailLink } from "@/components/public-content/detail-link";
import { ContentDate, ContentImage } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import type { PublicNews } from "./model";

export function NewsCard({ article }: { article: PublicNews }) {
  return (
    <article className={styles.card}>
      {article.thumbnail && <ContentImage image={article.thumbnail} />}
      <ContentDate value={article.publishedAt} />
      <h2><DetailLink href={`/berita/${encodeURIComponent(article.slug)}`} title={article.title} /></h2>
      {article.summary && <p>{article.summary}</p>}
    </article>
  );
}
