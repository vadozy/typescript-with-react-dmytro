import { useDispatch } from './AppState';
import { Pizza } from '../types';

export interface AddToCartProps {
  addToCart: (pizza: Pizza) => void;
}

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart: AddToCartProps['addToCart'] = (pizza) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: pizza },
    });
  };

  return addToCart;
};
