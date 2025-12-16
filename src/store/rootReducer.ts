import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    tasks: tasksReducer
});

export const persistedReducer = persistReducer({
    key: 'tasks',
    storage
}, rootReducer);