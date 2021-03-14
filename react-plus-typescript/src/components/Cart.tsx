import React, { createRef } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';
import { AppStateContext } from './AppState';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  #containerRef = createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    this.setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  handleOutsideClick = (ev: MouseEvent) => {
    // console.log(ev.target);
    if (!this.#containerRef.current?.contains(ev.target as Node)) {
      this.setState({ ...this.state, isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(globalState) => {
          const itemsCount = globalState.cart.items.reduce(
            (acc, item) => acc + item.quantity,
            0
          );
          return (
            <div className={CartCSS.cartContainer} ref={this.#containerRef}>
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
