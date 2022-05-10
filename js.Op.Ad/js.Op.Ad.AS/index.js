// ⋕js.Op.Ad.AS
class Employee {
  #name;

  get name() {
    return this.#name;
  }

  // ⋕js.Op.Ad.AS.1
  set name(value) {
    // ⋕js.Op.Ad.AS.2
    if (value.length === 0) {
      throw new Error();
    }

    this.#name = value;
  }
}

const employee = new Employee();

try {
  employee.name = '';
  console.log(employee.name);
} catch {
  console.log('Ошибка');
}

try {
  employee.name = 'Лиахим';
  console.log(employee.name);
} catch {
  console.log('Ошибка');
}
