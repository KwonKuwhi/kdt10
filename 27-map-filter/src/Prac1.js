import React, { useState } from 'react';

function Prac1() {
  const [inputInfo, setinputInfo] = useState({ name: '', email: '' });
  const [info, setInfo] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '권구휘',
      email: 'rngnl514@gmail.com',
    },
  ]);
  const addInfo = () => {
    const newInfo = info.concat({
      id: info.length + 1,
      name: inputInfo.name,
      email: inputInfo.email,
    });
    setInfo(newInfo);
    setinputInfo({ name: '', email: '' });
  };
  const deleteInfo = (e, key) => {
    console.log(key);
    const newArray = info.filter((info) => info.id !== key);
    setInfo(newArray);
  };

  return (
    <>
      <label>이름</label>
      <input
        type="text"
        placeholder="이름"
        value={inputInfo.name}
        onChange={(e) => {
          setinputInfo({
            name: e.target.value,
            email: inputInfo.email,
          });
        }}
      ></input>
      <label>이메일</label>
      <input
        type="text"
        placeholder="e-mail"
        value={inputInfo.email}
        onChange={(e) => {
          setinputInfo({
            name: inputInfo.name,
            email: e.target.value,
          });
        }}
        onKeyDown={(e) => {
          setinputInfo({
            name: inputInfo.name,
            email: e.target.value,
          });
          e.key === 'Enter' && addInfo();
        }}
      ></input>
      <button onClick={addInfo}>등록</button>
      <br />
      {info.map((value) => {
        return (
          <h3 key={value.id} onDoubleClick={(e) => deleteInfo(e, value.id)}>
            {value.name}: {value.email}
          </h3>
        );
      })}
    </>
  );
}

export default Prac1;

// bugfix : IME 문제 해결(한글 마지막 한글자가 더 나옴)
// if(e.nativeEvent.isComposing) return;

// input 값이 빈칸일 때
// 상태가 변경되지 않도록 하기
// inputAlpha.trim().length(공백 제거 후 길이 확인)
// if (inputAlpha.trim().length ===0 ) return;
// (함수 종료)
