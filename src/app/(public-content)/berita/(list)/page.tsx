import { ContentPage, ListFeedback } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import { NewsCard } from "@/features/news/news-card";
import { news } from "@/features/public-content/source.server";

export const metadata = { title: "Berita dan dokumentasi" };
export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const articles = await news.list();
  return (
    <ContentPage title="Berita dan dokumentasi">
      {articles.length ? (
        <ul className={styles.grid}>
          {articles.map((article) => <li key={article.slug}><NewsCard article={article} /></li>)}
        </ul>
      ) : <ListFeedback message="Belum ada berita yang diterbitkan." />}
    </ContentPage>
  );
}
