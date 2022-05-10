// ⋕js.Op.Ih.PrP
class User {
  #name;
  #surn;

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setSurn(surn) {
    this.#surn = surn;
  }

  getSurn() {
    return this.#surn;
  }
}

// ⋕js.Op.Ih.PrP.1
class Employee extends User {
  getFull() {
    // return `${this.#name} ${this.#surn}`;
    return `${this.getName()} ${this.getSurn()}`;
  }
}

// ⋕js.Op.Ih.PrP.2
const employee = new Employee();
employee.setName('Лиахим');
employee.setSurn('Допустим');

console.log(employee.getName());
console.log(employee.getSurn());
console.log(employee.getFull());
