const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke Database Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Endpoint Root
app.get('/', (req, res) => {
    res.json({ message: 'API Peminjaman Buku Perpustakaan Berjalan!' });
});

// 1. CREATE: Tambah data peminjaman buku
app.post('/loans', async (req, res) => {
    const { member_name, book_title, borrow_date, status } = req.body;
    
    // Validasi pembatasan status
    const allowedStatus = ["Dipinjam", "Dikembalikan", "Terlambat"];
    if (!allowedStatus.includes(status)) {
        return res.status(400).json({ error: 'Status hanya boleh: Dipinjam, Dikembalikan, atau Terlambat' });
    }

    const { data, error } = await supabase
        .from('loans')
        .insert([{ member_name, book_title, borrow_date, status }])
        .select();
    
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: 'Data berhasil ditambahkan', data });
});

// 2. READ: Ambil semua data (Bisa difilter misal: /loans?status=Terlambat)
app.get('/loans', async (req, res) => {
    const { status } = req.query; 
    let query = supabase.from('loans').select('*');
    
    if (status) {
        query = query.eq('status', status); // Filter berdasarkan status
    }
    
    const { data, error } = await query;
    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
});

// 3. UPDATE: Ubah status peminjaman berdasarkan ID
app.put('/loans/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validasi pembatasan status
    const allowedStatus = ["Dipinjam", "Dikembalikan", "Terlambat"];
    if (!allowedStatus.includes(status)) {
        return res.status(400).json({ error: 'Status hanya boleh: Dipinjam, Dikembalikan, atau Terlambat' });
    }
    
    const { data, error } = await supabase
        .from('loans')
        .update({ status })
        .eq('id', id)
        .select();
        
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: 'Data berhasil diupdate', data });
});

// 4. DELETE: Hapus data peminjaman
app.delete('/loans/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('loans')
        .delete()
        .eq('id', id);
        
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: 'Data berhasil dihapus' });
});

// Export app untuk Vercel
module.exports = app;

// Jalankan server di localhost (port 3000)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}
