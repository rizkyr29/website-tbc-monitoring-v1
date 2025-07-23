 // backend/db.js
   const mysql = require('mysql2');
   console.log('DB_HOST:', process.env.DB_HOST);
   console.log('DB_USER:', process.env.DB_USER);
   console.log('DB_PASS:', process.env.DB_PASS);
   console.log('DB_NAME:', process.env.DB_NAME);
   const db = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: process.env.DB_NAME,
   });
   db.connect((err) => {
     if (err) throw err;
     console.log('Connected to MySQL Database');
   });
   module.exports = db;