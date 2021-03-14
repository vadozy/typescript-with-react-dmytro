import React, { ComponentType } from 'react';
import { useDispatch } from './AppState';
import { Pizza } from '../types';

export interface AddToCartProps {
  addToCart: (pizza: Pizza) => void;
}

function withAddToCart<ORIG_P extends AddToCartProps>(
  ChildComponent: ComponentType<ORIG_P>
) {
  const AddToCartHOC = (origProps: Omit<ORIG_P, keyof AddToCartProps>) => {
    const dispatch = useDispatch();

    const handleAddToCartClick: AddToCartProps['addToCart'] = (pizza) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { item: pizza },
      });
    };

    return (
      <ChildComponent
        {...(origProps as ORIG_P)}
        addToCart={handleAddToCartClick}
      />
    );
  };

  return AddToCartHOC;
}

export default withAddToCart;
