const sqlite3 = require('sqlite3').verbose();
// console.dir(sqlite3);

const db = new sqlite3.Database('databasefile.db');
// console.log(db);

// database 테이블 쿼리 만들기
const createTableQuery = `CREATE TABLE IF NOT EXISTS member (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
);
`;
