import './App.css';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import Food from './Food';
import Button from './Button';
import Book from './Book';
import Prac3 from './ClassPrac3';

function App() {
  return (
    <div className="App">
      <Prac3 text="이건 test text 입니다" valid="콘솔 띄우기 성공!" />
      <Prac3 valid="콘솔 띄우기 성공!" />
      {/* <Food />
      <Food food="떡볶이" /> */}
      {/* <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      /> */}
    </div>
  );

  //const name = '로이';
  // const animal = '강아지';
  // let a = 5;
  // let b = 3;
  // const styles = {
  //   backgroundColor: 'yellow',
  //   color: 'red',
  //   fontSize: '40px',
  //};
  // const title = 'Hello World';
  // // 자바스크립와 동일하게 주석 처리
  // return (
  //   <div className="App">
  //     <FuncComponent name="코딩온" />
  //     <FuncComponent />
  //     <hr />
  //     <Button link="https://www.google.com">Google</Button>
  //     <hr />
  //     <hr />
  //     <ClassComponent name="코딩온" />
  //     <ClassComponent />
  //     <div className="header">{title}</div>
  //     <div className="input">
  //       <label>아이디</label>
  //       <input type="text" />
  //       <br />
  //       <label>비밀번호</label>
  //       <input type="password" />
  //     </div>
  //   </div>
  // <div className="App">
  //   <h2>
  //     제 반려 동물의 이름은 {name} 입니다.
  //     <br /> {name}는 {animal}입니다
  //   </h2>
  //   <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
  // 단축평가 &&
  //   <div>{a > b && 'a가 b보다 큽니다'}</div>
  // </div>
  // <div className="App">
  //   {/* JSX 문법 */}
  //   {/* 1. 하나로 감싸인 요소 */}
  //   {/* 2. javascript 표현식 사용
  //     -{}로 감싸면 js 표현식 사용 가능
  //     -{}에서 삼항 연산자 사용 가능(if문은 안됨)
  //    */}
  //   <div>{name} 안녕하세요! </div>
  //   <div>{name === 'gildong' ? 'gildong 입니다' : '잘못 아셨네요'}</div>
  //   {/* 3. style 속성(인라인)
  //     - 리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
  //     - 스타일 속성 이름 중에서 하이픈  (-) 포함시 camelCase 사용
  //      */}
  //   <div
  //     style={{
  //       backgroundColor: 'blue',
  //       color: 'white',
  //       fontSize: '48px',
  //     }}
  //   >
  //     스타일 적용!
  //   </div>
  //   <div style={styles}>스타일 적용2</div>
  //   {/* 4. className 사용
  //     - class 속성이 아닌 className 속성 사용!
  //       5. 종료 태그가 없는 태그의 사용
  //       - 기존에 종료 태그가 없는 태그를 사용 하더라도 종료 태그를 작성 해야함 or self-closing
  //       - <input> -> <input></input> or ><input />
  //       - <br> -> <br></br> or <br />
  //       6. 주석
  //       -//: jsx 외부 주석 (return 밖)
  //       - 내부 에서는 현재 주석
  //   */}
  // </div>
  //);
}

export default App;
