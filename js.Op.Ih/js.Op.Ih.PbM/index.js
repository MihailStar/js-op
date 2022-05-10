// ⋕js.Op.Ih.Inr
class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

class Employee extends User {}

const employee = new Employee('');
// ⋕js.Op.Ih.PbM.1
employee.setName('Лиахим');

// ⋕js.Op.Ih.PbM.1
console.log(employee.getName());
