const Err = require('./Error');

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
 * Promisified version of {@link https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback} to be used with await
 * @param {String} command The command to run
 * @param {external:ExecOptions} [options] The options to pass to exec
 * @returns {Promise<{ stdout: string, stderr: string}>} The promise
 * @method
 * @static
 */
Util.exec = promisify(exec);

module.exports = Util;