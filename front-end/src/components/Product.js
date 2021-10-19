import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          fluid
          style={{ height: "14rem", objectFit: "cover", borderRadius: '0.5rem' }}
        />
      </Link>

      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Title as="div">
            <h5>{product.name}</h5>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">{product.numReviews} total reviews</div>
        </Card.Text>

        <Card.Text as="div">
          <ReactStars {...starProps} value={product.rating} />
        </Card.Text>

        <Card.Text as="h3">$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const starProps = {
  size: 25,
  count: 5,
  color: "grey",
  activeColor: "orange",
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Star: new value is ${newValue}`);
  },
};

export default Product;
