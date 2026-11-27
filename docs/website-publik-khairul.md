# Website publik (Khairul)

| Task | FR | Route / komponen | Status |
| --- | --- | --- | --- |
| P102-D1-01 | FR-WEB-001 | `src/app/(public-site)`, tanpa autentikasi | UI siap. Hostname dan deploy butuh ACC PM |
| P102-D1-02 | FR-WEB-002 | `/` | Siap. Sumber event, berita, dan pengumuman dari repository Raihan |
| P102-D1-03 | FR-WEB-003 | `/asrama` | Siap. Kartu berisi judul, teks menunggu materi resmi |
| P102-D1-04 | FR-WEB-004 | `/senior-resident` | Siap. Kartu berisi judul, teks menunggu materi resmi |
| P102-D1-05 | FR-WEB-005, 015 | `/profil-sr?gedung=...` | UI dan data simulasi. Integrasi menunggu RSA-29 |
| P102-D1-06 | FR-WEB-010, 017 | `mapper.ts` (allowlist field), fixtures dev-only | Siap, diuji |
| P102-D1-07 | FR-WEB-011 | Tombol Salin tautan pada halaman detail, slug stabil | Siap |
| P102-D1-08 | FR-WEB-012 | `site.module.css`, menu mobile | Siap, uji manual viewport |
| P102-D1-09 | FR-WEB-018 | Semua route data memakai `force-dynamic` | Menunggu status CMS |

FR-WEB-013 (Rejected): tidak ada tautan login RESORA di navigasi atau footer.

## Mengisi teks halaman
Edit `src/features/site-content/content.ts` dan tambahkan `text` pada item setelah materi resmi disetujui.

## Menyambung profil SR
Ganti isi `src/features/senior-residents/source.server.ts` dengan adapter resmi setelah keputusan RSA-29. Pertahankan `toPublicResidents` agar hanya field publik yang keluar.
