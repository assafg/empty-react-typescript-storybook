import { createSlice } from '@reduxjs/toolkit';
import { Record } from '../types/records';

type RecordsState = {
    records: Record[];
    isLoading: boolean;
};

let initialState: RecordsState = {
    records: [],
    isLoading: true,
};

const recordsSlice = createSlice({
    name: 'recordsState',
    initialState,
    reducers: {
        fetched: (state, action) => {
            return {
                records: action.payload.data,
                isLoading: action.payload.loading,
            };
        },
    },
});

export { recordsSlice };
