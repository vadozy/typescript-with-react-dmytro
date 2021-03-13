import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface AppState {
  cart: {
    items: CartItem[];
  };
}

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: {
    item: Omit<CartItem, 'quantity'>;
  };
}

interface InitializeCartAction extends Action<'INIT_CART'> {
  payload: { cart: AppState['cart'] };
}

const defaultState: AppState = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultState);
export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

const reducer = (
  state: AppState,
  action: AddToCartAction | InitializeCartAction
) => {
  if (action.type === 'ADD_TO_CART') {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );
    const newItems = [...state.cart.items];
    if (itemExists) {
      const item = newItems.find((p) => p.id === itemToAdd.id);
      item!.quantity += 1;
    } else {
      newItems.push({ ...itemToAdd, quantity: 1 });
    }
    return { ...state, cart: { ...state.cart, items: newItems } };
  } else if (action.type === 'INIT_CART') {
    return { ...state, cart: action.payload.cart };
  }
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      'dispatch is undefined, useDispatch was probably called outside of the AppDispatchContext provider'
    );
  }
  return dispatch;
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // load cart on initial render only
  useEffect(() => {
    const cartJSON = window.localStorage.getItem('cart');
    if (cartJSON) {
      const cart = JSON.parse(cartJSON);
      dispatch({ type: 'INIT_CART', payload: { cart } });
    }
  }, []);

  // save cart to local storage
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
