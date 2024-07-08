import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAutoLoginAction } from "../../entity/user/userAction";
import sports from "../../assets/sports.jpg";
import Electronic from "../../assets/electronic.jpg";
import Furniture from "../../assets/furniture.jpeg";
import tv from "../../assets/tv&phones.jpg";
import books from "../../assets/books.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./Landing.css";

export const LandingPage = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user?._id) {
            dispatch(userAutoLoginAction());
        }
    }, [user, dispatch]);

    return (
        <div className="landing-container">
            <Carousel className="custom-carousel pt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sports}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Electronic}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Furniture}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tv}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={books}
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
