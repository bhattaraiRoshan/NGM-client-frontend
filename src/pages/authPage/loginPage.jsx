import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap";
import adminAuthImage from "../../assets/authImage.png"
import { LoginForm } from "../../components/loginForm/LoginForm";

export const LoginPage = () =>{

    return(
      <Container>
      <Row className="vh-100">
        <Col className="d-flex">
          <Stack className="justify-content-center align-items-center">
            <Image src={adminAuthImage} height={300} width={500} />
              <Stack direction="horizontal" className="justify-content-center">
                <h3 className="mx-2">NexGenMarket</h3>
               
              </Stack>
            <pre>Shopping redefined: Your future starts at NexGenMarket!</pre>
          </Stack>
        </Col>
        
        <Col className="d-flex justify-content-center align-items-center">
          <LoginForm/>
        </Col>
      </Row>
    </Container>
    )
}