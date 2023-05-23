import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchValue',
    initialState: {
        searchValue: '',
    },
    reducers: {
        // for set the search input value
        setSearch: (state, action) => {
            state.searchValue = action.payload;
        },
    }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
