import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface Task {
    id: number,
    title: string,
    completed: boolean
};

const tasksAdapter = createEntityAdapter<Task>();

const initialState = tasksAdapter.getInitialState();

// const initialState: Task[] = [
//     {
//         id: 1,
//         title: "Estudar Redux",
//         completed: false
//     },
//     {
//         id: 2,
//         title: "Fazer compras",
//         completed: true
//     }
// ];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: tasksAdapter.addOne,
        // addTask: (state, action: PayloadAction<Task>) => {
        //     state.push(action.payload);
        // },
        removeTask: tasksAdapter.removeOne,
        // removeTask: (state, action: PayloadAction<number>) => {
        //     return state.filter(task => task.id !== action.payload);
        // },
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.entities[action.payload];
            if (task) {
                task.completed = !task.completed;
            }
        },
        // toggleTask: (state, action: PayloadAction<number>) => {
        //     const task = state.find(task => task.id === action.payload);
        //     if (task) {
        //         task.completed = !task.completed;
        //     }
        // }
    }
});

export const {selectAll: selectAllTasks} = tasksAdapter.getSelectors((state: RootState) => state.tasks);
export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;