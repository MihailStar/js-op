// ⋕js.Op.Ad.PT
class Employee {
  #name;

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }
}

// ⋕js.Op.Ad.PT.1
const employee = new Employee();
employee.name = 'Лиахим';

console.log(employee.name);
