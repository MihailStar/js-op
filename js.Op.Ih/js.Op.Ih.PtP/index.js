// ⋕js.Op.Ih.PtP.1
class User {
  /** @protected */
  _name;

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }
}

class Employee extends User {
  setName(name) {
    if (name.length > 0) {
      this._name = name;
    }
  }
}

const employee = new Employee();
employee.setName('Лиахим');

console.log(employee.getName());
