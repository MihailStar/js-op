// ⋕js.Op.Bs.MP.1
class Employee {
  test(name, salary) {
    return `Имя: ${name}. Зарплата: ${salary}`;
  }
}

const employee = new Employee();

console.log(employee.test('Лиахим', 1000));
