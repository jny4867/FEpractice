import { configureStore } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
counter: counterSlice,
});
const store = configureStore({
reducer: rootReducer,
});
export default store;