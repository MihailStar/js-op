// ⋕js.Op.Bs.MCh
class Employee {
  #name;
  #salary;
  #age;

  getName() {
    return this.#name;
  }

  // ⋕js.Op.Bs.MCh.1
  setName(name) {
    this.#name = name;
    return this;
  }

  getSalary() {
    return this.#salary;
  }

  // ⋕js.Op.Bs.MCh.1
  setSalary(salary) {
    this.#salary = salary;
    return this;
  }

  getAge() {
    return this.#age;
  }

  // ⋕js.Op.Bs.MCh.1
  setAge(age) {
    this.#age = age;
    return this;
  }
}

const employee = new Employee();
employee.setName('Лиахим').setSalary(1000).setAge(30);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
