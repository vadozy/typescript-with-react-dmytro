interface A {
  p1: number;
}

interface B {
  p1: number;
  p2: string;
}

let a: A = { p1: 42 };
let b: B = { p1: 43, p2: "test" };

a = b;

interface Profile {
  name: string;
  // age: number;
}

let profile: Profile = {
  name: "John",
};
// profile.age = 42;

profile.name = "Steve";

// Index signature
interface C {
  p1: string;
  p2: number;
  p3?: boolean;
  [key: string]: number | string | boolean | undefined;
}

// Call signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const s2: Sum = (a, b) => a + b;
s2.prop1 = "qwerty";
