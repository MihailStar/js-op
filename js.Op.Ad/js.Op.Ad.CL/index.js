// ⋕js.Op.Ad.CL
class Employee {
  constructor(name, salary, coeffs) {
    this.name = name;
    this.salary = salary;
    this.coeffs = coeffs;
  }

  getTotal() {
    // ⋕js.Op.Ad.CL.1
    return this.coeffs.reduce((res, coeff) => res + this.salary * coeff, 0);
  }
}

const employee = new Employee('John', 1000, [1.1, 1.2, 1.3]);

console.log(employee.getTotal());
