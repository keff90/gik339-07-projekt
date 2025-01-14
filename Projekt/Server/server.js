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

  server.get('/godis/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM godis WHERE id=${id}`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(rows[0]);
      }
    });
  })

  server.post('/godis', (req, res) => {
    const godis = req.body;
    const sql = `INSERT INTO godis(godisName, color, price) VALUES (?,?,?)`;

    db.run(sql, Object.values(godis), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send('Godis sparades');
      }
    });
  });

  server.put('/godis', (req, res) => {
    const bodyData = req.body;
    
    const id = bodyData.id;
    const godis = {
      godisName: bodyData.godisName, 
      color: bodyData.color, 
      price: bodyData.price
    }

    let updateString = "";
    const columnsArray = Object.keys(godis);
    columnsArray.forEach((column, i) => {
      updateString += `${column}="${godis[column]}"`;
      if(i != columnsArray.length - 1) updateString += ",";
    });
    const sql = `UPDATE godis SET ${updateString} WHERE id=${id}`;

    db.run(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send('Godis uppdaterades');
      }
    });
  });

  server.delete('/godis/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM godis WHERE id = ${id}`;
    
    db.run(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send('Godis bort tagen');
      }
    })
  });