const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./databasefile.db');

const updateData = db.prepare(`UPDATE member SET name = ? WHERE id = ?`);
