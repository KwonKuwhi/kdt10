import { UserContext } from './UserContext';
import { useState } from 'react';

function UserProvider({ children }) {
  console.log('children', { children });
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  //   defaultUser로 설정한 값(name, setName)
  // 이름 변경할 수 있게 useState 사용
  const [name, setName] = useState('홍길동');

  return (
    <UserContext.Provider value={{ name: name, setName: setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
