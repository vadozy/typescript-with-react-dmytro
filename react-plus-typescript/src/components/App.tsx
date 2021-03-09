import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import AppCSS from './App.module.css';

const App = () => {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map(p => (
          <Pizza key={p.id} pizza={p} />
        ))}
      </ul>
    </div>
  );
};

export default App;
