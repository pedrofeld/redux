import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number,
    title: string,
    completed: boolean
};

const initialState: Task[] = [
    {
        id: 1,
        title: "Estudar Redux",
        completed: false
    },
    {
        id: 2,
        title: "Fazer compras",
        completed: true
    }
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        }
    }
});

export const { addTask } =tasksSlice.actions;
export default tasksSlice.reducer;