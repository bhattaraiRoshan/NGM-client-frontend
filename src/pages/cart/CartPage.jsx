import { useSelector } from "react-redux"
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomeShoppingCart } from "../../components/customeCart/CustomeShoppingCart";
import "../../components/customeCart/CustomeShoppingCart.css"



export const CartPage = () =>{

    
    const {carts} = useSelector(state=> state.cart)
  

 

      

    
    return(
      <>
      {
        !carts.length && <h3 className="text-center mt-4">You have noting in your basket</h3>
      }
      {
        carts.length > 0 && 
      <h2>Your Cart ({carts.length} items)</h2>
      }
      
      {carts.length > 0 && 
      
    
   
      <CustomeShoppingCart
       
    
   
       
       />
    

      }
       


      </>

    )
}