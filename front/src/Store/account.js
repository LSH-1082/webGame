import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        username: "",
        password: "",
    },
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});

export const {setUsername, setPassword} = accountSlice.actions;

export default accountSlice.reducer;