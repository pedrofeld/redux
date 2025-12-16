import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepositories } from "../../services/api";

interface Repository {
    id: number,
    name: string,
    html_url: string
};

interface RepositoriesState {
    repositories: Repository[],
    loading: boolean
};

const initialState: RepositoriesState = {
    repositories: [],
    loading: false
};

export const fetchRepositories = createAsyncThunk(
    'repositories/fetchRepositories',
    async (username: string, config) => {
        console.log('Estado atual:', config.getState());
        const response = await getRepositories(username);
        return response;
    }
);

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.repositories = action.payload;
                state.loading = false;
            })
            .addCase(fetchRepositories.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default repositoriesSlice.reducer;