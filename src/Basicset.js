const Err = require('./Adset');
const Adset = require('./Adset');
/**
 * A Basicset structure with the same utility methods as {@link Adset}, but can only store Strings and Numbers
 * @extends {Adset}
 */
class Basicset extends Adset {
    constructor(iterable) {
        super(null, iterable);
        if (this.array().map(ele => {
            return ele.constructor.name;
        }).includes('Object') || this.array().map(ele => {
            return ele.constructor.name;
        }).includes('Array')) throw new Err('A Basicset can only hold Numbers or Strings', 'BasicsetInitializationError');
    }

    add(val) {
        if (val.constructor !== String && val.constructor !== Number) throw new Err('A basicset can only store numbers and strings', 'BasicsetTypeError');
        return super.add(val);
    }
}

module.exports = Basicset;