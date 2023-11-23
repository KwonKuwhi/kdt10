// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할
// => 객체들의 값을 펼쳐준다!

// 배열에서 spread
const a =[1,2,3];
const b = [4,5];
const spread = [...a, ...b];
console.log (spread)

// 문자열에서 spread
const str = 'Hello';
console.log([...str]); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(str.split('')); //[ 'H', 'e', 'l', 'l', 'o' ]

// 객체에서 spread
const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatoChip = {
    ...chip, 
    flavor: 'onion'
}

const sweetPotatoChip={
    ...potatoChip,
    flavor:'sweet onion'
}
console.log(chip); // { base: 'chip', company: 'lotte' }
console.log(potatoChip); // { base: 'chip', company: 'lotte', flavor: 'onion' }
console.log(sweetPotatoChip);

// 실습
const word1='abc';
const word2 ='xyz';

const wordArr = [...word1, ...word2];
console.log(wordArr);

