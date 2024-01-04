import { useState } from 'react';
function HandleEx2() {
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor] = useState('black');
  function changeRed() {
    setText('빨간색 글씨');
    setColor('red');
  }
  function changeBlue() {
    setText('파란색 글씨');
    setColor('blue');
  }

  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
export default HandleEx2;
