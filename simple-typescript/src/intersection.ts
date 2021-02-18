interface IA {
  a: number;
}

interface IB {
  b: number;
}

function combine1(o1: IA, o2: IB) {
  return { ...o1, ...o2 };
}

function combine2<T extends object, U extends object>(o1: T, o2: U) {
  return { ...o1, ...o2 };
}
