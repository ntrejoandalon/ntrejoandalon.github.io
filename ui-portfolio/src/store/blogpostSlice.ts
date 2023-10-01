import { createSlice } from "@reduxjs/toolkit";

export const blogpostSlice = createSlice({
    name: 'blogpost',
    initialState: {
        totalPosts: 3,
        centeredPost: 1
    },
    reducers: {
        incrementCurrPost: (state) => {
            state.centeredPost += 1
        },
        decrementCurrPost: (state) => {
            state.centeredPost -= 1
        },
        setTotalPosts: (state, action) => {
            state.totalPosts = action.payload
        },
    }
})

export const {incrementCurrPost, decrementCurrPost, setTotalPosts} = blogpostSlice.actions    
export default blogpostSlice.reducer