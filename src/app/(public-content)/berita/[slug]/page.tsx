import { notFound } from "next/navigation";
import { ContentDate, ContentImage, ContentPage } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import { news } from "@/features/public-content/source.server";

export const dynamic = "force-dynamic";

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await news.find(slug);
  if (!article) notFound();

  return (
    <ContentPage title={article.title}>
      <article>
        <ContentDate value={article.publishedAt} />
        <p className={styles.body}>{article.body}</p>
        {!!article.gallery?.length && (
          <section aria-label="Dokumentasi kegiatan">
            <h2>Dokumentasi kegiatan</h2>
            {article.gallery.map((image) => <ContentImage key={image.url} image={image} />)}
          </section>
        )}
      </article>
    </ContentPage>
  );
}
