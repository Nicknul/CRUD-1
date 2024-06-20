const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('databasefile.db');

let updateData = db.prepare(`UPDATE member SET name = ? WHERE id = ?`);
let updateName = '정호연';
let userId = 1;

updateData.run(updateName, userId, (err) => {
  if (err) {
    console.error('데이터 전송 중 에러:', err.message);
  } else {
    console.log(`ID ${userId} 사용자의 이름이 ${updateName}으로 업데이트 되었습니다.`);
  }
  // 준비된 Qurey 완료 후 닫기
  updateData.finalize((finalizeErr) => {
    if (finalizeErr) {
      console.log(`Statment 종료 후 오류 발생:`, finalizeErr.message);
    }
    // 데이터베이스 연결 종료
    db.close((closeErr) => {
      if (closeErr) {
        console.log('데이터베이스 닫기 중 오류 발생:', closeErr.message);
      }
    });
  });
});
