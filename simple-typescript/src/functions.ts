// function optional and default params
function sum(a: number, b: number = 0) {
  return a + b;
}

type MyFunc = (a: number, b: number) => number;

let f1: MyFunc = sum;

sum(4);

function sumAll(...numbers: number[]) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
