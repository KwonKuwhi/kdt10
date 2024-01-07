import { useEffect } from 'react';
import React, { useState } from 'react';

function LifeCycleFuncChild(props) {
  //   const { postList } = props;
  const [state, setState] = useState([]);

  useEffect(() => {
    // useEffect 사용할 떄 비동기 작업을 함수로 래핑한 다음 useEffect에서 함수 호출
    async function putList() {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setState(data);
        });
    }
    console.log('컴포넌트 마운트!!');
    setTimeout(putList, 2000);
  }, []);

  //   Unmount 시점에 실행
  useEffect(() => {
    return () => {
      console.log('컴포넌트 언마운트!');
    };
  }, []);

  //   Mount or Update 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 마운트 or 업데이트!!');
  }, []);

  return (
    <>
      {state.length === 0 ? (
        <div className="loading">loading...</div>
      ) : (
        state.map((value) => {
          return (
            <div className="list" key={value.id}>
              <span className="id">No.{value.id}</span>-
              <span className="title">{value.title}</span>
              <div className="body">{value.body}</div>
            </div>
          );
        })
      )}
    </>
  );
}

export default LifeCycleFuncChild;
