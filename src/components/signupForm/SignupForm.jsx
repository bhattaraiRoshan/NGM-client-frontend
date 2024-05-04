import { Container, Row, Form, Col, Button, Spinner } from "react-bootstrap"
import CustomInput from "../customInput/CustomInput"
import { SignUpFormFields } from "./SignupFormFields"
import useForm from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setIsCreating } from "../../utility/promiseSlice"
import { toast } from "react-toastify"
import { signUpUser } from "../../entity/user/userAxiosHelper"


const initialFormData = {

    firstName: "",
    lastName:"",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmpassword: "",
}
export const SignupForm = () =>{
   
    const {isCreating} = useSelector(state=> state.promise)

    const {handleOnChange, formData, setFormData} = useForm(initialFormData)

    const {firstName,lastName, phone, address, email, password, confirmPassword } = formData
    console.log(password, confirmPassword);

    const dispatch = useDispatch()

    const passwordValidation = () =>{

       return password === confirmPassword
    }

    const handelOnSubmit = async (e) =>{

        e.preventDefault();
        dispatch(setIsCreating(true))

        const isValid = passwordValidation()
      

        if(!isValid){
            dispatch(setIsCreating(false))
         return   toast.error("Password Validation failed")
        }

        // make a call to api

        const result = await signUpUser({
            firstName,
            lastName,
            phone,
            address,
            email,
            password
        })

        if(result?.status === "error"){
            dispatch(setIsCreating(false))
            return toast.error(result.message || "Can't creat user")
        }

        setFormData(initialFormData)
        toast.success(result.message || "Email verification link sent")
        dispatch(setIsCreating(false))



    }


    return (
        <Container className="mb-5">

            <Form onSubmit={(e) => handelOnSubmit(e)}>
                <h2 className="text-center mb-4">Create an Account</h2>

                <Row>
                    {
                        SignUpFormFields?.map((field, index)=>{
                            return(
                                <Col key={index} xs = {index === 0 || index === 1 ? 6 :12}>
                                    <CustomInput

                                    label= {field.label}
                                    handleOnChange = {handleOnChange}
                                    inputAttributes={{
                                        type: field.type,
                                        name: field.name,
                                        value: formData[field.name],
                                        placeholder: field.placeholder,
                                        required: true
                                    }}
                                    
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>

                <Button
                variant="primary"
                className="btn-lg w-100 btn_colour"
                type="submit"
                disabled={isCreating}
                >
                    {isCreating ? <Spinner animation="border" role="status"/> : "Signup" }
                </Button>
            </Form>
            <p className="text-end mt-1">Already have account ? <Link to="/login">Login</Link></p>

        </Container>
    )
}