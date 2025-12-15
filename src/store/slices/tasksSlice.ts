import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {}
});

export default tasksSlice.reducer;