const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./katt.db');

const express = require('express');
const server = express();


server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    
    next();
  });

  server.get(
    /* */
  )