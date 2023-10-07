import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task.js';

export default configureStore({
    reducer: {
        task: taskReducer,
    }
});