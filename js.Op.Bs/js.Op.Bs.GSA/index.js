// ⋕js.Op.Bs.GSA
class Employee {
  #name;
  #salary;
  #age;

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  // ⋕js.Op.Bs.GSA.2
  getSalary() {
    return `${this.#salary}$`;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  getAge() {
    return this.#age;
  }

  // ⋕js.Op.Bs.GSA.1
  setAge(age) {
    if (age <= 0 || age >= 120) {
      throw new Error();
    }

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
