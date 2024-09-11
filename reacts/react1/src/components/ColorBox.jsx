import React, { useContext } from 'react'; // React 및 useContext 훅 임포트
import { ColorContext } from './ColorContext'; // ColorContext 임포트

// ColorBox 컴포넌트 정의
const ColorBox = () => {
  // 1. 컨텍스트 사용
  // useContext 훅을 사용하여 ColorContext에서 제공하는 값들을 가져옵니다.
  // 여기서는 'color' 상태와 'changeColor' 함수를 가져옵니다.
  const { color, changeColor } = useContext(ColorContext); // 컨텍스트에서 색상과 색상 변경 함수 가져오기

  return (
    // 2. 색상 박스 렌더링
    // 이 div는 현재 'color' 상태에 따라 배경색이 변경되는 박스입니다.
    <div
      style={{
        width: '200px', // 박스의 너비 설정
        height: '200px', // 박스의 높이 설정
        backgroundColor: color, // 컨텍스트에서 가져온 색상으로 배경색 설정
        margin: '20px auto', // 박스의 중앙 정렬을 위한 margin 설정
      }}
    >
      {/* 3. 색상 변경 버튼 */}
      {/* 이 버튼을 클릭하면 'changeColor' 함수가 호출되어 사용자로부터 색상을 입력받고 박스의 배경색을 변경합니다. */}
      <button onClick={changeColor}>Change Color</button> {/* 버튼을 클릭하면 색상 변경 */}
    </div>
  );
};

// ColorBox 컴포넌트를 기본으로 내보내기
export default ColorBox;