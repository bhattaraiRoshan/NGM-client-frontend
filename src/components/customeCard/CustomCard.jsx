
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './customCard.css';
import { Link } from 'react-router-dom';

export const CustomCard = ({ img, name, price, salesPrice, description, id }) => {
  
  
  const shortDesc = (description, wordLimit) =>{

    const words = description.split(" ")

    if(words.length > wordLimit){
      return words.slice(0, wordLimit).join(' ')+ '...'
    }

    return description
  } 
  
  return (
    <Card className="custom-card">
      {salesPrice > 0&& 
      <div className="star-container">
      <div className="star">Sale</div>
    </div>}
      <Card.Img variant="top" src={import.meta.env.VITE_APP_BASE_URL + img} className="custom-card-img" />
      <Card.Body>
        <Card.Title className="custom-card-title">{name}</Card.Title>
        <Card.Text className="custom-card-description">
          {shortDesc(description, 15)}
        </Card.Text>
        <div className="custom-card-prices">
          {salesPrice ? (
            <>
              <Card.Text className="custom-card-price original-price">
                ${price}
              </Card.Text>
              <Card.Text className="custom-card-price sale-price">
                ${salesPrice}
              </Card.Text>
            </>
          ) : (
            <Card.Text className="custom-card-price">
              ${price}
            </Card.Text>
          )}
        </div>
        <div className="custom-card-buttons">
          <Link to={`/product/${id}`}>
            <Button variant="primary" className="custom-card-button">Buy Now</Button>
          </Link>
          <Button variant="secondary" className="custom-card-button">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};


