const Err = require('./Error');

/**
 * A Utility class with several methods
 */
class Util {
    constructor() {
        throw new Err(`The class ${this.constructor.name} cannot be initialized`, 'ClassError');
    }

    /**
     * Checks if the provided input is a Function
     * @param {Function} input The function to verify
     * @returns {Boolean} Whether the input was a function
     */
    static isFunc(input) {
        return typeof input === 'function';
    }

    /**
     * Checks if the provided input is a class
     * @param {Function} input The class to verify
     * @returns {Boolean} Whether the input was a class
     */
    static isClass(input) {
        return typeof input === 'function' &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }

    /**
     * Checks if the provided input is an object
     * @param {Object} input The Object to verify
     * @returns {Boolean} Whether the input was an object
     */
    static isObject(input) {
        return input && input.constructor === Object;
    }
}

module.exports = Util;