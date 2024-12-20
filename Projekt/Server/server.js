const express = require('express');
const server = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./godis.db');



server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    
    next();
  });

  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });

  server.get('/godis', (req, res) => {
    const sql = 'SELECT * FROM godis';

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    });
  });