import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'task',
    initialState: {
        id: 0,
        myTask: "",
        date: "",
    },
    reducers: {
        addTask: (state, action) => {
            state.id = action.payload.id;
            state.myTask = action.payload.myTask;
            state.date = action.payload.date;
        },
    }

});

export const { addTask } = cartSlice.actions;
export default cartSlice.reducer;