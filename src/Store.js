const Err = require('./Error');
const Adset = require('./Adset');
const Admap = require('./Admap');
const Util = require('./Util');
/**
 * A store, which is used to interact with AdvancedJS easily
 */
class Store {
    /**
     * Initializes a store, with options
     * @param {StoreOptions} [options] Options for initializing the store
     */
    constructor(options = {}) {
        options = Util.verifyStoreOptions(options);
        /**
         * The Store's Admap
         * @type {?Admap}
         */
        if (options.admap) this.map = new Admap(this, options.admapIterable);
        else this.map = null;

        /**
         * The Store's Adset
         * @type {?Adset}
         */
        if (options.adset) this.set = new Adset(options.adsetIterable);
        else this.set = null;
    }
}
/**
 * Options for initializing a new {@link Store}
 * @typedef {Object} StoreOptions
 * @property {Iterable} [adsetIterable] The iterable to initialize the store's {@link Adset} with
 * @property {Iterable} [admapIterable] The iterable to initialize the store's {@link Admap} with
 * @property {Boolean} [admap=true] Whether to initialize an Admap or not
 * @property {Boolean} [adset=true] Whether to initialize an Adset or not
 */

module.exports = Store;