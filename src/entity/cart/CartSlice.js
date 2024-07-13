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
            state.carts = action.payload.map(item => ({
                ...item,
                quantityNeed: 1
            }))
        },
        addToCart: (state, action) =>{
            state.carts.push({
                ...action.payload,
                quantityNeed: 1
            });
        },
        setCount: (state, action) =>{
            state.count = action.payload
        },
        incrementQuantity: (state, action) => {
            const item = state.carts.find(item => item._id === action.payload);
            if (item) {
                item.quantityNeed += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.carts.find(item => item._id === action.payload)

            if(item && item.quantityNeed > 1){
               
                    item.quantityNeed -= 1
             
            }
        }
        
    }
})

const {reducer: cartReducer, actions} = cartSlice
export const {setCart, setCount, addToCart, incrementQuantity, decreaseQuantity} = actions
export default cartReducer