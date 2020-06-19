import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, recordsSlice } from './slices';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        records: recordsSlice.reducer,
    },
});

export default store;
