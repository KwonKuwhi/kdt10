// ----------MYSQL 연결 ------------
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
})


// 회원가입
exports.userRegister = (data,cb) => {
    console.log('모델에서 찍은 register data', data);
    const sql = 'INSERT INTO user (id,pw,name) VALUE(?, ?, ?)';
    const value =[data.id, data.pw, data.name];
    conn.query(sql,value, (err, rows)=>{
        if(err) throw err;
        console.log('모델 User.js 에서 rows',rows);
    })
    cb(rows);
}
// 로그인
exports.checkUser = (data,cb) => {
    const sql = `SELECT * FROM user WHERE id=?`;
    values=[data.id];
    conn.query(sql,values,(err,rows)=>{
        try{
            console.log('signin >',rows);
            console.log('signin-row[0].id >',rows[0].id);
            cb(rows);


        }catch{
            console.log('등록되지 않은 아이디');
            cb(rows);
        }

       
        
    })
    


}
// 회원정보 불러오기
exports.postProfile = (userId,cb) => {
    console.log('profile로 넘겨받은 data', userId);
    const sql = `SELECT * FROM user WHERE id=?`;
    values=[userId.userId];
     conn.query(sql,userId,(err,rows)=>{
        try {
            console.log('User.js post_profile>',rows);//[{}]
            cb(rows);
        }catch{
            console.log(err);
        }
    })
}
//회원정보 수정 요청
exports.edit_profile = (data, cb) => {
    const sql = 'UPDATE user SET name= ?, pw = ? WHERE id =?';
    const values = [data.name, data.pw, data.id];

    conn.query(sql, values, (err,rows)=>{
        if(err) throw err;
        console.log('User.js edit_profile > ',rows);
        cb(rows);
    })
}
//회원정보 삭제 요청
exports.delete_profile = (id, cb) => {
    const sql = 'DELETE FROM user WHERE id = ? ';
    conn.query(sql,[id],(err,rows)=>{
        if(err) throw err;
        console.log(rows);

        cb(rows);

    })
}