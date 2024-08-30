import React from 'react';

const UserId = (props) => {
    const {onAddId} = props;
    function updateValue(e){
        props.onAddId(e.target.value);
    }

  
    return (
      <div>
        <label>아이디:</label>
        <input type="text" onChange={updateValue} />
      </div>
    );
}
  
  export default UserId;