// ⋕js.Op.Pr.Zt
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
    const weekDayName = new Intl.DateTimeFormat('ru-RU', {
      weekday: 'long',
    }).format(this.#date);

    return `${weekDayName[0].toUpperCase()}${weekDayName.slice(1)}`;
  }

  getMonthName() {
    const monthName = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
    }).format(this.#date);

    return `${monthName[0].toUpperCase()}${monthName.slice(1)}`;
  }
}

export { Zate };
