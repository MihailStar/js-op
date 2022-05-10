// ⋕js.Op.Pr.Pr
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;

class Period {
  #startTime;
  #endTime;

  /**
   * @param {Date} startTime
   * @param {Date} endTime
   */
  constructor(startTime, endTime) {
    this.#startTime = startTime;
    this.#endTime = endTime;
  }

  /**
   * @typedef {'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days'} Unit
   */

  /**
   * @param {Unit} inUnit
   * @returns {number}
   */
  get(inUnit = 'milliseconds') {
    const periodInMilliseconds =
      this.#endTime.valueOf() - this.#startTime.valueOf();

    switch (inUnit) {
      case 'days':
        return Math.trunc(periodInMilliseconds / MILLISECONDS_IN_DAY);

      case 'hours':
        return Math.trunc(periodInMilliseconds / MILLISECONDS_IN_HOUR);

      case 'minutes':
        return Math.trunc(periodInMilliseconds / MILLISECONDS_IN_MINUTE);

      case 'seconds':
        return Math.trunc(periodInMilliseconds / MILLISECONDS_IN_SECOND);

      case 'milliseconds':
      default:
        return periodInMilliseconds;
    }
  }

  getInMilliseconds() {
    return this.get('milliseconds');
  }

  getInSeconds() {
    return this.get('seconds');
  }

  getInMinutes() {
    return this.get('minutes');
  }

  getInHours() {
    return this.get('hours');
  }

  getInDays() {
    return this.get('days');
  }
}
