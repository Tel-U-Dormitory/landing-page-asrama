// Isi kartu informasi. Tambahkan `text` pada item setelah materi resmi disetujui.
export type InfoItem = { title: string; text?: string };

export const dormLife = {
  intro: "Gambaran kehidupan di Asrama Putra dan Putri Telkom University.",
  items: [
    { title: "Hunian dan fasilitas" },
    { title: "Kegiatan penghuni" },
    { title: "Kehidupan bersama" },
  ] satisfies InfoItem[],
};

export const srOrganization = {
  intro: "Organisasi Senior Resident yang mendampingi kehidupan asrama.",
  items: [
    { title: "Struktur organisasi" },
    { title: "Departemen" },
    { title: "Senior Resident per gedung" },
  ] satisfies InfoItem[],
};

export const srRoles = {
  intro: "Peran dan tanggung jawab Senior Resident di asrama.",
  items: [
    { title: "Peran Senior Resident" },
    { title: "Tanggung jawab" },
    { title: "Batasan dan kewenangan" },
  ] satisfies InfoItem[],
};