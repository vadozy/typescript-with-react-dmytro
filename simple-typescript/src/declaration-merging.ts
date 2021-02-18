interface Cart {
  calculateTotal(n: number): number;
}

interface Cart {
  x: number;
}

interface Cart {
  y: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart1: Cart = {
  x: 1,
  y: 2,
  calculateTotal(n: number | { discountCode: number }) {
    return this.x;
  },
};

let myCart2: Cart = {
  x: 1,
  y: 2,
  calculateTotal(options: number | { discountCode: number }) {
    return this.x;
  },
};
