const Err = require('./Error');
const Admap = require('./Admap');
/**
 * A Basicmap structure with the same utility as {@link Admap}, but can only have Strings and Numbers as keys
 * @extends {Admap}
 */
class Basicmap extends Admap {
    constructor(iterable) {
        super(iterable);
        this.keyArray().forEach(element => {
            if (element.constructor !== Number && element.constructor !== String) throw new Err(`A Basic Map can only have Strings and Numbers as it's keys, found ${element.constructor.name}`);
        });
    }
}

module.exports = Basicmap;