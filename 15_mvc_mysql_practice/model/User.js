// ----------MYSQL 연결 ------------
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
})

exports.userRegister = (data,cb) => {
    console.log('모델에서 찍은 register data', data);
    const sql = 'INSERT INTO user (id,pw,name) VALUE(?, ?, ?)';
    const valuew =[data.id, data.pw, data.name];
    conn.query(sql,valuew, (err, rows)=>{
        if(err) throw err;
        console.log('모델 User.js 에서 rows',rows);
    })
    cb();
}

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