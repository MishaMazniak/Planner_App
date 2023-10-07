import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'task',
    initialState: {
        id: 0,
        idDate: 0,
        myTask: "",
        date: "",
    },
    reducers: {
        addTask: (state, action) => {
            state.myTask = action.payload.myTask;
            state.date = action.payload.date;
        },
    }

});

export const { addTask } = cartSlice.actions;
export default cartSlice.reducer;