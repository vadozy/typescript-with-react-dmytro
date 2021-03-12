import React, { FC } from 'react';
import { useSetState } from './AppState';
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
  const setState = useSetState();

  const handleAddToCartClick = () => {
    setState((prevState) => {
      const itemExists = prevState.cart.items.find(
        (item) => item.id === pizza.id
      );
      const newItems = [...prevState.cart.items];
      if (itemExists) {
        const item = newItems.find((p) => p.id === pizza.id);
        item!.quantity += 1;
      } else {
        newItems.push({
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          quantity: 1,
        });
      }
      return { ...prevState, cart: { ...prevState.cart, items: newItems } };
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
