import { DetailLink } from "@/components/public-content/detail-link";
import { ContentDate } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import type { PublicEvent } from "./model";

export function EventCard({ event }: { event: PublicEvent }) {
  return (
    <article className={styles.card}>
      <ContentDate value={event.startsAt} />
      <h2><DetailLink href={`/events/${encodeURIComponent(event.slug)}`} title={event.title} /></h2>
      {event.summary && <p>{event.summary}</p>}
    </article>
  );
}
