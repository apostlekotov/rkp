import React from 'react';

const Product = ({id, title, price, old_price, weight, img, addFunc }) => {
  return (
    <>
      <div className="product-wrapper" id={id}>
        <h3>{ title }</h3>
          <h5>{ weight }</h5>
          <div className="price">
            <div className="new-price">{ price } грн</div>
            <div className="old-price"><strike>{ old_price } грн</strike></div>
          </div>
          <img src={img}></img>
          <div className="btn-add-wrapper">
            <button className="btn btn-lg btn-primary" 
              onClick={ () => addFunc({id, title, price, old_price, weight, img, units: 1}) }>
              До кошика
            </button>
          </div>
        </div>
      </>
  );
};

export default Product;