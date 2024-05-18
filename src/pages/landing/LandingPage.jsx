import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAutoLoginAction } from "../../entity/user/userAction"

export const LandingPage = () =>{

    const {user} = useSelector(state=> state.user)
    const dispatch = useDispatch()

    useEffect(()=>{

        if(!user?._id){ dispatch(userAutoLoginAction())}
    })
    return (
        <>
      
      
    </>
    )
}