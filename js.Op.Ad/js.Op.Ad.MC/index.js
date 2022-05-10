// ⋕js.Op.Ad.MC
class Employee {
  constructor(name, salary, coeffs) {
    this.name = name;
    this.salary = salary;
    this.coeffs = coeffs;
  }

  getTotal() {
    return this.coeffs.reduce((res, coeff) => res + this.salary * coeff, 0);
  }
}

const employee = new Employee('John', 1000, [1.1, 1.2, 1.3]);

// ⋕js.Op.Ad.MC.1
console.log(employee.getTotal);
