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

let names = ['이연승', '정호연', '겨울이', '까미'];
let age = [30, 27, 4, 3];

let insertQuery = `INSERT INTO member (name, age) VALUES (?, ?)`;

for (let value in names) {
  db.run(insertQuery, [names[value], age[value]], (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('데이터가 성공적으로 생성');
    }
    db.close();
  });
}
