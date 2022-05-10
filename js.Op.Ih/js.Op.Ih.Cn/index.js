// ⋕js.Op.Ih.Cn
class User {
  #name;
  #surn;

  constructor(name, surn) {
    this.#name = name;
    this.#surn = surn;
  }

  getName() {
    return this.#name;
  }

  getSurn() {
    return this.#surn;
  }
}

// ⋕js.Op.Ih.Cn.1
class Employee extends User {
  #age;
  #salary;

  // ⋕js.Op.Ih.Cn.2
  constructor(name, surn, age, salary) {
    super(name, surn);

    this.#age = age;
    this.#salary = salary;
  }

  // ⋕js.Op.Ih.Cn.3
  getAge() {
    return this.#age;
  }

  // ⋕js.Op.Ih.Cn.3
  getSalary() {
    return this.#salary;
  }
}

const employee = new Employee('Лиахим', 'Допустим', 30, 1000);

console.log(employee.getName());
console.log(employee.getSurn());
console.log(employee.getAge());
console.log(employee.getSalary());
