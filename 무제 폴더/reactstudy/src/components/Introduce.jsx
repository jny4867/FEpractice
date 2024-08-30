import React from 'react';

function Introduce (props) {
    const {name, age, region} = props;
    const nameStyle ={
        color: 'blue'
    }
    const ageStyle ={
        color: 'red'
    }
    const regionStyle ={
        color: 'yellow'
    }
    return (
        <div>안녕하세요 저는 <span style={nameStyle}>{name}</span>이고,
        <br></br>나이는 <span style={ageStyle}>{age}</span>살이며 <span style={regionStyle}>{region}</span>에서 살고 있습니다.
        </div>
    );
};

export default Introduce;