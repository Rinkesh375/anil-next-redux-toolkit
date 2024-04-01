import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import todoReducer from "./todoSlice"
import productReducer from "./productSlice"

export const store = configureStore({
    reducer:{
        userReducer,
        todoReducer,
        productReducer
    }  
})