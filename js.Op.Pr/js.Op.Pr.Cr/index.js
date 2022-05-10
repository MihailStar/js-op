// ⋕js.Op.Pr.Cr
class Circle {
  /**
   * @type {number}
   */
  #radius;

  /**
   * @param {number} radius
   */
  constructor(radius) {
    this.#radius = radius;
  }

  /**
   * @returns {number}
   */
  getSquare() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  /**
   * @returns {number}
   */
  getLength() {
    return Math.PI * this.#radius * 2;
  }
}
