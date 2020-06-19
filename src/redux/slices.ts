import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

const recordsSlice = createSlice({
    name: 'records',
    initialState: [],
    reducers: {
        fetched: (state, action) => action.payload.data,
    },
});

console.log('recordsSlice', recordsSlice);

export { counterSlice, recordsSlice };
