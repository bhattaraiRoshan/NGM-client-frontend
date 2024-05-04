import { useEffect, useState } from "react"
import { Container, Spinner, Stack } from "react-bootstrap"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

import { toast } from "react-toastify"
import { verifyUser } from "../../entity/user/userAxiosHelper"

export const VerificationEmail = () =>{

    // grab the params

    const [params] = useSearchParams()
    const userEmail = params.get("e")
    const token = params.get("id")

    const [emailVerifying, setEmailVerifying] = useState(true)
    const [emailVerified, setEmailVerified] = useState(false)

    const navigate = useNavigate()

    const verifyUserEmail = async () =>{

        const result = await verifyUser({userEmail, token})

        setEmailVerifying(false)

        if(result?.status === "error"){
            setEmailVerified(false)
      
            toast.error(result.message)
            navigate("/signup")
        }

        setEmailVerified(true)

    }



    useEffect(()=>{

        if(userEmail && token){

            verifyUserEmail()

        }

    }, [])

    return(
        <Container>
      {emailVerifying && 
        <Stack gap={4} className="vh-100 justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" role="status" />

          <p>Verifying email, Please wait ....</p>
        </Stack>
      }

      {emailVerified && 
        <Stack gap={2} className="vh-100 justify-content-center align-items-center">
          
          <div className="my-4">
            <lord-icon
                src="https://cdn.lordicon.com/twsqddew.json"
                trigger="in"
                delay="100"
                state="in-reveal"
                style={{ width:'250px', height:'250px'}}>
            </lord-icon>
          </div>

          <p>Email successfully verified, You can login now.</p>

          <Link to="/" className="btn btn-lg btn-outline-primary">
            Login Now
          </Link>
        </Stack>
      }
    </Container>
    )
}