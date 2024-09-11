import React, { createContext, useState } from 'react';

// 1. Context 생성
// ColorContext는 React의 Context API를 사용하여 생성된 컨텍스트입니다.
// 이 컨텍스트는 하위 컴포넌트들이 전역적으로 접근할 수 있는 상태를 관리하는 데 사용됩니다.
export const ColorContext = createContext();

// 2. ColorProvider 컴포넌트 생성
// ColorProvider는 ColorContext의 값을 실제로 제공하는 컴포넌트입니다.
// 이 컴포넌트는 Context API의 Provider를 사용하여 하위 컴포넌트에 상태와 함수를 전달합니다.
export const ColorProvider = ({ children }) => {
  // 3. 상태(state) 정의
  // 'color' 상태는 기본값으로 'green'을 가지고 있으며, setColor 함수를 사용하여 상태를 업데이트할 수 있습니다.
  const [color, setColor] = useState('green'); // 기본 색상은 green으로 설정

  // 4. 색상 변경 함수 정의
  // changeColor 함수는 사용자의 입력을 받아 'color' 상태를 업데이트합니다.
  // prompt()를 사용하여 사용자에게 색상을 입력받고, 입력값이 있을 경우에만 상태를 업데이트합니다.
  const changeColor = () => {
    const userColor = prompt('Enter a color:'); // 사용자로부터 색상 입력 받기
    if (userColor) { // 사용자가 값을 입력했을 때만 상태 변경
      setColor(userColor); // 'color' 상태를 사용자 입력으로 업데이트
    }
  };

  // 5. Provider 컴포넌트로 하위 컴포넌트 감싸기
  // ColorContext.Provider는 모든 하위 컴포넌트가 접근할 수 있는 value를 제공하며, 이 value는 객체 형태로 'color' 상태와 'changeColor' 함수를 포함합니다.
  // 'children'은 ColorProvider 컴포넌트 내부에 있는 모든 하위 컴포넌트를 의미하며, 이 하위 컴포넌트들은 ColorContext의 값을 사용할 수 있습니다.
  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};