# Arsitektur

App Router merender halaman di server. Route memanggil repository berjenis domain dari `source.server.ts`. Repository menyuplai model publik untuk komponen kartu dan detail. Komponen klien dipakai untuk indikator navigasi detail dan tombol pemulihan error.

```text
App Router → repository publik → sumber data server
          → komponen presentasi
```

- **SRP**. Route menangani navigasi dan kondisi halaman. Kartu merender data publik. Fixture menentukan data simulasi. Composition root memilih sumber data.
- **OCP**. Adapter Events RESORA dan CMS nantinya dapat dipasang di composition root tanpa mengubah komponen presentasi.
- **LSP**. Implementasi pengganti harus mengembalikan hanya konten publik, mengembalikan `undefined` untuk slug yang tidak tersedia, dan meneruskan kegagalan sumber. Kesetaraan adapter produksi menunggu pengujian kontrak aktual.
- **ISP**. Events dan berita membutuhkan daftar serta detail. Pengumuman hanya membutuhkan daftar.
- **DIP**. Model dan antarmuka fitur menetapkan bentuk data yang dipakai halaman. Composition root memilih implementasi di server. Helper pencarian slug memadai untuk fixture kecil. Adapter produksi bisa memakai endpoint detail sendiri.

Adapter aktual perlu memvalidasi respons eksternal dan memetakan field yang diizinkan ke model publik. Model tersebut adalah kontrak internal aplikasi. Format payload, autentikasi, serta validasi sumber ditetapkan setelah kontrak upstream tersedia.
