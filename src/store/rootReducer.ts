import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';

const rootReducer = combineReducers({
    tasks: tasksReducer
});

export default rootReducer;