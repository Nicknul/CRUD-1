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

let names = '정호연';
let age = 27;

let test = {
  name: ['이연승', '정호연'],
  age: [30, 27],
};

let insertQuery = `INSERT INTO member (name, age) VALUES (?, ?)`;

db.run(insertQuery, [test.name, test.age], (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('데이터가 성공적으로 생성');
  }
  db.close();
});
