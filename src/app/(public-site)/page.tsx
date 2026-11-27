import Link from "next/link";
import contentStyles from "@/components/public-content/content.module.css";
import { ContentDate, ContentImage, ImageSlot } from "@/components/public-content/ui";
import { DetailLink } from "@/components/public-content/detail-link";
import { HomeSection, SectionFeedback } from "@/components/site/home-section";
import styles from "@/components/site/site.module.css";
import { EventCard } from "@/features/events/event-card";
import { NewsCard } from "@/features/news/news-card";
import { announcements, events, news } from "@/features/public-content/source.server";
import { safeLoad } from "@/features/site-content/safe-load";

export const dynamic = "force-dynamic";

const quickLinks = [
  { href: "/asrama", title: "Kehidupan asrama", text: "Hunian, kegiatan, dan organisasi Senior Resident." },
  { href: "/senior-resident", title: "Peran Senior Resident", text: "Peran dan tanggung jawab Senior Resident." },
  { href: "/profil-sr", title: "Profil SR per gedung", text: "Kenali Senior Resident di setiap gedung." },
];

function emptyMessage(failed: boolean, empty: string) {
  return failed ? "Konten belum dapat dimuat saat ini." : empty;
}

export default async function HomePage() {
  const [eventList, newsList, announcementList] = await Promise.all([
    safeLoad(() => events.list()),
    safeLoad(() => news.list()),
    safeLoad(() => announcements.list()),
  ]);

  const featured = newsList.items.find((article) => article.thumbnail) ?? newsList.items[0];
  const otherNews = newsList.items.filter((article) => article !== featured).slice(0, 3);

  return (
    <main id="konten">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Telkom University Dormitory</span>
          <h1 className={styles.heroTitle}>Senior Resident Asrama Telkom University</h1>
          <p className={styles.heroText}>
            Informasi kehidupan asrama, kegiatan, berita, dan profil Senior Resident Asrama Putra dan Putri Telkom University.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.btnLight}`} href="/events" prefetch={false}>Lihat kegiatan</Link>
            <Link className={`${styles.btn} ${styles.btnOutline}`} href="/senior-resident" prefetch={false}>Kenali Senior Resident</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.container}`} aria-label="Jelajahi">
        <ul className={styles.quickGrid}>
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link className={styles.quickCard} href={link.href} prefetch={false}>
                <strong>{link.title}</strong>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {featured && (
        <HomeSection id="unggulan" title="Konten unggulan">
          <article className={styles.featured}>
            {featured.thumbnail ? <ContentImage image={featured.thumbnail} /> : <ImageSlot />}
            <div>
              <ContentDate value={featured.publishedAt} />
              <h3><DetailLink href={`/berita/${encodeURIComponent(featured.slug)}`} title={featured.title} /></h3>
              {featured.summary && <p>{featured.summary}</p>}
            </div>
          </article>
        </HomeSection>
      )}

      <HomeSection id="kegiatan" title="Kegiatan terbaru" href="/events">
        {eventList.items.length ? (
          <ul className={contentStyles.grid}>
            {eventList.items.slice(0, 3).map((event) => <li key={event.slug}><EventCard event={event} /></li>)}
          </ul>
        ) : <SectionFeedback message={emptyMessage(eventList.failed, "Belum ada kegiatan publik.")} />}
      </HomeSection>

      {(otherNews.length > 0 || !featured) && (
        <HomeSection id="berita" title="Berita dan dokumentasi" href="/berita">
          {otherNews.length ? (
            <ul className={contentStyles.grid}>
              {otherNews.map((article) => <li key={article.slug}><NewsCard article={article} /></li>)}
            </ul>
          ) : <SectionFeedback message={emptyMessage(newsList.failed, "Belum ada berita yang diterbitkan.")} />}
        </HomeSection>
      )}

      <HomeSection id="pengumuman" title="Pengumuman" href="/pengumuman">
        {announcementList.items.length ? (
          <ul className={contentStyles.list}>
            {announcementList.items.slice(0, 3).map((item, index) => (
              <li key={index} className={contentStyles.card}>
                <ContentDate value={item.publishedAt} />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        ) : <SectionFeedback message={emptyMessage(announcementList.failed, "Belum ada pengumuman resmi yang diterbitkan.")} />}
      </HomeSection>
    </main>
  );
}
