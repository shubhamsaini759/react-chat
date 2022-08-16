import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";


export const loginAction = LoginSlice.actions;

export const store = configureStore({

    reducer : {
        loginReducer : LoginSlice.reducer
    }
})


