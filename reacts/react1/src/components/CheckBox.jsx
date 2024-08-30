import React from 'react';

const CheckBox = (props) => {
    const {list} = props;

    const [total, setTotal] = useState(0);

    function changeHandler(chk){ //태그 전체를 들고 옴
        if(chk.checked){
            // setTotal(total + parseInt(chk.value))
            setTotal((prev) => {prev + parseInt(chk.value)}) //리액트 스타일
    
        }else{
            // setTotal(total - parseInt(chk.value))
            setTotal((prev) => {prev - parseInt(chk.value)})
        }

    }

    return (
        <div>
            {list.map((item) => (
                <label key={item.name}>
                    <input type='checkbox' value={item.price} onChange={(e) => changeHandler(e.target)}></input>
                    {item.name}
                </label>
            ))}
            {/* <input type='checkbox' value={hat} onChange={(e) =>{changeHandler(e.target)}}> 모자 1만원</input>
            <input type='checkbox' value={shoes} onChange={(e) =>{changeHandler(e.target)}}> 신발 3만원</input>
            <input type='checkbox' value={bag} onChange={(e) =>{changeHandler(e.target)}}> 가방 8만원</input> */}
        </div>
    );
};

export default CheckBox;