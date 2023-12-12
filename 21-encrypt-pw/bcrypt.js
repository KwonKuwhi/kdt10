// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안이 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require('bcrypt');

const originalPW = '1234'; // 원본 비번
const saltRounds = 10; // 솥트 라우드 수를 정의


// 1. 비밀번호 해싱 함수
function hashPW(password){
    return bcrypt.hashSync
(password,saltRounds)//salt를 자동으로 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
// 같은지 다른지만 알려줌
function comparePW(password, hashedPW){
    return bcrypt.compareSync(password, hashedPW);
}

// 사용 에제
// 원본 비번을 해싱한 결과
const hashedPW = hashPW(originalPW);
console.log(`Hashed PW: ${hashedPW}`);
// 원본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePW(originalPW,hashedPW); //true or false
console.log(`origianl과 hashed 비밀번호 일치여부:${isMatch}`);

const isMatch2 = comparePW('hello',hashedPW); //true or false
console.log(`"hello"와 hashed 비밀번호 일치여부:${isMatch2}`);

