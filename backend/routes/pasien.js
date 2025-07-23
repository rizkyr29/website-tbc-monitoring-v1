// backend/routes/pasien.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all pasien
router.get('/', (req, res) => {
  db.query('SELECT * FROM pasien', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Insert pasien
router.post('/', (req, res) => {
  const { nama, nik, alamat, tanggal_lahir, keterangan, detail_alamat, status_tbc, nomor_telepon } = req.body;
  const query = 'INSERT INTO pasien (nama, nik, alamat, tanggal_lahir, keterangan, detail_alamat, status_tbc, nomor_telepon) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [nama, nik, alamat, tanggal_lahir, keterangan, detail_alamat, status_tbc, nomor_telepon], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Pasien added successfully' });
  });
});

// Update pasien
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, nik, alamat, tanggal_lahir, keterangan, detail_alamat, status_tbc, nomor_telepon } = req.body;
  const query = 'UPDATE pasien SET nama = ?, nik = ?, alamat = ?, tanggal_lahir = ?, keterangan = ?, detail_alamat = ?, status_tbc = ?, nomor_telepon = ? WHERE id = ?';
  
  db.query(query, [nama, nik, alamat, tanggal_lahir, keterangan, detail_alamat, status_tbc, nomor_telepon, id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pasien updated successfully' });
  });
});

// Delete pasien
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM pasien WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pasien deleted successfully' });
  });
});

module.exports = router;
