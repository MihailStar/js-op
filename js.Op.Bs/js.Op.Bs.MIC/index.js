class Student {
  // ⋕js.Op.Bs.MIC.2
  getUpperFirstChar(string) {
    return string[0].toUpperCase();
  }

  // ⋕js.Op.Bs.MIC.3
  getInitials() {
    const nameUpperFirstChar = this.getUpperFirstChar(this.name);
    const surnUpperFirstChar = this.getUpperFirstChar(this.surn);

    return `${nameUpperFirstChar}. ${surnUpperFirstChar}.`;
  }
}

// ⋕js.Op.Bs.MIC.1
const student = new Student();
student.name = 'Лиахим';
student.surn = 'Допустим';
