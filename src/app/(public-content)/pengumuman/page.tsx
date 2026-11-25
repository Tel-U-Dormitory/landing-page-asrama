import { ContentDate, ContentPage, ListFeedback } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import { announcements } from "@/features/public-content/source.server";

export const metadata = { title: "Pengumuman" };
export const dynamic = "force-dynamic";

export default async function AnnouncementsPage() {
  const items = await announcements.list();
  return (
    <ContentPage title="Pengumuman">
      {items.length ? (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.card}>
              <ContentDate value={item.publishedAt} />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      ) : <ListFeedback message="Belum ada pengumuman resmi yang diterbitkan." />}
    </ContentPage>
  );
}
