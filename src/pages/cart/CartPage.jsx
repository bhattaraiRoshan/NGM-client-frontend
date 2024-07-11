import { useSelector } from "react-redux"
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomeShoppingCart } from "../../components/customeCart/CustomeShoppingCart";
import "../../components/customeCart/CustomeShoppingCart.css"

export const CartPage = () =>{


    const {carts} = useSelector(state=> state.cart)
   console.log(carts);

   const subtotal = carts.reduce((acc, cart) => acc + ( cart.salesPrice > 0 ? cart.salesPrice : cart.price), 0);
      const salesTax = 2%subtotal;
      const grandTotal = subtotal + salesTax;

    
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
      
      carts?.map((item, index)=>{
        let priceToShow = item.salesPrice > 0 ? item.salesPrice: item.price
        const {name, _id, description, thumbnail,  } = item
       return  <CustomeShoppingCart
       
       name = {name}
       _id = {_id}
       description = {description}
       thumbnail = {thumbnail}
       priceToShow = {priceToShow}
       
       />
      })

      }

        {
          carts.length > 0 ?
          <div className="row cart-summary">
        <div className="col-md-8 offset-md-4">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Sales Tax: ${salesTax.toFixed(2)}</p>
          <div className="coupon-code">
            <label htmlFor="coupon">Coupon Code:</label>
            <input type="text" id="coupon" className="form-control" />
            <button className="btn btn-outline-secondary">Add Coupon</button>
          </div>
          <p className="grand-total">Grand total: ${grandTotal.toFixed(2)}</p>
          <button className="btn btn-primary btn-lg">Check out</button>
        </div> 
      </div> :

          <Link to="/product">
          <Button>
        Contunue Shopping
          </Button>
          </Link>
      
        }
      


      </>

    )
}