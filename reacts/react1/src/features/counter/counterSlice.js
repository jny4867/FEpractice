import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
    value: 0
    },
    reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
    },
    });
    // Action 생성자 함수(increment, decrement) export
    export const { increment, decrement }=counterSlice.actions;
    // store에서 사용할 수 있도록 export
    export default counterSlice.reducer;