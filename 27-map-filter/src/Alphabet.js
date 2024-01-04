import React, { useState } from 'react';

function Alphabet() {
  const [Alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');
  const [Alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const addAlpha = () => {
    const newAlpha = Alphabet2.concat({
      id: Alphabet2.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet2(newAlpha);
    setInputAlpha('');
  };
  return (
    <>
      <ol>
        {/* map */}
        {/* 한줄일때 return과 {} 생략 가능 */}
        {Alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}

        {Alphabet2.map((value) => {
          return <li key={value.id}>{value.alpha}</li>;
        })}
      </ol>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
      />
      <button onClick={addAlpha}>Add</button>

      {/* 단축평가 */}
      {inputAlpha.length === 0 || <span>알파벳을 입력해주세요</span>}
      {inputAlpha.length === 0 && <span>알파벳을 입력해주세요</span>}
    </>
  );
}

export default Alphabet;

// 실습
// onkeydown={}
// li 요소 -> onDoubleClick
