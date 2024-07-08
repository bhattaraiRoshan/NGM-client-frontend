import { toast } from "react-toastify";
import { getAllProducts, getOneProductFromID } from "./productAxiosHelper"
import { setAllProduct, setOneProduct } from "./productSlice";

export const getAllProductAction = () =>async(dispatch) =>{

    const allProduct = await getAllProducts()

    if(allProduct?.status === "error"){
        console.log("Product can't be fatch");
    }

  

    dispatch(setAllProduct(allProduct.data))
}


// get a book from ID 

export const getOneProductFromIDAction = (_id) => async (dispatch) =>{

    const result = await getOneProductFromID(_id)

    if( result?.status === "error"){
        return toast.error(result.data)
    }

    console.log(result);

    dispatch(setOneProduct(result.data))
}