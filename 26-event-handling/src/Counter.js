import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${number} 입니다!`);
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(e);
    console.log(`${msg} 현재 숫자는 ${number} 입니다!`);
  };

  //   currnetTarget은 이벤트 핸들러가 있는 요소
  //  target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치(내가 클릭한 자식 요소)

  // currentTarget은 이벤트가 부착된 부모 요소 반환

  const handleEvent = (e) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
  };

  return (
    <div>
      <h1>Fuction Component</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없는 경우 -> 함수 이름만 전달 */}
      <h3>함수에 인자가 없는 경우</h3>
      <button onClick={increase}>더하기</button>

      {/* 함수에 인자 보내기: 인자가 있는 함수
      익명함수로 감싸서 처리 */}
      <h3>함수에 인자 보내기</h3>
      <button onClick={() => alertMsg('hello~~')}>alert 출력</button>
      <button onClick={(e) => consoleMsg(e, 'hello!!')}>console 출력</button>

      {/* e.target vs e.currentTarget */}
      {/* <button onClick={handleEvent}>
        <span>handleEvent</span>
      </button> */}
    </div>
  );
}

export default Counter;
