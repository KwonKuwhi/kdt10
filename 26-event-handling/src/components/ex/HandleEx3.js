import { useState } from 'react';
function HandleEx2() {
  const [text, setText] = useState('안녕하세요');
  const [order, setOrder] = useState('사라져라');
  function show() {
    text === '안녕하세요' ? setText('') : setText('안녕하세요');
    order === '사라져라' ? setOrder('보여라') : setOrder('사라져라');
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={show}>{order}</button>
    </div>
  );
}
export default HandleEx2;
