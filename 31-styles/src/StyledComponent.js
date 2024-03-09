import styled from 'styled-components';

// css in JS: css를 JS 안에 작성함
// styled components , emotion, styled-jsx, ...
// 각 컴포넌트마다 격리된 스타일 적용가능

const StyledContainer = styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};

  &:hover {
    transform: translateY(-20px);
  }
`;

// ---------------복습 -----------------
// 기본 사용법

const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

//props를 이용하는 방법
const _Boxtwo = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
`;

//상속받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
  border-radius: 50%;
`;

//버튼 컴포넌트와 as 키원드를 사용
const _Btn = styled.button`
  background-color: aqua;
  color: ${(props) => props.color};
  padding: 10px 15px;
  border-radius: 4px;
`;

//html 태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true, readOnly: true })`
  background-color: yellow;
`;

//중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: chocolate;
  line-height: 200px;
  text-align: center;

  //다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: crimson;
  }

  p {
    color: white;

    // pseudo
    &:hover {
      font-size: 30px;
    }
  }
`;

function StyledComponent() {
  return (
    <>
      <_Boxthree>
        <p>Hi</p>
        <_Input />
      </_Boxthree>
      {/* <StyledContainer>
        <StyledBox bgColor="red" /> 
        <StyledBox /> 
      </StyledContainer>
      <_Boxone></_Boxone>
      <_Boxtwo color={'red'}></_Boxtwo>
      <_Circle color={'green'}></_Circle>
      <_Btn color={'blue'}>클릭</_Btn>
      <_Btn as="a" href="https://www.naver.com">
        NAVER
      </_Btn>
      <br />
      <_Input></_Input> */}
    </>
  );
}

export default StyledComponent;
