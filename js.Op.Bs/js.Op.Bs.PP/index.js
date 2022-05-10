// ⋕js.Op.Bs.PP
class Employee {
  // ⋕js.Op.Bs.PP.1
  #name;
  #salary;
  #age;

  // ⋕js.Op.Bs.PP.2
  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  // ⋕js.Op.Bs.PP.3
  getInfo() {
    return `${this.#name} | ${this.#salary} | ${this.#age}`;
  }
}

const employee = new Employee('Лиахим', 1000, 30);

console.log(employee.getInfo());
