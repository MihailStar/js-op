// ⋕js.Op.Bs.PS
class Employee {
  #name;
  #salary;
  #age;

  getName() {
    return this.#name;
  }

  // ⋕js.Op.Bs.PS.1
  setName(name) {
    this.#name = name;
  }

  getSalary() {
    return this.#salary;
  }

  // ⋕js.Op.Bs.PS.1
  setSalary(salary) {
    this.#salary = salary;
  }

  getAge() {
    return this.#age;
  }

  // ⋕js.Op.Bs.PS.1
  setAge(age) {
    this.#age = age;
  }
}

const employee = new Employee();
employee.setName('Лиахим');
employee.setSalary(1000);
employee.setAge(30);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
