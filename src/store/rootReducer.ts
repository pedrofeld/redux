import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import repositoriesReducer from './slices/repositoriesSlice';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    repositories: repositoriesReducer
});

export const persistedReducer = persistReducer({
    key: 'tasks',
    storage
}, rootReducer);