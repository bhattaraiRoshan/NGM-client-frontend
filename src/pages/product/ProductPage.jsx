import { Button, Container } from "react-bootstrap"
import { CustomCard } from "../../components/customeCard/CustomCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllProductAction } from "../../entity/product/productAction"

export const ProductPage = () =>{

    const {allProduct} = useSelector(state => state.product)
   
    

    return(
        <Container className="py-2">
            <h3 className="text-center">Our Products</h3>
            <hr />
            <div className="text-center py-2">
                <Button>All</Button>
                <Button>Sports</Button>
                <Button>Electronics</Button>
                <Button>TV&Phones</Button>
                <Button>Furniture</Button>
                <Button>Books</Button>
            </div>

            {
                allProduct.map((product, index)=>
                    <CustomCard 
                    img = {product.thumbnail}
                    description={product.description}
                    price={product.price}
                    salesPrice={product.salesPrice}
                    name={product.name}
                    id={product._id}



                    />
                )
            }
        </Container>
    )
}