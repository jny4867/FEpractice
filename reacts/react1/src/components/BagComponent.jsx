import React from 'react';

function BagComponent({ prices }) {
    // 가격 합계 계산
    const total = prices.reduce((sum, price) => sum + price, 0);
  
    return (
      <div>
        <h2>총 합계: {total.toLocaleString()}원</h2>
      </div>
    );
  }

export default BagComponent;