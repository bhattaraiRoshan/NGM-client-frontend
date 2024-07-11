import { useDispatch, useSelector } from "react-redux";
import "./CustomeShoppingCart.css"
import { addToCart, setCart, setCount } from "../../entity/cart/CartSlice";

export const CustomeShoppingCart = ({name, _id, description, thumbnail, priceToShow}) =>{

    console.log(priceToShow);

    const {carts} = useSelector(state => state.cart)
    const {count} = useSelector(state => state.cart)
   const dispatch = useDispatch()

   
      const handleRemove = (_id) =>{

        const filterCartsArray = carts?.filter(item => item._id !== _id)
        dispatch(setCart(filterCartsArray))
        dispatch(setCount(count - 1))
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