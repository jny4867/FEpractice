import React from 'react';

const UserPw = (props) => {
    const {onAddPw} = props;
    function updateValue(e){
        props.onAddPw(e.target.value);
    }

  
    return (
      <div>
        <label>비밀번호:</label>
        <input type="password" onChange={updateValue} />
      </div>
    );
}

export default UserPw;