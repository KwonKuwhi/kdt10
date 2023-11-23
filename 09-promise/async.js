// async - await
// async: 함수 앞에 붙이는 키원든
// - 함수만 보고도 비동기 함수임을 알 수 있다.
// - 프로미스를 반환
// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다려줌
// - await 뒤에는 프로미스가 오게 됨
// async- await 짝꿍, async 키워드를 사용한 함수 안에서만 await 사용 가능

// const { reject } = require("async");

// function goMart() {
//     console.log('마트에 와서 어떤 음료를 살지 고민중,,,');

// }

// function pickDrink() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(function () {
//             console.log('고민 끝!!');
//             product = '콜라';
//             price = 1600;
//             // resolve();
//             reject('에러 발생!')
//         }, 3000);
        
//     })
//     //3초 고민
    
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product, price;
// async function exec(){
//     goMart();
//     await pickDrink();
//     pay(product, price);
// }

// // exec();

// //async-await 키워드 사용시, 에러처리는 try-catch문으로!

// async function exec1() {
//     try{
//         goMart();
//         await pickDrink();
//         pay(product, price);
//     }catch(error){
//         console.log(error);
//     }
// }
// exec1();


// 실습2
function call(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000)
    })
}

function back(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('back');
            resolve('back');
        },1000);
    })
}

function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('callback hell');
        },1000)
    })
}

async function exec(){
    let user = await call("kim");
    console.log(user + '님 환영합니다.');
    let txt = await back();
    console.log(txt+'을 실행했구나');
    let msg = await hell();
    console.log('여기는 '+ msg);
}

exec();