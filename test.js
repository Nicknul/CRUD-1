const sqlite3 = require('sqlite3').verbose();
// console.dir(sqlite3);

const db = new sqlite3.Database('databasefile.db');
console.log(db);
