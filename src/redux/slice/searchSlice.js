import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchValue',
    initialState: {
        searchValue: '',
        isSearch: false
    },  
    reducers: {
        // for set the search input value
        setSearch: (state, action) => {
            state.searchValue = action.payload;
        },

        // when debounce time complete this should be true 
        setIsSearch: (state, action) => {
            state.isSearch = action.payload
        }
    }
});

export const { setSearch, setIsSearch } = searchSlice.actions;
export default searchSlice.reducer;
