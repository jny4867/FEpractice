import React from 'react';
import Submit from './components/Submit';
import Prac07 from './components/Prac07';
// import WinCat from './components/images/windowcat.JPG'

const App = () => {
//     // const regionList = [  // `const` 키워드 추가
//     //     {
//     //         region: '서울',
//     //         eng: 'Seoul'
//     //     },
//     //     {
//     //         region: '부산',
//     //         eng: 'Busan'
//     //     },
//     //     {
//     //         region: '제주',
//     //         eng: 'Jeju'
//     //     }
//     // ];

//     return (
//         <div>
//             <Submit/>  {/* `region` prop 전달 */}
//         </div>
    
//     );
const [count, setCount] = useState(0);

const onCountHandler = () => {
  setCount(prev => prev + 1);
};

return (
  <div>
    <div className="title">
      <h1>Total Count: {count}</h1>
    </div>
    <div>
      <Prac07 onCount={onCountHandler} />
      <Prac07 onCount={onCountHandler} />
    </div>
  </div>
);
};

export default App;