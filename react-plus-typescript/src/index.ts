function log(s: string) {
  console.log(s);
}

class A {
  // greeting = "Hello World";

  constructor(public greeting: string) {}
}

log(new A("Hello Babel World!!!").greeting);

export {};
