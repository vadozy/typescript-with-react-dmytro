import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';
import { AppStateContext } from './AppState';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    console.log(e.currentTarget);
    this.setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(globalState) => {
          const itemsCount = globalState.cart.items.reduce(
            (acc, item) => acc + item.quantity,
            0
          );
          return (
            <div className={CartCSS.cartContainer}>
              <button
                className={CartCSS.button}
                type='button'
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen ? 'block' : 'none' }}
              >
                <ul>
                  {globalState.cart.items.map((pizza) => (
                    <li key={pizza.id}>
                      {pizza.name} &times; {pizza.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
