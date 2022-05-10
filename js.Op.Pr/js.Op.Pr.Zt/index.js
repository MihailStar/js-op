// ⋕js.Op.Pr.Zt
import { WEEK_DAYS } from './week-days.js';

class Zate {
  #date;

  /**
   * @param {number} year
   * @param {number} month
   * @param {number} day
   */
  constructor(year, month, day) {
    this.#date = new Date(year, month - 1, day);
  }

  getYear() {
    return this.#date.getFullYear();
  }

  getMonth() {
    return this.#date.getMonth() + 1;
  }

  getDay() {
    return this.#date.getDate();
  }

  getWeekDay() {
    const weekDay = this.#date.getDay();

    return weekDay === 0 ? 7 : weekDay;
  }

  getWeekDayName() {
    return WEEK_DAYS[this.getWeekDay() - 1];
  }

  getMonthName() {
    const monthName = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
    }).format(this.#date);

    return `${monthName[0].toUpperCase()}${monthName.slice(1)}`;
  }
}

const zate = new Zate(2022, 5, 5);

console.log(zate.getYear());        // -> 2022
console.log(zate.getMonth());       // -> 5
console.log(zate.getMonthName());   // -> 'Май'
console.log(zate.getDay());         // -> 5
console.log(zate.getWeekDay());     // -> 4
console.log(zate.getWeekDayName()); // -> 'Четверг'
