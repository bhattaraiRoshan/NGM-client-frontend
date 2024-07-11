import { Container, Form, Button, Spinner } from "react-bootstrap"
import CustomInput from "../customInput/CustomInput"
import useForm from "../../hooks/useForm"
import { loginFormFields } from "./LoginFormField"
import "../../App.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { setIsCreating } from "../../utility/promiseSlice"
import { userLogin } from "../../entity/user/userAxiosHelper"
import { toast } from "react-toastify"
import { getUserAction, userAutoLoginAction } from "../../entity/user/userAction"
import { useEffect } from "react"



const initialFormData = {
    email: "",
    password: "",
}
export const LoginForm = () =>{

    const {isCreating} = useSelector(state=> state.promise)

    const {handleOnChange, formData} = useForm(initialFormData)
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{

        if(user?._id ) { navigate("/") }

        if(!user?._id){ dispatch(userAutoLoginAction())}
    }, [user?._id, navigate, dispatch])

    const handelOnSubmit = async (e) =>{
        e.preventDefault();

        dispatch(setIsCreating(true))

        const result = await userLogin(formData)

        if(result.status === "error"){
            dispatch(setIsCreating(false))
            return toast.error(result.message)
        }

        if(result.status === "success"){
            sessionStorage.setItem("accessJWT", result.data.accessJWT)
            localStorage.setItem("refreshJWT", result.data.refreshJWT)

            dispatch(getUserAction())
        }
        

    }
 

    return(
        <Container>
            <Form onSubmit={(e)=> handelOnSubmit(e)}>
                {
                    loginFormFields.map((field, index)=>
                    <CustomInput
                    key={index}
                    label={field.label}
                    handleOnChange= {handleOnChange}
                    inputAttributes= {{
                        type: field.type,
                        name: field.name,
                        value: formData[field.name],
                        placeholder: field.placeholder,
                        required: true
                      }}
                    
                    
                    
                    
                    />
                    )
                }
                <Link to = "/client/forget-password" className="my-2">Forgot Password?</Link>
                <Button 
               
                className="btn-lg w-100 btn_colour"
                type="submit"
                disabled={isCreating}
          >
            { isCreating ? <Spinner animation="border" role="status" /> : "Login" }
          
          </Button>

        
            </Form>
            <p className="text-end mt-1">Don't have Account ? <Link to="/signup">Sign Up</Link></p>
        </Container>
    )
}