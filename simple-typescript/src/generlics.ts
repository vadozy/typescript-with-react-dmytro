// Generic Functions
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic Classes

class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

// Example
interface Expirable {
  expiryDate: Date;
}

interface ChocolateCake extends Expirable {
  color: string;
}
interface VanillaCake extends Expirable {
  smell: string;
}

const chocolateCakes: ChocolateCake[] = [
  { expiryDate: new Date(), color: "dark" },
];
const vanillaCakes: VanillaCake[] = [
  { expiryDate: new Date(), smell: "strong" },
];

const getExpiredItems1 = (items: Expirable[]) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getTime() < currentDate);
};

const expiredChocolateCakes = getExpiredItems1(chocolateCakes);
expiredChocolateCakes.push(chocolateCakes[0]);

interface GetExpiredItemsFunction {
  <T extends Expirable>(items: T[]): T[];
}

const getExpiredItems: GetExpiredItemsFunction = (items) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getTime() < currentDate);
};

const expiredVanillaCakes = getExpiredItems(vanillaCakes);
expiredVanillaCakes.push(vanillaCakes[0]);

// ----------------------------
interface ShoppingCart<ItemId, Item> {
  items: Item[];
  addItem(item: Item): void;
  getItemById(id: ItemId): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  },
};
