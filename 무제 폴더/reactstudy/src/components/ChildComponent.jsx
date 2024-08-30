import React from 'react';

const ChildComponent = (props) => {
    // updataValue 함수는 input 필드의 값이 변경될 때 호출됩니다.
    function updataValue(e) {
        console.log(e.target.value); // 현재 입력된 값을 콘솔에 출력

        // 부모 컴포넌트에서 전달받은 onAddData 함수를 호출하여 입력된 값을 부모에게 전달
        props.onAddData(e.target.value);
    }

    return(
        <>
            <h3>
                입력: <input type="text" onChange={updataValue}/> {/* input 필드의 값이 변경될 때마다 updataValue 함수가 호출됨 */}
            </h3>
        </>
    );
};

export default ChildComponent;