import Link from "next/link";
import { ContentPage, ListFeedback } from "@/components/public-content/ui";
import styles from "@/components/site/site.module.css";
import { ResidentCard } from "@/features/senior-residents/resident-card";
import { seniorResidents } from "@/features/senior-residents/source.server";

export const metadata = {
  title: "Profil Senior Resident",
  description: "Senior Resident aktif Telkom University Dormitory menurut gedung.",
};
export const dynamic = "force-dynamic";

export default async function ResidentProfilesPage({
  searchParams,
}: {
  searchParams: Promise<{ gedung?: string | string[] }>;
}) {
  const { gedung } = await searchParams;
  const buildings = await seniorResidents.buildings();
  const selected = buildings.find((building) => building.slug === (typeof gedung === "string" ? gedung : undefined));
  const residents = await seniorResidents.list(selected?.slug);

  const groups = (selected ? [selected] : buildings)
    .map((building) => ({ building, items: residents.filter((resident) => resident.buildingSlug === building.slug) }))
    .filter((group) => group.items.length > 0);

  return (
    <ContentPage title="Profil Senior Resident" shareable>
      {buildings.length > 0 && (
        <ul className={styles.chips} aria-label="Pilih gedung">
          <li>
            <Link href="/profil-sr" prefetch={false} aria-current={selected ? undefined : "page"}
              className={`${styles.chip} ${selected ? "" : styles.chipActive}`}>Semua gedung</Link>
          </li>
          {buildings.map((building) => {
            const active = building.slug === selected?.slug;
            return (
              <li key={building.slug}>
                <Link href={`/profil-sr?gedung=${encodeURIComponent(building.slug)}`} prefetch={false}
                  aria-current={active ? "page" : undefined}
                  className={`${styles.chip} ${active ? styles.chipActive : ""}`}>{building.name}</Link>
              </li>
            );
          })}
        </ul>
      )}

      {groups.length ? (
        groups.map(({ building, items }) => (
          <section key={building.slug} className={styles.group} aria-labelledby={`gedung-${building.slug}`}>
            <h2 id={`gedung-${building.slug}`}>{building.name}</h2>
            <ul className={styles.srGrid}>
              {items.map((resident) => <li key={resident.slug}><ResidentCard resident={resident} /></li>)}
            </ul>
          </section>
        ))
      ) : <ListFeedback message="Belum ada profil Senior Resident yang dipublikasikan." />}
    </ContentPage>
  );
}
