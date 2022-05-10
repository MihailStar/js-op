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

class Employee extends User {
  #salary;

  constructor(name, salary) {
    super(name);
    this.#salary = salary;
  }

  // ⋕js.Op.Ih.OChM.1
  getSalary() {
    return this.#salary;
  }

  // ⋕js.Op.Ih.OChM.1
  setSalary(salary) {
    this.#salary = salary;
  }
}

const employee = new Employee('Работник', 0);
employee.setName('Лиахим');
employee.setSalary(1000);

// ⋕js.Op.Ih.OChM.2
console.log(employee.getName());
console.log(employee.getSalary());
