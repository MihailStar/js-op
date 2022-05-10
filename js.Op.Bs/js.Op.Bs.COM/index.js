// ⋕js.Op.Bs.COM
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

// ⋕js.Op.Bs.COM.1
class EmployeesCollection {
  #employees = [];

  // ⋕js.Op.Bs.COM.2
  add(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error();
    }

    this.#employees.push(employee);

    return this;
  }

  // ⋕js.Op.Bs.COM.3
  print() {
    this.#employees.forEach((employee) => {
      console.log(employee);
    });
  }

  // ⋕js.Op.Bs.COM.4
  getTotalSalary() {
    return this.#employees.reduce((acc, employee) => acc + employee.salary, 0);
  }

  // ⋕js.Op.Bs.COM.5
  getAverageSalary() {
    return this.getTotalSalary() / this.#employees.length;
  }
}

const employeesCollection = new EmployeesCollection();
employeesCollection
  .add(new Employee('Worker 1', 1001))
  .add(new Employee('Worker 2', 1002))
  .add(new Employee('Worker 3', 1003));

console.log(employeesCollection.getTotalSalary());
console.log(employeesCollection.getAverageSalary());
