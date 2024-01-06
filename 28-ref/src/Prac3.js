import React, { useState } from 'react';
import { useRef } from 'react';

function Prac3() {
  const [inputInfo, setInputInfo] = useState({ name: '', content: '' });
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const inputName = useRef();

  const inputContent = useRef();

  const addList = () => {
    // input value =>  inputName.current.value === ''
    // if(writerRef.current.value === '') return writerRef.current.focus()
    if (inputInfo.name.trim().length === 0) {
      inputName.current.focus();
      return;
    } else if (inputInfo.content.trim().length === 0) {
      inputContent.current.focus();
      return;
    } else {
      const newList = list.concat({
        id: list.length + 1,
        name: inputInfo.name,
        content: inputInfo.content,
      });
      setList(newList);
      setInputInfo({ name: '', content: '' });
    }
  };

  const search = () => {
    const text = searchText;
    let category;
    document.querySelector('#select').value === 'name'
      ? (category = 'name')
      : (category = 'content');
    console.log(category);

    if (category === 'name') {
      const newSearchArray = list.filter((info) => info.name.includes(text));
      setSearchList(newSearchArray);
    } else if (category === 'content') {
      const newSearchArray = list.filter((info) => info.content.includes(text));
      setSearchList(newSearchArray);
    }
  };

  const showAll = () => {
    setSearchList(list);
  };

  return (
    <>
      <div>
        <div className="input">
          <label>작성자</label>
          <input
            type="text"
            placeholder="name"
            value={inputInfo.name}
            ref={inputName}
            onChange={(e) => {
              setInputInfo({
                name: e.target.value,
                content: inputInfo.content,
              });
            }}
          />
          <label>제목</label>
          <input
            type="text"
            placeholder=""
            value={inputInfo.content}
            ref={inputContent}
            onChange={(e) => {
              setInputInfo({
                name: inputInfo.name,
                content: e.target.value,
              });
            }}
          />
          <button onClick={addList}>등록</button>
        </div>
        <br />

        <div className="search">
          <select id="select">
            <option value="name">이름</option>
            <option value="content">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={search}>검색</button>
          <button onClick={showAll}>전체</button>
        </div>
        <div>
          <h3>목록</h3>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {list.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.content}</td>
                    <td>{value.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h3>검색 결과</h3>
          {searchList.length === 0 && '검색결과가 없습니다'}
          {searchList.length !== 0 && (
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                </tr>
              </thead>
              <tbody>
                {searchList.map((value) => {
                  return (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.content}</td>
                      <td>{value.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Prac3;
