# Alur kolaborasi Git

Repository GitHub yang dituju adalah `landing-page-asrama` privat di organisasi **Tel-U Dormitory** dengan default branch `main`. Gunakan URL dan slug setelah diverifikasi oleh akun Rayatsa. Jika repository sudah berisi commit, ambil riwayatnya dan integrasikan perubahan dengan aman.

Setelah menerima akses repository, jalankan perintah berikut dengan URL remote yang diverifikasi.

```sh
git clone <url-repository>
cd landing-page-asrama
bun install --frozen-lockfile
git switch main
git pull --ff-only
git switch -c feature/<nama>-<fitur>
bun run dev
```

Branch Raihan adalah `feature/raihan-public-content-events`. Jika branch sudah tersedia di remote, gunakan `git switch --track origin/feature/raihan-public-content-events` sebagai ganti membuat branch baru.

Jalankan lint, typecheck, test, dan build dari README sebelum commit. Tinjau perubahan dan stage file yang diperlukan.

```sh
git status
git add <file-yang-diubah>
git commit -m "Describe the change"
git push -u origin HEAD
```

Buka Pull Request ke `main`, tautkan Jira, ringkas perubahan dan hasil pengujian, lalu minta review. Hindari force push dan penghapusan branch rekan.

Admin organisasi dapat memberi akses melalui pengaturan akses repository atau GitHub team setelah username anggota diberikan. Berikan peran Write untuk developer yang akan mendorong feature branch, sesuai kebijakan organisasi.
