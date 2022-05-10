// ⋕js.Op.Ih.COM.1
class User {
  #age;

  getAge() {
    return this.#age;
  }

  setAge(age) {
    if (age < 0) {
      throw new Error('need age more 0');
    }

    this.#age = age;
  }
}

class Employee extends User {
  setAge(age) {
    if (age > 120) {
      throw new Error('need age less 120');
    }

    super.setAge(age);
  }
}

const employee = new Employee();
employee.setAge(30);

console.log(employee.getAge());
