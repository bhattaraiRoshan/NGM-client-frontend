import { useSelector } from "react-redux"
import { getOneProductFromID } from "../product/productAxiosHelper"
import { addToCart } from "./CartSlice"





export const getOneProductForCartAction = (_id) => async(dispatch) =>{


    const result = await getOneProductFromID(_id)

    if( result?.status === "error"){
        return toast.error(result.data)
    }

    

    

    dispatch(addToCart(result.data))
}