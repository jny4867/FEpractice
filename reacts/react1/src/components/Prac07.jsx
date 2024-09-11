import React, { useState } from 'react';

const Prac07 = (props) => {
  const [number, setNumber] = useState(0);

  const upCounter = () => {
    setNumber(prev => prev + 1);
    props.onCount();
  };

  const UserCard = ({ name, age, email }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  UserCard.propTypes = {
    name: PropTypes.string.isRequired, // name은 문자열, 필수 항목.
    age: PropTypes.number,  // age는 숫자, 필수 항목.
    email: PropTypes.string.isRequired           // email은 문자열, 필수는 아님.
  };




  const Card = (props) => {
    const {title, content, author, date} = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Written by: {author}</p>
      <p>Date: {date}</p>
    </div>
  );
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


