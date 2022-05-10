// ⋕js.Op.Bs.PM
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.#addSign(this.salary);
  }

  // ⋕js.Op.Bs.PM.1
  #addSign(num) {
    return `${num}$`;
  }
}

const employee = new Employee('Лиахим', 1000);

console.log(employee.getSalary());
