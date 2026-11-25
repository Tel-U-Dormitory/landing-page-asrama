import { ContentPage, ListFeedback } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import { EventCard } from "@/features/events/event-card";
import { events } from "@/features/public-content/source.server";

export const metadata = { title: "Kegiatan" };
export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const items = await events.list();
  return (
    <ContentPage title="Kegiatan">
      {items.length ? (
        <ul className={styles.grid}>
          {items.map((event) => <li key={event.slug}><EventCard event={event} /></li>)}
        </ul>
      ) : <ListFeedback message="Belum ada kegiatan publik." />}
    </ContentPage>
  );
}
