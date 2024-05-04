import "./App.css"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/authPage/loginPage"
import { SingupPage } from "./pages/authPage/signupPage"
import { ToastContainer } from "react-toastify"
import { VerificationEmail } from "./pages/verification/emailVerification"
import { LandingPage } from "./pages/landing/LandingPage"


function App() {
 
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SingupPage/>}/>
        <Route path="/verify-email" element={<VerificationEmail/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
