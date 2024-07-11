import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    carts: [],
    count: 0
}

const cartSlice = createSlice({

    name:"cart",
    initialState,
    reducers:{

        setCart:(state, action) =>{
            state.carts = action.payload
        },
        addToCart: (state, action) =>{
            state.carts.push(action.payload)
        },
        setCount: (state, action) =>{
            state.count = action.payload
        }
    }
})

const {reducer: cartReducer, actions} = cartSlice
export const {setCart, setCount, addToCart} = actions
export default cartReducer