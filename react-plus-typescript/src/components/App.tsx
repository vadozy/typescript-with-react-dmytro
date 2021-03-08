import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';

const App = () => {
  return (
    <ul>
      {pizzas.map(p => (
        <Pizza key={p.id} pizza={p} />
      ))}
    </ul>
  );
};

export default App;
