


// -------mysql 연결--------
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database:'mvc_mysql'
})


exports.getVisitors = (cb) => {

    // query ( sql , values? ,콜백함수 )
    conn.query("SELECT * FROM visitor", (err,rows)=>{
        //DB 데이터 가져온 후 실행
        if(err) throw err;
        console.log('Visitor.js > ', rows);

        cb(rows); // 컨트롤러로 결과값을 넘겨줌

        // Visitor.js >  [
        //     { id: 1, name: '홍길동', comment: '내가 왔다.' },
        //     { id: 2, name: '이찬혁', comment: '으라차차' }
        //   ]
        //   Cvisitor.js > [
        //     { id: 1, name: '홍길동', comment: '내가 왔다.' },
        //     { id: 2, name: '이찬혁', comment: '으라차차' }
        //   ]
    })
}
/*
Prepared Statesments
SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 방지하기 위한 방법
입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신, 플레이스홀더를 사용하여 쿼리 작성
mysql 에서는 ?(물음표) 사용
*/
exports.postVisitor = (data,cb) => {
    // data: req.body
    // cb: 콜백함수
    console.log('postVisitor >',data);
    const sql = 'INSERT INTO visitor (name,comment) VALUE ( ? , ? )';
    const values = [data.name, data.comment];
    conn.query(sql, values, (err,rows)=>{
        if(err) throw err;

        console.log('Visitor.js>',rows);

        cb(rows.insertId); // 콜백함수 호출, 매개변수로 넘겨줌
    })
}


exports.getVisitor = (id, cb) => {
    const sql = 'SELECT * FROM visitor WHERE id = ?';
    conn.query(sql, [id], (err,rows)=>{
        if(err) throw err;
        
        console.log('getVisitor Visitor.js', rows);
        cb(rows[0]);
    })
}

exports.patchVisitor = (data,cb) => {
    const sql = 'UPDATE visitor SET name = ?, comment = ? WHERE id=?';
    const values = [data.name, data.comment, data.id];
    conn.query(sql,values, (err,rows)=>{
        if(err) throw err;

        console.log('patchVisitor Visitor.js >',rows);

        // patchVisitor Cvisitor.js >  ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 1
        //   }
        cb(rows);
    })
}

exports.deleteVisitor= (id, cb) => {
    console.log(id);

    const sql = 'DELETE FROM visitor WHERE id = ?';
    conn.query(sql, [id],(err,rows)=>{
        if(err) throw err;

        console.log('deleteVisitor Visitor.js >', rows);
        cb(rows);
    })
}