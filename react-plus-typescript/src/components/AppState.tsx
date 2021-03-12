import React, { createContext, useState, useContext } from 'react';

interface AppState {
  cart: {
    items: { id: number; name: string; price: number; quantity: number }[];
  };
}

const defaultState: AppState = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultState);
export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<AppState>> | undefined
>(undefined);

export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error(
      'setState is undefined, useSetState was probably called outside of the AppSetStateContext provider'
    );
  }
  return setState;
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultState);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
