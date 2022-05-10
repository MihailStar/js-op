// ⋕js.Op.Ih.PtM
class User {
  getName() {
    return this.name;
  }

  setName(name) {
    if (this._notEmpty(name)) {
      this.name = name;
    }
  }

  // ⋕js.Op.Ih.PtM.1
  /** @protected */
  _notEmpty(str) {
    return str.length > 0;
  }
}

class Employee extends User {
  getSurn() {
    return this.surn;
  }

  setSurn(surn) {
    if (this._notEmpty(surn)) {
      this.surn = surn;
    }
  }
}

const employee = new Employee();
employee.setName('Лиахим');

console.log(employee.getName());
