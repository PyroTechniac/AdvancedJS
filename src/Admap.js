const Err = require('./CustomError');
/**
 * An Advanced Map structure with more utility methods
 * @extends {Map}
 */
class Admap extends Map {
    /**
     * Initializes an Admap
     * @param {Iterable<*, *>} [iterable] The iterable to initialize the Admap with
     */
    constructor(iterable) {
        super(iterable);

        /**
         * Cached array for the `array()` method, will be reset to null whenever `set()` or `delete()` are called
         * @name Admap#_array
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true });

        /**
         * Cached array for the `keyArray()` method, will be reset to null whenever `set()` or `delete()` are called
         * @name Admap#_keyArray
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_keyArray', { value: null, writable: true, configurable: true });

        /**
         * Whether the Admap is sealed or not, if true, the Adset cannot be modified in any way
         * @type {Boolean}
         * @private
         */
        Object.defineProperty(this, '_sealed', { value: false, writable: true, configurable: false });
    }

    /**
     * Returns an ordered array of all the keys in this Admap
     * @returns {Array<*>} An array of the keys
     */
    keyArray() {
        if (!this._keyArray || this._keyArray !== this.size) this._keyArray = [...this.keys()];
        return this._keyArray;
    }

    /**
     * Returns an ordered array of all the values in this Admap
     * @returns {Array<*>} An array of the values
     */
    array() {
        if (!this._array || this._array.length !== this.size) this._array = [...this.values()];
        return this._array;
    }

    /**
     * Seals an Admap, preventing further modification in any way until the {@link Admap#break} method is called
     * @returns {Admap<*, *>} The sealed Admap
     */
    seal() {
        this._sealed = true;
        return this;
    }

    /**
     * Breaks a seal, allowing the Admap to be modified again, does nothing if the Admap wasn't sealed
     * @returns {Admap<*, *>} The Admap, after being unsealed
     */
    break() {
        this._sealed = false;
        return this;
    }

    clear() {
        if (this._sealed) throw new Err('The Admap is sealed, and cannot be modified', 'AdmapSealedError');
        return super.clear();
    }

    set(key, value) {
        if (this._sealed) throw new Err('The Admap is sealed, and cannot be modified', 'AdmapSealedError');
        return super.set(key, value);
    }

    delete(key) {
        if (this._sealed) throw new Err('The Admap is sealed, and cannot be modified', 'AdmapSealedError');
        return super.delete(key);
    }

    /**
    * Exactly the same as [`Map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) but
    * returns the Admap instead of undefined
    * @param {Function} fn The function to run
    * @param {*} [thisArg] The argument to use as `this`
    * @returns {Admap<*, *>} The set after the function was ran
    */
    each(fn, thisArg) {
        if (this._sealed) throw new Err('The Admap is sealed, and cannot be modified', 'AdmapSealedError');
        this.forEach(fn, thisArg);
        return this;
    }
}

module.exports = Admap;