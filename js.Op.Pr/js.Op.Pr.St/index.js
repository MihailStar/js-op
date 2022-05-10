// ⋕js.Op.Pr.St
class Store {
  /** @type {{[key: string]: object}} */
  #storage = {};

  /**
   * @param {string} keyOrCompositeKey
   * @returns {object?}
   */
  get(keyOrCompositeKey) {
    try {
      const obj = eval(`this.#storage.${keyOrCompositeKey}`);

      if (obj === undefined) return null;

      return obj;
    } catch {
      return null;
    }
  }

  /**
   * @param {string} key
   * @param {object} obj
   * @returns {boolean}
   */
  set(key, obj) {
    try {
      this.#storage[key] = obj;

      return true;
    } catch {
      return false;
    }
  }

  /**
   * @param {string} keyOrCompositeKey
   * @returns {boolean}
   */
  del(keyOrCompositeKey) {
    try {
      eval(`delete this.#storage.${keyOrCompositeKey}`);

      return true;
    } catch {
      return false;
    }
  }
}

const store = new Store();
store.set('key', { a: 1, b: 2, c: 3 });

console.log(store.get('key'));   // -> { a: 1, b: 2, c: 3 }
console.log(store.get('key.a')); // -> 1
console.log(store.get('key.b')); // -> 2
console.log(store.get('key.c')); // -> 3
