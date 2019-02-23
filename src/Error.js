/**
 * A custom error, with a providable name to make it unique
 * @extends {Error}
 */
class CustomError extends Error {
    /**
     * Creates a new Error, usually to be used with [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
     * @param {String} message The Error Message
     * @param {String} [name=AdvancedJSError] The name of the error, defaults to `AdvancedJSError`
     */
    constructor(message, name = null) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = name || 'AdvancedJSError';
        this.message = message;
    }
}

module.exports = CustomError;