const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('databasefile.db');

const deleteMemberQurey = `DELETE FROM member WHERE id = ?`;
const userId = 4;

db.run(deleteMemberQurey, userId, (err) => {
  if (err) {
    console.error(`데이터 삭제 중 오류 발생:`, err.message);
  } else {
    console.log(`ID ${userId}가 삭제되었습니다.`);
  }
  db.close((closeErr) => {
    if (closeErr) {
      console.error(`데이터베이스 닫기 중 오류 발생:`, closeErr.message);
    }
  });
});
