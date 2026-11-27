import { ContentPage } from "@/components/public-content/ui";
import { InfoGrid } from "@/components/site/info-grid";
import styles from "@/components/site/site.module.css";
import { srRoles } from "@/features/site-content/content";

export const metadata = {
  title: "Peran dan Tanggung Jawab Senior Resident",
  description: "Penjelasan peran dan tanggung jawab Senior Resident Telkom University Dormitory.",
};

export default function SeniorResidentPage() {
  return (
    <ContentPage title="Peran dan Tanggung Jawab Senior Resident">
      <p className={styles.intro}>{srRoles.intro}</p>
      <InfoGrid items={srRoles.items} />
    </ContentPage>
  );
}