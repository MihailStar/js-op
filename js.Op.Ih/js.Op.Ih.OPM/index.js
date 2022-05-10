// ⋕js.Op.Ih.OPM
class User {
  #name;
  #age;

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  // ⋕js.Op.Ih.OPM.1
  getAge() {
    return this.#age;
  }

  // ⋕js.Op.Ih.OPM.1
  setAge(age) {
    this.#age = age;
  }
}

class Employee extends User {
  #salary;

  getSalary() {
    return this.#salary;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  // ⋕js.Op.Ih.OPM.2
  setAge(age) {
    if (age < 18 || age > 65) {
      throw new Error();
    }

    super.setAge(age);
  }
}

const employee = new Employee('', 0);
employee.setName('Лиахим');
employee.setSalary(1000);
employee.setAge(30);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
