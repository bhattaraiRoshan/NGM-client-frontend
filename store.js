import { configureStore } from "@reduxjs/toolkit";
import promiseReducer from "./src/utility/promiseSlice";
import userReducer from "./src/entity/user/userSlice";



const store = configureStore({
    reducer:{
        promise: promiseReducer,
        user: userReducer
    }
})


export default store