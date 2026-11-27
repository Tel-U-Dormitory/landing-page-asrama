// Navigasi utama website publik. Tidak ada tautan login RESORA (FR-WEB-013 Rejected).
// Tambahkan /prestasi di sini setelah route Prestasi (Jidan) tersedia.
export const siteNav = [
  { href: "/", label: "Beranda" },
  { href: "/asrama", label: "Asrama" },
  { href: "/senior-resident", label: "Senior Resident" },
  { href: "/profil-sr", label: "Profil SR" },
  { href: "/events", label: "Kegiatan" },
  { href: "/berita", label: "Berita" },
  { href: "/pengumuman", label: "Pengumuman" },
] as const;

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
