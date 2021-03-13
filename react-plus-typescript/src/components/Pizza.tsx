import React, { FC } from 'react';
import { useDispatch } from './AppState';
import PizzaCSS from './Pizza.module.css';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: FC<Props> = ({ pizza }) => {
  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: pizza },
    });
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

export default Pizza;
