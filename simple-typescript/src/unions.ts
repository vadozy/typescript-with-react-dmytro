interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return "bark" in pet;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();

  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }

  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}
