const Err = require('./Error');
const Adset = require('./Adset');
const Admap = require('./Admap');
const Util = require('./Util');
/**
 * A store
 * Who's purpose is yet unknown
 */
class Store {
    constructor() {
        this.set = new Adset();

        this.map = new Admap();
    }
}

module.exports = Store;