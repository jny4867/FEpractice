import React from 'react';

function ChangeProps (props){
    let name = props.name; //리액트는 컨포넌트 내에서 한수의 값이 변경되어도 재렌더링을 하지 않음
    function changeName(){
        name= "React";
        console.log(name);
    }
    return (
        <div>
           <h1>{name}</h1>
           <button onClick = {changeName}>클릭</button>
        </div>
    );
};

export default ChangeProps;