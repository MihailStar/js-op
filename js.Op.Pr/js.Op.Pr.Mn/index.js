// ⋕js.Op.Pr.Mn
const CURRENT_YEAR = new Date().getFullYear();

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const DAYS = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

class Month {
  #number;

  /**
   * @param {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} month
   */
  constructor(month) {
    this.#number = month;
  }

  getNumber() {
    return this.#number;
  }

  getName() {
    return MONTHS[this.#number - 1];
  }

  getFirstDay() {
    return 1;
  }

  getLastDay() {
    return new Date(CURRENT_YEAR, this.#number, 0).getDate();
  }

  getWeekDayOfFirstDay() {
    return this.#getWeekDay(this.getFirstDay());
  }

  getWeekDayOfLastDay() {
    return this.#getWeekDay(this.getLastDay());
  }

  getWeekDayNameOfFirstDay() {
    return DAYS[this.#getWeekDay(this.getFirstDay()) - 1];
  }

  getWeekDayNameOfLastDay() {
    return DAYS[this.#getWeekDay(this.getLastDay()) - 1];
  }

  /**
   * @private
   * @param {number} day
   */
  #getWeekDay(day) {
    const weekDay = new Date(CURRENT_YEAR, this.#number - 1, day).getDay();

    return weekDay === 0 ? 7 : weekDay;
  }
}

const month = new Month(5);

console.log(month.getNumber());                // -> 5
console.log(month.getName());                  // -> 'Май'
console.log(month.getFirstDay());              // -> 1
console.log(month.getLastDay());               // -> 31
console.log(month.getWeekDayOfFirstDay());     // -> 7
console.log(month.getWeekDayOfLastDay());      // -> 2
console.log(month.getWeekDayNameOfFirstDay()); // -> 'Воскресенье'
console.log(month.getWeekDayNameOfLastDay());  // -> 'Вторник'
