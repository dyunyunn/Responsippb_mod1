# REST API Peminjaman Buku Perpustakaan (Responsi PPB)

---
## Panduan Pengujian API (Untuk Asisten Praktikum)
Berikut adalah panduan untuk melakukan *testing* seluruh operasi CRUD menggunakan Postman. Pastikan menggunakan **Base URL Vercel** di atas (bukan localhost) untuk menguji API yang sudah *live*.

### 1. CREATE - Tambah Data Peminjaman (POST)
1. **Endpoint:** `/loans`
2. **Method:** `POST`
3. **Body (JSON):**
    ```json
    {
      "member_name": "Rina",
      "book_title": "Belajar React",
      "borrow_date": "2026-10-04",
      "status": "Dipinjam"
    }
    ```
*Catatan Validasi:* Input `status` dibatasi dan **hanya menerima** 3 nilai: `"Dipinjam"`, `"Dikembalikan"`, atau `"Terlambat"`. Jika memasukkan status selain 3 kata tersebut, API otomatis menolak dengan error 400.

### 2. READ - Lihat Semua Data (GET)
1. **Endpoint:** `/loans`
2. **Method:** `GET`
3. **Fitur Filter:** Bisa menambahkan *query parameter* untuk menyaring status tertentu. 
    Contoh: `/loans?status=Terlambat`

### 3. UPDATE - Ubah Status Peminjaman (PUT)
1. **Endpoint:** `/loans/:id` (Ganti `:id` dengan angka ID data yang ingin diubah)
2. **Method:** `PUT`
3. **Body (JSON):**
    ```json
    {
      "status": "Dikembalikan"
    }
    ```
*Catatan Validasi:* Sama seperti POST, input status saat *update* juga dilindungi oleh validasi.

### 4. DELETE - Hapus Data (DELETE)
1. **Endpoint:** `/loans/:id` (Ganti `:id` dengan angka ID data yang ingin dihapus)
2. **Method:** `DELETE`
3. **Body:** *(Kosong / None)*
---

## Deskripsi Umum & Tujuan Proyek
REST API sederhana yang dibangun menggunakan Node.js, Express.js, dan Supabase untuk mengelola pencatatan peminjaman buku perpustakaan. 

## Struktur Data / Schema
Tabel `loans` pada Supabase:
1.  `id` (int8/uuid) - Primary Key
2.  `member_name` (text) - Nama Peminjam
3.  `book_title` (text) - Judul Buku
4.  `borrow_date` (date) - Tanggal Peminjaman
5.  `status` (text) - ("Dipinjam", "Dikembalikan", "Terlambat")

## Panduan Instalasi Lokal 
1. Buka terminal dan jalankan `git clone https://github.com/dyunyunn/Responsippb_mod1.git`
2. Masuk ke direktori proyek dengan perintah `cd nama direktorimu`.
3. Jalankan `npm install` untuk menginstal dependensi:
   - `express`: Framework server API.
   - `@supabase/supabase-js`: Koneksi ke database Supabase.
   - `dotenv`: Pengelola variabel lingkungan.
   - `cors`: Middleware akses API lintas domain.
   - `nodemon`: DevDependency untuk auto-restart server.
4. Buat file `.env` di root folder proyek dan masukkan kredensial Supabase.
   isikan dengan ini:
   SUPABASE_URL=masukkan_url_supabase_disini
   SUPABASE_KEY=masukkan_anon_key_supabase_disini

## Cara Menjalankan Lokal
1. Jalankan perintah npm run dev pada terminal di dalam folder proyek.
2. Server akan berjalan di port 3000.
3. API siap diuji coba secara lokal melalui http://localhost:3000.

## Link Hasil Deployment Vercel
[https://responsippb-mod1.vercel.app]
