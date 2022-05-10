// ⋕js.Op.Pr.ZtE
import { Zate } from './zate.mjs';

class ZateExt extends Zate {
  /**
   * @param {number} numberOfYear
   */
  incYear(numberOfYear) {
    return this.getYear() + numberOfYear;
  }

  /**
   * @param {number} numberOfYear
   */
  decYear(numberOfYear) {
    return this.getYear() - numberOfYear;
  }

  /**
   * @param {number} numberOfMonth
   */
  incMonth(numberOfMonth) {
    return this.getMonth() + numberOfMonth;
  }

  /**
   * @param {number} numberOfMonth
   */
  decMonth(numberOfMonth) {
    return this.getMonth() - numberOfMonth;
  }

  /**
   * @param {number} numberOfDay
   */
  incDay(numberOfDay) {
    return this.getDay() + numberOfDay;
  }

  /**
   * @param {number} numberOfDay
   */
  decDay(numberOfDay) {
    return this.getDay() - numberOfDay;
  }
}

export { ZateExt };
