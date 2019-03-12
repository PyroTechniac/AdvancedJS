const Err = require('./CustomError');
const Admap = require('./Admap');
/**
 * A Basicmap structure with the same utility methods as {@link Admap}, but can only have Strings and Numbers as keys
 * @extends {Admap}
 */
class Basicmap extends Admap {
    constructor(iterable) {
        super(iterable);
        this.keyArray().forEach(element => {
            if (element.constructor !== Number && element.constructor !== String) throw new Err(`A Basic Map can only have Strings and Numbers as it's keys, found ${element.constructor.name}`);
        });
    }

    set(key, value) {
        if (key.constructor !== Number && key.constructor !== String) throw new Err(`A Basicmap can only hold strings or numbers, found type ${key.constructor.name}`, 'BasicmapTypeError');
        return super.set(key, value);
    }
}

module.exports = Basicmap;