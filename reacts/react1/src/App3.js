import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import CheckBox from './components/CheckBox';

function App() {
    productList = [
        { name:'모자', price: 10000 },
        { name:'신발', price: 30000 },
        { name:'가방', price: 80000 }
    ]

  return (
    <div>
        <CheckBox list = {productList}/>
    </div>
  );
}

export default App;