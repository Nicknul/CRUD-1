const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('databasefile.db');

const updateData = db.prepare(`UPDATE member SET name = ? WHERE id = ?`);

updateData.run('이연승', 1, (err) => {
  if (err) {
    console.error('데이터 업데이트 중 오류 발생:', err.message);
  } else {
    console.log(`ID 1 사용자의 이름이 이연승으로 업데이트되었습니다.`);
  }
  db.close();
});
