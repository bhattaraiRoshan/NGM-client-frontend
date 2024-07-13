import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    allProduct: [],
    oneProduct: {}
}

const productSlice = createSlice({
    name:"product",
    initialState, 
    reducers:{
        setAllProduct:(state, action) =>{
            state.allProduct = action.payload
        },
        setOneProduct:(state, action) =>{
            state.oneProduct = {
                ...action.payload,
                quantityNeed:1
            }

        }
    }
})


const {reducer: productReducer, actions} = productSlice
export const {setAllProduct, setOneProduct} = actions
export default productReducer