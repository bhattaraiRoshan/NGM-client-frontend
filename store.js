import { configureStore } from "@reduxjs/toolkit";
import promiseReducer from "./src/utility/promiseSlice";
import userReducer from "./src/entity/user/userSlice";
import productReducer from "./src/entity/product/productSlice";
import cartReducer from "./src/entity/cart/CartSlice";



const store = configureStore({
    reducer:{
        promise: promiseReducer,
        user: userReducer,
        product: productReducer,
        cart: cartReducer
    }
})


export default store