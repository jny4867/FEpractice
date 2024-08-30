import logo from './logo.svg';
import './App.css';
import PropTypesComponent from './components/PropTypesComponent';
import MovieComponent from './components/MovieComponent';
import TodoListComponent from './components/TodoListComponent';
import PriceListComponent from './components/PriceListComponent';
import Prac01 from './components/Prac01';
import Spread from './components/Spread';
import React, {useState} from 'react';
import ChildComponent from './components/ChildComponent';
import UserId from './components/UserId';
import UserPw from './components/UserPw';
// import ChangeProps from './components/changeprops';
function App() {

  //문제 1
  // const numbers = [5, 10, 15, 20, 25, 30];

  // numbers.forEach((number, index)=> {
  //   if (number % 2 ===0){
  //     numbers.splice(index, 1);
  //   }
  // });

  // return(
  //   <div>
  //     배열의 남은 요소: {numbers.join(", ")}
  //   </div>
  // )

  //문제2
// 검색어와 검색 결과를 저장하기 위한 두 개의 상태를 선언합니다.
const [search, setSearch] = useState(''); // 사용자가 입력한 검색어를 저장하는 상태
const [result, setResult] = useState(''); // 검색 결과를 저장하는 상태

// 검색할 과일 목록을 배열로 정의합니다.
const fruits = [
  {
    name: 'apple', // 과일 이름
    num: 2,        // 과일 수량
    price: 1000    // 과일 가격
  },
  {
    name: 'banana',
    num: 3,
    price: 2500
  },
  {
    name: 'orange',
    num: 5,
    price: 5000
  }
];

// 사용자가 입력 필드에 타이핑할 때마다 호출되는 함수
const handleInputChange = (e) => {
  setSearch(e.target.value); // 입력된 값을 search 상태에 저장
};

// 검색 버튼을 클릭했을 때 호출되는 함수
const handleSearch = () => {
  // fruits 배열에서 사용자가 입력한 과일 이름과 일치하는 첫 번째 과일을 찾습니다.
  const foundFruit = fruits.find(
    fruit => fruit.name.toLowerCase() === search.toLowerCase()
  );
  
  // 검색 결과에 따라 result 상태를 업데이트합니다.
  setResult(
    foundFruit 
      ? `이름: ${foundFruit.name}, 수량: ${foundFruit.num}, 가격: ${foundFruit.price}` 
      : '과일을 찾지 못했습니다.'
  );
};

return (
  <div>
    <h1>과일 검색</h1> {/* 제목을 출력합니다 */}
    <input 
      type="text" 
      placeholder="과일 이름을 입력하세요" // 입력 필드의 플레이스홀더
      value={search} // 입력 필드에 표시될 값 (검색어)
      onChange={handleInputChange} // 입력 필드의 값이 변경될 때 handleInputChange 함수 호출
    />
    <button onClick={handleSearch}>검색</button> {/* 검색 버튼을 클릭하면 handleSearch 함수 호출 */}
    <p>{result}</p> {/* 검색 결과를 출력합니다 */}
  </div>
);




  // const [value, setValue] = useState(['안녕', 'Hi']); 
  // //초기 상태 설정, value는 상태값, setValue는 상태변경 함수

  // function swapValue(index1, index2){ //배열 내 두 요소의 위치를 교환하는 함수
  //   const newValue = [...value]; //기존 배열의 복사본을 생성하여 newValue에 저장

  //   const temp = newValue[index1]; //임시변수에 첫번째 인덱스 값을 저장
  //   newValue[index1] = newValue[index2];// 첫번째 인덱스에 두번째 인덱스 값을 할당
  //   newValue[index2] = temp;// 두번째 인덱스에 임시변수에 저장된 값을 할당

  //   setValue(newValue);// 변경된 배열 newValue로 상태변경하여 컴포넌트 리렌더링
  // }




  // const [id, setId] = useState(""); 
  // const [pw, setPw] = useState(""); 

  // function addIdHandler(id){
  //   setId(id)
  // }
  // function addPwHandler(pw){
  //   setPw(pw)
  // }

  // function loginCheck(){
  //   if(id === 'nayoung'&& pw === 'satoru'){
  //     alert('로그인 성공');
  //   }else{
  //   alert('로그인 실패');
  //   }
  // };




  // useState를 사용하여 상태 value를 빈 문자열("")로 초기화

  // addDataHandler 함수는 자식 컴포넌트로부터 전달받은 데이터를 상태로 설정
  // function addDataHandler(dataId){
  //   setValue(dataId);
  //   // 전달받은 데이터를 value 상태로 설정하여 컴포넌트를 재렌더링
  // }
  // function addDataHandler(dataPw){
  //   setValue(dataPw);
  //   // 전달받은 데이터를 value 상태로 설정하여 컴포넌트를 재렌더링
  // }



// return(
//   // <div>
//   //   <ul>
//   //     {/* value 배열의 각 요소를 li 태그로 렌더링, index를 key로 사용 */}
//   //     {value.map((values, index) => (
//   //       <li key={index}>{values}</li>
//   //     ))}
//   //   </ul>
//   //   <button onClick={() => swapValue(0,1)}>SWAP</button>
//   //   {/* 버튼을 클릭하면 swapValue 함수 호출*/}
//   // </div>
//   // <>
//   // {/* 부모 컴포넌트에서 자식 컴포넌트로부터 전달받은 데이터를 화면에 표시 */}
//   // <h3>자식 컴포넌트에게 전달받은 데이터: {value}</h3>
//   // {/* ChildComponent를 렌더링하고, onAddData prop을 통해 addDataHandler 함수를 자식 컴포넌트에 전달 */}
//   // <ChildComponent onAddData={addDataHandler}/>
  
//   // </>
//   // <div>
//   //   <UserId onAddId = {addIdHandler}/>
//   //   <UserId onAddPw = {addPwHandler}/>
//   //   <button onClick = {loginCheck}>로그인</button>
//   // </div>

// );

};

export default App;
