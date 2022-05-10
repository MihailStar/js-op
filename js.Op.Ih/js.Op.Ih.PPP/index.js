// ⋕js.Op.Ih.PPP
class User {
  #name;

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class Employee extends User {
  setName(name) {
    if (name.length === 0) {
      throw new Error();
    }

    // ⋕js.Op.Ih.PPP.1
    super.setName(name);
  }
}

const employee = new Employee();
employee.setName('Лиахим');

console.log(employee.getName());
