function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(prop({ p1: 42 }, "p1"));
console.log(prop({ p2: "test" }, "p2"));
