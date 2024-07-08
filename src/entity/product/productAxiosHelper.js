import { axiosApiCall } from "../../utility/axiosHelper"; 

const product_api_url = `${import.meta.env.VITE_APP_BASE_URL}/api/product`

// public route

// get all product 

export const getAllProducts = () =>{

    return axiosApiCall({
        method: "get", 
        url: product_api_url,
    })
}

// get from the ID 

export const getOneProductFromID = (_id) =>{

    return axiosApiCall({
        method: "get",
        url: `${product_api_url}/${_id}`
    })
}