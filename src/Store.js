const Err = require('./Error');
const Adset = require('./Adset');
const Admap = require('./Admap');
/**
 * A store, which is used to interact with AdvancedJS easily
 */
class Store {
    /**
     * Initializes a new Store
     * @param {Iterable<*>} [adsetIterator] The iterator for the adset
     * @param {Iterable<*>} [admapIterator] The iterator for the admap
     */
    constructor(admapIterator, adsetIterator) {
        /**
         * The Store's Admap
         * @type {Admap}
         */
        this.map = new Admap(this, admapIterator);

        /**
         * The Store's Adset
         * @type {Adset}
         */
        this.set = new Adset(this, adsetIterator);
    }

    /**
     * Sets a new Admap as the map
     * @param {Admap} map The Admap to set
     * @returns {Store} The store, after setting the new Admap
     */
    newMap(map) {
        if (map.constructor.name !== 'Admap') throw new Err(`An Admap must be passed to the newMap method, found type ${map.constructor.name}`, 'StoreAdmapError');
        this.map.store = null;
        this.map = map;
        return this;
    }

    /**
     * Sets a new Adset as the set
     * @param {Adset} set The Adset to set
     * @returns {Store} The store, after setting the new Adset
     */
    newSet(set) {
        if (set.constructor.name !== 'Adset') throw new Err(`An Adset must be passed to the newSet method, found type ${set.constructor.name}`, 'StoreAdsetError');
        this.set.store = null;
        this.set = set;
        return this;
    }
}

module.exports = Store;