import { useDispatch, useSelector } from "react-redux";
import "./CustomeShoppingCart.css"
import { addToCart, decreaseQuantity, incrementQuantity, setCart, setCount } from "../../entity/cart/CartSlice";
import { Container, Row, Col, Button, Table, Image, Form } from 'react-bootstrap';
import { useState } from "react";
import {loadStripe} from "@stripe/stripe-js"
export const CustomeShoppingCart = () =>{
  const url = import.meta.env.VITE_APP_BASE_URL

  console.log(url);
  const {carts} = useSelector(state => state.cart)
  const {count} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  
  const makeAPayment = async () =>{

    const stripe = await loadStripe("pk_test_51L7r0KH278RWkSLVITXaKLLtAf5yZ0GECJGf5NXOH7w6sBf1RjGorGYZFLuwGBKVlGOo2ST8MA7QMgjTadubH9Uv00W1SOMcFz")
    console.log(stripe);

    if (!stripe) {
      console.log("Stripe failed to load");
    }

    const body = {

      products: carts
    }

    const headers = {

      "Content-Type": "application/json",
    }

    const response = await fetch(`${url}/api/create-checkout-session`, {

      method: "POST",
      headers: headers, 
      body: JSON.stringify(body)
    })

    const session = await response.json()

    console.log(session);

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      console.log(result.error);
    }


  }

   

   
      const handleRemove = (_id) =>{

        const filterCartsArray = carts?.filter(item => item._id !== _id)
        dispatch(setCart(filterCartsArray))
        dispatch(setCount(count - 1))
      }
      const handelOnSub = (_id) =>{
        dispatch(decreaseQuantity(_id))
      }

      const handelOnPlus = (_id) =>{
        dispatch(incrementQuantity(_id))
      }

      const dispalySubTotal = () =>{

        let total = 0

        const ttl = carts?.reduce((acc, item) => {
          
          let priceToShow = item.salesPrice > 0 ? item.salesPrice: item.price

          return acc + priceToShow * item.quantityNeed
        },0)

        if(discount > 0){

          total = ttl - discount/100
        }else{
          return ttl
        }
        return total
      }

      const dispalySalesTax = () =>{

        return dispalySubTotal()*2/100
      }

      const displayGrandTotal = () =>{
        return dispalySalesTax() + dispalySubTotal()
      }

      const handelOnCoupen = (coupen) =>{

        if(coupen === 'DISCOUNT10' ){
          setDiscount(0.1)
         return alert("10% Discount Applied in your Purchase")
        } else{
          setDiscount(0)
          return alert("Sorry Coupon not Valid")
        }
      }

      

    return(
        <>
           <Container fluid className="cart-container">
      <Row className="cart-header">
        <Col xs={4}>Item</Col>
        <Col xs={2}>Price</Col>
        <Col xs={3}>Quantity</Col>
        <Col xs={2}>Total</Col>
        <Col xs={1}></Col>
      </Row>
      {
        carts?.map((item, index)=>
        {

          let priceToShow = item.salesPrice > 0 ? item.salesPrice: item.price
          
        
          
     return   <Row className="cart-item align-items-center" key={index}>
        <Col xs={4} className="product-info">
          <Row>
            <Col xs={4} className="product-image">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r8zMKuwaLhmb7PmFJhCiNxmCmFtUzBrrrA&s" thumbnail />
            </Col>
            <Col xs={8} className="text-center">
              <span className="product-name text-center">{item.name}</span>
              
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="text-center">{priceToShow}</Col>
        <Col xs={3} className="text-center quantity-control">
          <Button variant="outline-secondary" size="sm" onClick={()=>handelOnSub(item._id)}>-</Button>
          <p  className="quantity-input d-inline mx-2 text-center"  >{item.quantityNeed}</p>
          <Button variant="outline-secondary" onClick={()=>handelOnPlus(item._id)} size="sm">+</Button>
        </Col>
        <Col xs={2} className="text-center">{`$` + priceToShow * item.quantityNeed}</Col>
        <Col xs={1} className="text-center">
          <Button variant="link" className="text-danger" onClick={()=> handleRemove(item._id)}>
            <i className="fas fa-times"></i>
          </Button>
        </Col>
      </Row>
    
})
      }
   
    </Container>

    <Container>
        <Row>
          <Col xs={12} md={8}>
            {/* Placeholder for potential cart items or other content */}
          </Col>
          <Col xs={12} md={4}>
            <div className="cart-summary">
              <Row>
                <Col xs={6}><span>Subtotal: </span></Col>
                <Col xs={6} className="text-right"><span>{`$${dispalySubTotal()?.toFixed(2)}`}</span></Col>
              </Row>
              <Row>
                <Col xs={6}><span>Sales Tax(2%):</span></Col>
                <Col xs={6} className="text-right"><span>{`$${dispalySalesTax()?.toFixed(2)}`}</span></Col>
              </Row>
              <Row>
                <Col xs={6}><span>Coupon Code:</span></Col>
                <Col xs={6} className="text-right">
                  <Form inline>
                    <Form.Control
                      type="text"
                      placeholder="Enter coupon"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="coupon-input"
                    />
                    <Button variant="link" type="button" onClick={()=>handelOnCoupen()}>Apply Coupon</Button>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col xs={6}><span>Grand Total:</span></Col>
                <Col xs={6} className="text-right"><span>{`$${displayGrandTotal()?.toFixed(2)}`}</span></Col>
              </Row>
              <Row className="mt-3">
                <Col xs={12} className="text-center">
                  <Button variant="success" size="lg" onClick={()=>makeAPayment()}>Check Out</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
            
    

    </>
    )
}