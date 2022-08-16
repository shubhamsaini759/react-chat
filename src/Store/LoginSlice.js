import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {
        email : '',
        password : ''
    },
    reducers : {
        sendName(state,action){
            state.email = action.payload.name;
        },
        sendPass(state,action){
            state.password = action.payload.password;
        }
    }
})