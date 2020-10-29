import React from 'react';

export const Product = ({title, price, old_price, weight, img}) => {
  return (
    <>
      {title} {price} {old_price} {weight} {img}
    </>
  );
};
