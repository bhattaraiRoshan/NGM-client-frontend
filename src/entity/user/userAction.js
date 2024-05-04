import { setIsCreating } from "../../utility/promiseSlice"
import { getUser } from "./userAxiosHelper"
import { setUser } from "./userSlice"

export const getUserAction = () => async(dispatch)=>{

    

    const user = await getUser()

    if(user?.status === "error"){
        return toast.error(user.message)
    }

    dispatch(setUser(user.data))
}

export const userAutoLoginAction = () => async(dispatch)=>{

    dispatch(setIsCreating(false))

    const accessJWT = sessionStorage.getItem("accessJWT")
    const refreshJWT = localStorage.getItem("refreshJWT")

    if(accessJWT){
        return dispatch(getUserAction())
    }

    if(!accessJWT && refreshJWT){
        const result = await getNewAccessJwt()

        if(result?.status === "success"){
            sessionStorage.setItem("accessJWT", result.data)
            dispatch(getUserAction())
        }
    }

}