// ⋕js.Op.Bs.CPP
class Employee {
  // ⋕js.Op.Bs.CPP.1
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // ⋕js.Op.Bs.CPP.2
  getName() {
    return this.name;
  }

  // ⋕js.Op.Bs.CPP.3
  getSalary() {
    return this.salary;
  }

  // ⋕js.Op.Bs.CPP.4
  getSalaryWithBonus() {
    const bonusPercent = 10;
    const bonus = (this.salary / 100) * bonusPercent;

    return this.salary + bonus;
  }
}

const employee = new Employee('Лиахим', 1000);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getSalaryWithBonus());
