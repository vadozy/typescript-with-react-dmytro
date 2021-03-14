import React, { FC } from 'react';
import SpecialOfferCSS from './SpecialOffer.module.css';
import { Pizza } from '../types';
// import withAddToCart, { AddToCartProps } from './AddToCartHOC';
// import WithAddToCartProps, { AddToCartProps } from './AddToCartRenderProps';
import { useAddToCart } from './AddToCartHook';

interface Props {
  pizza: Pizza;
}

const SpecialOffer: FC<Props> = function ({ pizza }) {
  const addToCart = useAddToCart();

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>

      {/* <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button type='button' onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps> */}

      <button type='button' onClick={() => addToCart(pizza)}>
        Add to Cart
      </button>
    </div>
  );
};

//export default withAddToCart(SpecialOffer);
export default SpecialOffer;
