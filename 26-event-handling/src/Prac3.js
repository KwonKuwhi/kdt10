import React, { useState } from 'react';

function Prac3() {
  const [prac, setPrac] = useState({
    img: 'img/사과.jpeg',
    bg: 'black',
    color: 'white',
    content: '',
  });
  // const [img, setImg] = useState('img/사과.jpeg');
  // const [bg, setBg] = useState('black');
  // const [color, setColor] = useState('white');
  // const [content, setContent] = useState('');

  const changeImg = (e) => {
    // setImg(e.target.value);
    setPrac({
      img: e.target.value,
      bg: prac.bg,
      color: prac.color,
      content: prac.content,
    });
  };
  const changeBg = (e) => {
    // setBg(e.target.value);
    setPrac({
      img: prac.img,
      bg: e.target.value,
      color: prac.color,
      content: prac.content,
    });
  };
  const changeColor = (e) => {
    // setColor(e.target.value);
    setPrac({
      img: prac.img,
      bg: prac.bg,
      color: e.target.value,
      content: prac.content,
    });
  };
  const changeContent = (e) => {
    // setContent(e.target.value);
    setPrac({
      img: prac.img,
      bg: prac.bg,
      color: prac.color,
      content: e.target.value,
    });
  };
  return (
    <div>
      <label>과일</label>
      <select onChange={changeImg}>
        <option value="img/사과.jpeg">사과</option>
        <option value="img/복숭아.jpeg">복숭아</option>
        <option value="img/바나나.jpeg"> 바나나</option>
      </select>
      <label>배경색</label>
      <select onChange={changeBg}>
        <option value="black">검정</option>
        <option value="pink">분홍</option>
        <option value="yellow">노랑</option>
        <option value="skyblue">하늘</option>
      </select>
      <label>글자색</label>
      <select onChange={changeColor}>
        <option value="white">흰색</option>
        <option value="blue">파랑</option>
        <option value="black">검정</option>
        <option value="violet">보라</option>
        <option value="green">초록</option>
      </select>
      <br />
      <label>내용</label>
      <input type="text" onChange={changeContent}></input>

      <div>
        <img src={prac.img} alt={prac.img}></img>
      </div>
      <div
        className="contentArea"
        style={{
          color: prac.color,
          backgroundColor: prac.bg,
        }}
      >
        {prac.content}
      </div>
    </div>
  );
}

export default Prac3;
