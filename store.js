import { configureStore } from "@reduxjs/toolkit";
import promiseReducer from "./src/utility/promiseSlice";
import userReducer from "./src/entity/user/userSlice";
import productReducer from "./src/entity/product/productSlice";



const store = configureStore({
    reducer:{
        promise: promiseReducer,
        user: userReducer,
        product: productReducer
    }
})


export default store