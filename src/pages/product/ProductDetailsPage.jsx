import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneProductFromIDAction } from "../../entity/product/productAction"
import { Container, Row, Col, Button, Image, Badge, Carousel } from 'react-bootstrap';
import "./productDetailsPage.css"

export const ProductDetailsPage = () =>{

    // get the details from URL 

    const {_id} = useParams()

    // get one product from the redux store 

    const {oneProduct} = useSelector(state => state.product)
    const {user} = useSelector(state => state.user)

    console.log(oneProduct);
    // get the book from the ID 

    const dispatch = useDispatch()

    useEffect(()=>{
        if(_id){
            dispatch(getOneProductFromIDAction(_id))
            
        }
    }, [dispatch, _id])

    return(
        <Container className=" product-details  mt-4">
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <Image src= {import.meta.env.VITE_APP_BASE_URL + oneProduct.thumbnail} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="/path/to/your/image2.jpg" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="/path/to/your/image3.jpg" fluid />
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>{oneProduct.name}</h2>
          <p>{oneProduct.description}</p>
          <p className="price">
            <strong>Price:</strong> ${
                + oneProduct.salesPrice > 0 ? oneProduct.salesPrice : oneProduct.price
            }
          </p>

          <p><strong>Condition:</strong> Brand New</p>
          <p><strong>Compatibility:</strong> <a href="#compatible-vehicles">See compatible vehicles</a></p>
          <p><strong>Quantity:</strong> More than 10 available - 2 sold</p>
          <div className="Productbuttons">
            {
                user._id && 
                <Button  className="buy-now-button">Check Out</Button>
            }
            {
                !user._id && 
                <Button  className="buy-now-button">Login</Button>
            }
            <Button className="add-to-cart-button">Add to cart</Button>
            <Button className="add-to-watchlist-button">Add to Watchlist</Button>
          </div>
        </Col>
      </Row>
    </Container>
    
    )
}