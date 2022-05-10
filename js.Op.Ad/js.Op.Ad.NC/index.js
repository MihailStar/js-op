// ⋕js.Op.Ad.NC
class Employee {
  constructor(salary) {
    this.salary = salary;
  }

  // ⋕js.Op.Ad.NC.1
  getSalary() {
    return `${this.salary}$`;
  }
}

const employee = new Employee(1000);

console.log(employee.salary);
console.log(employee.getSalary());
