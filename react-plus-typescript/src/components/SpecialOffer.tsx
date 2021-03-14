import React, { FC } from 'react';
import SpecialOfferCSS from './SpecialOffer.module.css';
import { Pizza } from '../types';
import withAddToCart, { AddToCartProps } from './AddToCartHOC';

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: FC<Props> = function ({ pizza, addToCart }) {
  const handleAddToCartClick = () => {
    addToCart(pizza);
  };

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type='button' onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default withAddToCart(SpecialOffer);
