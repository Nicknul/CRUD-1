const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('databasefile.db');

let updateData = `UPDATE member SET name = ? WHERE id = ?`;
let updateName = '이연승';
let userId = 1;

db.run(updateData, [updateName, userId], (err) => {
  if (err) {
    console.error('데이터 전송 중 에러:', err.message);
  } else {
    console.log(`ID ${userId} 사용자의 이름이 ${updateName}으로 업데이트 되었습니다.`);
  }
  db.close();
});
