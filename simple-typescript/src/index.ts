import multiply, { multiplyByTwo, HelloWorld } from "./multiply";
// import multiply, * as mult from "./multiply";

const a = 4;
const b = 3;

console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} * 2 = ${multiplyByTwo(a)}`);

let n: number;
