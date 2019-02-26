const Err = require('../Error');

const { promisify } = require('util');
const { exec } = require('child_process');
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

    /**
    * Deep clone a value
    * @param {*} source The object to clone
    * @returns {*}
    */
    static deepClone(source) {
        // Check if it's a primitive (with exception of function and null, which is typeof object)
        if (source === null || Util.isPrimitive(source)) return source;
        if (Array.isArray(source)) {
            const output = [];
            for (const value of source) output.push(Util.deepClone(value));
            return output;
        }
        if (Util.isObject(source)) {
            const output = {};
            for (const [key, value] of Object.entries(source)) output[key] = Util.deepClone(value);
            return output;
        }
        if (source instanceof Map) {
            const output = new source.constructor();
            for (const [key, value] of source.entries()) output.set(key, Util.deepClone(value));
            return output;
        }
        if (source instanceof Set) {
            const output = new source.constructor();
            for (const value of source.values()) output.add(Util.deepClone(value));
            return output;
        }
        return source;
    }

    /**
    * Sets default properties on an object that aren't already specified.
    * @param {Object} def Default properties
    * @param {Object} [given] Object to assign defaults to
    * @returns {Object}
    * @private
    */
    static mergeDefault(def, given) {
        if (!given) return Util.deepClone(def);
        for (const key in def) {
            if (typeof given[key] === 'undefined') given[key] = Util.deepClone(def[key]);
            else if (Util.isObject(given[key])) given[key] = Util.mergeDefault(def[key], given[key]);
        }

        return given;
    }
}

/**
 * Promisified version of {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout setTimeout} to be used with await
 * @param {Number} delay The amount of time in ms to delay
 * @param {*} [args] Any args to pass to the .then (mostly pointless in this form)
 * @returns {Promise<*>} The args value passed in
 * @method
 * @static
 */
Util.sleep = promisify(setTimeout);

/**
 * Promisified version of exec to be used with await
 * @param {String} command The command to run
 * @param {external:ExecOptions} [options] The options to pass to exec
 * @returns {Promise<{ stdout: string, stderr: string}>} The promise
 * @method
 * @static
 */
Util.exec = promisify(exec);

module.exports = Util;