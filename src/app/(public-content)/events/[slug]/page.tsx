import { notFound } from "next/navigation";
import { ContentDate, ContentPage } from "@/components/public-content/ui";
import styles from "@/components/public-content/content.module.css";
import { events } from "@/features/public-content/source.server";

export const dynamic = "force-dynamic";

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await events.find(slug);
  if (!event) notFound();

  return (
    <ContentPage title={event.title}>
      <ContentDate value={event.startsAt} />
      {event.description && <p className={styles.body}>{event.description}</p>}
    </ContentPage>
  );
}
