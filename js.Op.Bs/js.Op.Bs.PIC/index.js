class Employee {
  // ⋕js.Op.Bs.PIC.2
  printName() {
    return `Имя: ${this.name}`;
  }

  // ⋕js.Op.Bs.PIC.3
  printSalary() {
    return `Зарплата: ${this.salary}`;
  }
}

// ⋕js.Op.Bs.PIC.1
const employee = new Employee();
employee.name = 'Лиахим';
employee.salary = 1000;

console.log(employee.printName());
console.log(employee.printSalary());
