import React, {useState} from 'react';

//submit 예제1
// const Submit = () => {
    // const [form, setForm] = useState("");

    // function changeHandler(e){
    //     setForm(e.target.value)
    // }

    // function submitHandler(e){
    //     e.preventDefault(); //중요함
    //     console.log("전송 받은 데이터:",form);
    // }

    // return (
    //     <div>
    //         <form onSubmit={submitHandler}>
    //             <h1>이름:</h1>
    //             <input type='text' onChange={changeHandler}></input>
    //             <input type='submit' value='전송'></input>
    //         </form>
        
            
    //     </div>
    // );
// };s

// const Submit = (props) => {  // props를 받아야 함
//     const { region } = props;  // props에서 `region` 추출
//     const [form, setForm] = useState('');  // 초기값 ''

//     // 라디오 버튼의 값 변경 시 호출
//     function updateValue(e) {
//         setForm(e.target.value);
//     }

//     // 폼 제출 시 호출
//     function submitHandler(e) {
//         e.preventDefault();
//         alert(form);  // 선택된 값을 알림
//     }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 {region.map((item) => (  // `return`을 추가
//                     <label key={item.eng}>
//                         <input
//                             type="radio"
//                             name="city"
//                             value={item.eng}
//                             onChange={updateValue}
//                         />
//                         {item.region}
//                     </label>
//                 ))}
//                 <input type='submit' value='확인'></input>
//             </form>
//         </div>
//     );
// };



// const Submit = (props) => {  // props를 받아야 함
//     const [text, setText]= useState('');

//     // 폼 제출 시 호출
//     function submitHandler(e) {
//         e.preventDefault();
//         console.log("submit으로 받은 데이터: ", text)
//     }
//     function changeHandler(e){
//         setText(e.target.value)
//     }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <h1>내용: {text}</h1>
//                 <textarea value={text} onChange={changeHandler}></textarea>
//                 <input type='submit' value='전송' />
//             </form>
//         </div>
//     );
// };
// export default Submit;
import WinCat from './images/windowcat.JPG'

const Submit = (props) => {  // props를 받아야 함
    const [option, setOption]= useState('');

    // 폼 제출 시 호출
    function submitHandler(e) {
        e.preventDefault();
        console.log("선택된 옵션: ", option)
    }
    function changeHandler(e){
        setOption(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <select value={option} onChange={changeHandler}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <input type='submit' value='전송' />
            </form>
            {/* <img src={require('./components/images/windowcat.JPG')}></img> */}
        </div>
    );
};
export default Submit;