import React, { FC } from 'react';
import PizzaCSS from './Pizza.module.css';
import { Pizza } from '../types';
import withAddToCart, { AddToCartProps } from './AddToCartHOC';

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const PizzaComponent: FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart(pizza);
  };

  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type='button' onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaComponent);
