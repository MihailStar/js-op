// ⋕js.Op.Ih.Hr
class User {
  #name;

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

// ⋕js.Op.Ih.Hr.1
class Employee extends User {
  #salary;

  getSalary() {
    return this.#salary;
  }

  setSalary(salary) {
    this.#salary = salary;
  }
}

// ⋕js.Op.Ih.Hr.2
class Programmer extends Employee {
  // ⋕js.Op.Ih.Hr.4
  writeProgram() {}
}

// ⋕js.Op.Ih.Hr.3
class Designer extends Employee {
  // ⋕js.Op.Ih.Hr.4
  makeDesign() {}
}
