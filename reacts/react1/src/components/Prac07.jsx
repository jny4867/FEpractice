import React, { useState } from 'react';

const Prac07 = (props) => {
  const [number, setNumber] = useState(0);

  const upCounter = () => {
    setNumber(prev => prev + 1);
    props.onCount();
  };

  return (
    <div>
      <div className="countDiv">
        <h1>{number}</h1>
        <button className="countBtn" onClick={upCounter}>클릭</button>
      </div>
    </div>
  );
};

export default Prac07;