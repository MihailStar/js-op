// ⋕js.Op.Ad.AG
class Employee {
  #name;

  constructor(name) {
    this.#name = name;
  }

  // ⋕js.Op.Ad.AG.1
  get name() {
    return this.#name;
  }
}

const employee = new Employee('Лиахим');

console.log(employee.name);
