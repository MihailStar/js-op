// ⋕js.Op.Bs.OI
class Student {
  constructor(name) {
    this.name = name;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
}

const users = [
  new Student('user1'),
  new Employee('user2'),
  new Student('user3'),
  new Employee('user4'),
  new Student('user5'),
  new Employee('user6'),
  new Student('user7'),
];

// ⋕js.Op.Bs.OI.2
users.forEach((user) => {
  if (user instanceof Employee) {
    console.log(user);
  }
});
