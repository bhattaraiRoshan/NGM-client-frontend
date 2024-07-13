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
    

    if (!stripe) {
      console.log("Stripe failed to load");
    }

    const body = {

      products: carts,
      
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
        <div className="container mt-5">
      
      <div className="cart-items">
       
          <div key={_id} className="row cart-item">
            <div className="col-md-2">
              <img src={thumbnail} alt={thumbnail} className="item-image" />
            </div>
            <div className="col-md-4">
              <p className="item-name">{name}</p>
              {/* {item.estimatedShipDate && <p className="item-ship-date">Estimated Ship Date:</p>} */}
              <p className="item-additional-info">{description}</p>
            </div>
            {/* <div className="col-md-2">
              <p>${priceToShow.toFixed(2)}</p>
            </div> */}
            <div className="col-md-2">
              <div className="quantity-control">
                <button className="btn btn-outline-secondary">-</button>
                <span>{1}</span>
                <button className="btn btn-outline-secondary">+</button>
              </div>
            </div>
            <div className="col-md-2">
              <p>${priceToShow?.toFixed(2)}</p>
            </div>

            <div className="col-md-2">
              {/* <p>${priceToShow.toFixed(2)}</p> */}
              <button className="btn btn-danger" onClick={() => handleRemove(_id)}>Remove</button>
            </div>
          </div>
          
  
      </div>
     
    </div>

    

    </>
    )
}