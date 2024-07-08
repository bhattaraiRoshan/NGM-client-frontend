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
import { ProductPage } from "./pages/product/ProductPage"
import { useEffect } from "react"
import {  getAllProductAction } from "./entity/product/productAction"
import { useDispatch } from "react-redux"
import { ProductDetailsPage } from "./pages/product/ProductDetailsPage"


function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProductAction())
  }, [])
 
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
        <Route path="/product" element={<Layout><ProductPage/></Layout>}/>
        <Route path="/product/:_id" element={<Layout><ProductDetailsPage/></Layout>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
