// ⋕js.Op.Bs.OIC
class Position {
  constructor(position) {
    this.name = position;
  }
}

class Department {
  constructor(department) {
    this.name = department;
  }
}

class Employee {
  constructor(name, position, department) {
    // ⋕js.Op.Bs.OIC.1
    if (
      !(position instanceof Position) ||
      !(department instanceof Department)
    ) {
      throw new Error();
    }
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

// ⋕js.Op.Bs.OIC.2
const employee = new Employee(
  'Лиахим',
  new Position('Какая-то должность'),
  new Department('Какой-то отдел')
);

// ⋕js.Op.Bs.OIC.3
console.log(employee.name);
console.log(employee.position.name);
console.log(employee.department.name);
