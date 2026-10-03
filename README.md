# REST API Peminjaman Buku Perpustakaan

## Deskripsi Umum & Tujuan Proyek
REST API sederhana yang dibangun menggunakan Node.js, Express.js, dan Supabase untuk mengelola pencatatan peminjaman buku perpustakaan. API ini mendukung operasi CRUD dan filter pencarian status peminjaman.

## Struktur Data / Schema
Tabel `loans`:
- `id` (int8/uuid) - Primary Key
- `member_name` (text) - Nama Peminjam
- `book_title` (text) - Judul Buku
- `borrow_date` (date) - Tanggal Peminjaman
- `status` (text) - Contoh: "Dipinjam", "Dikembalikan", "Terlambat"

## Contoh Request & Response
**GET /loans?status=Terlambat**
Response:
```json
{
  "data": [
    {
      "id": 1,
      "member_name": "Budi",
      "book_title": "Pemrograman Node.js",
      "borrow_date": "2026-10-01",
      "status": "Terlambat"
    }
  ]
}
```

## Panduan Instalasi
1. Buka terminal dan jalankan git clone <link-repo-github-kamu> untuk mengunduh kode dari repository ini.
2. Masuk ke direktori proyek dengan mengetikkan cd <nama-folder-proyek>.
3. Jalankan perintah npm install untuk mengunduh dan menginstal semua dependensi yang dibutuhkan. Dependensi yang digunakan meliputi:
    express: Framework utama untuk membangun server API.
    @supabase/supabase-js: Library untuk menghubungkan API dengan database Supabase.
    dotenv: Untuk mengelola variabel lingkungan (menyembunyikan URL & Key Supabase).
    cors: Middleware agar API bisa diakses oleh aplikasi web klien.
    nodemon: (DevDependency) Untuk me-restart server otomatis saat masa pengembangan.
4. Buat file baru bernama .env di root folder proyek.
5. Buka file .env tersebut dan masukkan kredensial Supabase Anda dengan format berikut:
    SUPABASE_URL=masukkan_url_supabase_disini
    SUPABASE_KEY=masukkan_anon_key_supabase_disini

## Cara Menjalankan Lokal
1. Pastikan Anda sudah berada di dalam folder proyek pada terminal.
2. Jalankan perintah npm run dev untuk menyalakan server lokal.
3. Tunggu hingga terminal menampilkan pesan bahwa server telah berjalan di port 3000.
4. API sudah aktif dan siap diuji coba (testing) untuk seluruh operasi CRUD menggunakan aplikasi Postman dengan mengakses Base URL: http://localhost:3000.

## Link Hasil Deployment Vercel
[Link Vercel]

