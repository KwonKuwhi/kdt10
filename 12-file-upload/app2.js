const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path');// 경로에 관한 내장 모듈
const upload = multer({
    dest: 'uploads/', // dest : 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

// multer 세부 설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        // destination: 경로 설정
        destination(req, file, done) {
            // done: callback 함수
            // done(null, xx) : null => 에러가 없다는 의미
            done(null, 'uploads/'); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);
            console.log('ext >', ext);
            console.log('file name >', path.basename(file.originalname, ext));

            // path.basename(file.originalname, ext) => apple
            // => 확장자를 제외한 파일이름만
            done(null, `uploads`  + ext);
        }
    }),
    // limits: 파일 제한 정보
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/uploads', express.static(__dirname+'/uploads'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req, res) =>{
    res.render('index2');
})




app.listen(PORT,()=>{
    console.log(`${PORT} port is opening!`);
})


