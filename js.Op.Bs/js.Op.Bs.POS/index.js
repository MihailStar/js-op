// ⋕js.Op.Bs.POS
{
  class Employee {
    constructor(name, salary) {
      // ⋕js.Op.Bs.POS.1
      this._name = name;
      this._salary = salary;
    }

    getName() {
      return this._name;
    }

    getSalary() {
      return this._salary;
    }
  }

  const employee = new Employee('Лиахим', 1000);

  console.log(employee.getName());
  console.log(employee.getSalary());
}

{
  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }

    getSalary() {
      return this._addSign(this.salary);
    }

    // ⋕js.Op.Bs.POS.2
    _addSign(num) {
      return `${num}$`;
    }
  }

  const employee = new Employee('Лиахим', 1000);

  console.log(employee.getSalary());
}
