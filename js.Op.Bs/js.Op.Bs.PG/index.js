// ⋕js.Op.Bs.PG
class Employee {
  // ⋕js.Op.Bs.PG.1
  #name;
  #salary;
  #age;

  // ⋕js.Op.Bs.PG.2
  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  // ⋕js.Op.Bs.PG.3
  getName() {
    return this.#name;
  }

  // ⋕js.Op.Bs.PG.3
  getSalary() {
    return this.#salary;
  }

  // ⋕js.Op.Bs.PG.3
  getAge() {
    return this.#age;
  }
}

const employee = new Employee('Лиахим', 1000, 30);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
