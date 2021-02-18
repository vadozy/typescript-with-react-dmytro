interface Animal {
  name: string;
  group?: string;
  setGroup(group: string): void;
}

interface AnimalConstructor<T> {
  new (name: string): T;
  //kind?: string;
}

class Cat implements Animal {
  name: string;
  group?: string;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string) {
    this.group = group;
  }
}

class Dog implements Animal {
  name: string;
  group?: string;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string) {
    this.group = group;
  }

  bark() {}
}

function initializeAnimal<T extends Animal>(
  AnimalSubclass: AnimalConstructor<T>,
  name: string
) {
  const animal = new AnimalSubclass(name);
  //Animal.kind = "pet";
  animal.setGroup("mammals");
  return animal;
}

const cat = initializeAnimal(Cat, "Felix");
const dog = initializeAnimal(Dog, "Ava");

dog.bark();
