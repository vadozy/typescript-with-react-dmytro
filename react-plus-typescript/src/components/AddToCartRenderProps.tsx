import { FC } from 'react';
import { useDispatch } from './AppState';
import { Pizza } from '../types';

export interface AddToCartProps {
  addToCart: (pizza: Pizza) => void;
}

interface Props {
  children: (props: AddToCartProps) => JSX.Element;
}

const WithAddToCartProps: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const addToCart: AddToCartProps['addToCart'] = (pizza) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: pizza },
    });
  };

  return children({ addToCart });
};

export default WithAddToCartProps;
