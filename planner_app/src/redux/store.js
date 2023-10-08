import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task.js';
import dateReducer from './date.js';

export default configureStore({
    reducer: {
        task: taskReducer,
        date: dateReducer,
    }
});