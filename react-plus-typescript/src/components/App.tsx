import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import Cart from './Cart';
import AppCSS from './App.module.css';
import PizzaSVG from '../svg/pizza.svg';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  const specialOfferReactElement = specialOfferPizza && (
    <SpecialOffer pizza={specialOfferPizza}></SpecialOffer>
  );

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferReactElement}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((p) => (
            <Pizza key={p.id} pizza={p} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
