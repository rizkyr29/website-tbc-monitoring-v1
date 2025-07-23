// backend/routes/admin.js
   const express = require('express');
   const db = require('../db'); // Pastikan ini benar
   const router = express.Router();
   router.post('/login', (req, res) => {
     const { username, password } = req.body;
     const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
     
     db.query(query, [username, password], (err, results) => {
       if (err) {
         console.error(err); // Tambahkan log untuk error
         return res.status(500).json({ error: err });
       }
       if (results.length > 0) {
         return res.status(200).json({ message: 'Login successful' });
       } else {
         return res.status(401).json({ message: 'Invalid credentials' });
       }
     });
   });
   module.exports = router;