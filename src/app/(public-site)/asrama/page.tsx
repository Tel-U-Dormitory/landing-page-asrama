import Link from "next/link";
import { ContentPage } from "@/components/public-content/ui";
import { InfoGrid } from "@/components/site/info-grid";
import styles from "@/components/site/site.module.css";
import { dormLife, srOrganization } from "@/features/site-content/content";

export const metadata = {
  title: "Kehidupan Asrama dan Organisasi SR",
  description: "Informasi kehidupan asrama dan organisasi Senior Resident Telkom University Dormitory.",
};

export default function DormLifePage() {
  return (
    <ContentPage title="Kehidupan Asrama dan Organisasi SR">
      <section aria-labelledby="kehidupan">
        <h2 id="kehidupan">Kehidupan asrama</h2>
        <p className={styles.intro}>{dormLife.intro}</p>
        <InfoGrid items={dormLife.items} />
      </section>
      <section aria-labelledby="organisasi" style={{ marginTop: "2.5rem" }}>
        <h2 id="organisasi">Organisasi Senior Resident</h2>
        <p className={styles.intro}>{srOrganization.intro}</p>
        <InfoGrid items={srOrganization.items} />
        <p><Link href="/profil-sr" prefetch={false}>Lihat profil Senior Resident per gedung</Link></p>
      </section>
    </ContentPage>
  );
}