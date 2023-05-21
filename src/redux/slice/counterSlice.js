import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        num: 0,
    },
    reducers: {
        inc: (state, action) => {
            console.log(state);
        }
    }
})

export const { inc } = counterSlice.actions;
export default counterSlice.reducer;
