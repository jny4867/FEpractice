import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BagComponent from '../components/BagComponent';

function App() {
    const items = [
        { id: 'hat', name:'모자', price: 10000 },
        { id: 'shoes', name:'신발', price: 30000 },
        { id: 'bag', name:'가방', price: 80000 }
    ]

    // 선택된 항목의 가격을 상태로 관리
    const [selectedItems, setSelectedItems] = useState({});

    // 체크박스 변경 핸들러
    const handleCheckboxChange = (e) => {
     const { id, checked } = e.target;
     setSelectedItems((prev) => ({
       ...prev,
       [id]: checked
     }));
  };

  // 선택된 항목의 가격 배열 생성
  const selectedPrices = items
    .filter(item => selectedItems[item.id])
    .map(item => item.price);


  return (
    <div>
        <header className="App-header">
        <h1>가격 계산기</h1>
        {items.map(item => ( 
            // map으로 배열 순회, 각 아이템의 체크여부를 판단하여 
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={!!selectedItems[item.id]}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={item.id}>{item.name} - {item.price.toLocaleString()}원</label>
          </div>
        ))}
        {/* 자식 컴포넌트에 선택된 항목의 가격을 전달 */}
        <BagComponent prices={selectedPrices} />
      </header>
    </div>
  );
}

export default App;