import React from 'react';
import { Link } from 'react-router-dom';
import './ShopHeader.css';
const ShopHeader = ({ numItems, total }) => {
  return(
    <header className="shop-header row">
      <Link to="/" className="logo text-dark">ReStore</Link>
      <Link to="/cart" className="shoping-cart">
        <i className="cart-icon fas fa-shopping-cart" />
        { numItems } items (${ total })
      </Link>
    </header>
  );
};

export default ShopHeader; 
