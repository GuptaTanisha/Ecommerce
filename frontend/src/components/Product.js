//GOD IS GREAT
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
    const { product } = props;
    return (
        <div key={product._id} className="card">
          <Link to={`/product/${product._id}`}>
            <img alt={product.name} className="medium" src={product.image} />
          </Link>
          <div className="card-body">
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">
              Rs {product.price}
            </div>
          </div>
        </div>
    )
}

export default Product;
