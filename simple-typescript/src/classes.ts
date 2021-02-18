class Robot {
  constructor(protected _name: string) {}

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved to ${distance} meters`);
  }

  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const robot = new Robot("John");
robot.askName();
// robot.name = "Vadim";

class Robot2 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot extends Robot2 {
  #name: string = "robot 2";

  getName() {
    return this.#name;
  }
}
