import "./App.css"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/authPage/loginPage"
import { SingupPage } from "./pages/authPage/signupPage"
import { ToastContainer } from "react-toastify"
import { VerificationEmail } from "./pages/verification/emailVerification"
import { LandingPage } from "./pages/landing/LandingPage"
import { Layout } from "./components/layout/layout"
import { PrivacyPolicyPage } from "./pages/privacypolicy/privacyPolicyPage"
import ContactUsPage from "./pages/contact us/contactus"
import { Contact } from "./pages/contact/Contact"


function App() {
 
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SingupPage/>}/>
        <Route path="/verify-email" element={<VerificationEmail/>}/>
        <Route path="/" element={<Layout><LandingPage/></Layout>}/>
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage/></Layout>}/>
        <Route path="/contactus" element={<Layout><ContactUsPage/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
