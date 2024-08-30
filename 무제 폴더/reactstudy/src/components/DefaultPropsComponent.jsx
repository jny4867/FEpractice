import React from 'react';

function DefaultPropsComponent({name = "아무개"}){
    return (
        <div>
            안녕하세요 제 이름은 {name}입니다.
        </div>
    );
};

export default DefaultPropsComponent;