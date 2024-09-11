import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
const Counter = () => {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
return (
<div>
<h1>현재 카운터 값은 {count}입니다.</h1>
<button onClick={() => dispatch(increment())}>increment</button>
<button onClick={() => dispatch(decrement())}>decrement</button>
</div>
);
}
export default Counter;