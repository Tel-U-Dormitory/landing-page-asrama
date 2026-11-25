# landing-page-asrama

P1-02 Landing Page R&D Senior Resident Telkom University. Repository bersama untuk website publik dan integrasi kontennya. Implementasi awal mencakup halaman kegiatan, berita dan dokumentasi, serta pengumuman.

## Menjalankan proyek

Gunakan Node.js 24 dan Bun. Bun mengelola dependensi, lockfile, script, dan pengujian.

```sh
bun install --frozen-lockfile
bun run dev
```

Buka `http://localhost:3000/events`, `/berita`, atau `/pengumuman`. Homepage dan navigasi utama mengikuti pekerjaan Khairul.

Salin `.env.example` ke `.env.local` bila ingin mengaktifkan `PUBLIC_CONTENT_FIXTURES=1`. Mulai ulang dev server setelah mengubah variabel. Seluruh konten contoh berlabel simulasi dan fixture konten hanya aktif di development. Halaman menggunakan keadaan kosong sampai sumber data disambungkan.

## Pemeriksaan

```sh
bun run lint
bun run typecheck
bun run test
bun run build
bun run start
```

## Struktur dan kontribusi

- `src/app` memuat route App Router dan layout minimum Next.js.
- `src/features` memuat model publik, kartu fitur, dan sumber data.
- `src/components/public-content` memuat tampilan bersama untuk tiga fitur publik.
- [Arsitektur](docs/architecture.md), [integrasi Raihan](docs/integration-raihan.md), dan [alur Git](docs/git-workflow.md) menjelaskan cara mengembangkan dan menyambungkan fitur.

Khairul menangani fondasi website. Raihan menangani konten publik dan Events. Daniel menangani CMS editorial dan R2. Jidan menangani Prestasi dan publikasi PX.
