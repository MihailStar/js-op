// ⋕js.Op.Bs.AOO
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

// ⋕js.Op.Bs.AOO.1
const workers = [
  new Employee('Worker 1', 1001),
  new Employee('Worker 2', 1002),
  new Employee('Worker 3', 1003),
];

// ⋕js.Op.Bs.AOO.2
workers.forEach((worker) => {
  console.log(`${worker.name}: ${worker.salary}$`);
});
