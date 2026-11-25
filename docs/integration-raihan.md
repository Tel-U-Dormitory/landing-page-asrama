# Integrasi konten publik Raihan

| Tugas | Jira dan FR | Route dan komponen | Status |
| --- | --- | --- | --- |
| P102-D2-01 | RSA-18, FR-WEB-006 | `/events`, `/events/[slug]`, EventCard | Partial, implementasi UI dan simulasi tersedia |
| P102-D2-02 | RSA-19, FR-WEB-007 | `/berita`, `/berita/[slug]`, NewsCard, thumbnail dan galeri | Partial, menunggu CMS dan media publik |
| P102-D2-03 | RSA-16, FR-WEB-008 | `/pengumuman` | Partial, menunggu CMS |
| P102-D2-04 | RSA-18, FR-WEB-014 | Repository Events dan batas integrasi server | Blocked, kontrak dan akses Events RESORA belum terverifikasi |

## Events RESORA

Backlog menentukan sumber Events RESORA dan membatasi publikasi pada kegiatan yang memang boleh dilihat publik. Inspeksi workspace yang awalnya kosong dan pencarian repository belum menemukan sumber atau dokumentasi resmi yang dapat diidentifikasi sebagai milik proyek. Endpoint, model respons, izin akses, dan aturan kelayakan belum terverifikasi.

Untuk menyambungkan adapter, pemilik Events perlu menyediakan akses repo atau dokumentasi resmi, endpoint daftar/detail, contoh respons yang disanitasi, autentikasi server yang diizinkan, cara mengenali event layak publik, dan daftar field yang boleh tampil. Adapter harus gagal secara aman jika aturan publikasi atau bentuk respons tidak dapat dipastikan. Peserta dan informasi internal tidak diproyeksikan ke model publik.

## CMS dan media

Daniel menyediakan sumber berita, dokumentasi, dan pengumuman yang sudah Published. Kontrak yang diperlukan mencakup identitas konten, slug stabil, kategori atau pemilah jenis, judul, isi dan formatnya, ringkasan, tanggal publikasi, URL media publik, metadata gambar, serta respons saat konten tidak tersedia. Galeri dan thumbnail mengonsumsi URL media yang telah disetujui untuk publikasi. Object key, credential, dan media privat tidak masuk kontrak tampilan.

## Integrasi dengan website

Khairul dapat menautkan tiga halaman dari navigasi publik. Konfirmasikan path, slug, dan penerapan layout bersama sebelum mengikatnya ke homepage. Route memakai render dinamis dan tautan detail tanpa prefetch. Pencabutan konten pada sumber harus menutup akses daftar serta detail langsung. Saat adapter tersedia, sepakati kebijakan caching aktual, termasuk CDN dan URL media R2, dengan Khairul dan Daniel. Belum ada mekanisme sinkronisasi lintas sistem.

PM dan pemilik sistem perlu mengonfirmasi kebijakan field publik atau perubahan akses bila diperlukan. Keputusan FR dan scope tetap mengikuti backlog.

## Simulasi dan pemeriksaan

`PUBLIC_CONTENT_FIXTURES=1` hanya berpengaruh di dev server. Buka `/events/simulasi-kegiatan` dan `/berita/simulasi-berita` untuk kasus positif. Slug `simulasi-internal`, `simulasi-draft`, dan `simulasi-ditarik` tidak tersedia melalui detail masing-masing. Berita simulasi menggunakan gambar lokal sebagai contoh, tanpa akses R2. Validasi payload upstream, pencabutan media, dan perilaku cache produksi harus diuji setelah integrasi tersedia.
