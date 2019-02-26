/**
 * A Colors class for use with {@link AdvancedConsole}
 */
class Colors {
    /**
     * Creates a color instance
     * @param {ColorFormatOptions} [options={}] The options for this format
     */
    constructor(options = {}) {
        const { opening, closing } = this.constructor.text(options.text, this.constructor.background(options.background, this.constructor.style(options.style)));

        /**
		 * The opening tags
		 * @type {string}
		 */
        this.opening = this.constructor.useColors ? `\u001B[${opening.join(';')}m` : '';

        /**
		 * The closing tags
		 * @type {string}
		 */
        this.closing = this.constructor.useColors ? `\u001B[${closing.join(';')}m` : '';
    }

    /**
     * Formats a string
     * @param {string} string String to format
     * @returns {string}
     */
    format(string) {
        return this.opening + string + this.closing;
    }

    /**
	 * Apply the style
	 * @param {(string|string[])} [styles] The style or styles to apply
	 * @param {ColorsFormatData} [data={}] The data
	 * @returns {ColorsFormatData}
	 * @private
	 */
    static style(styles, { opening = [], closing = [] } = {}) {
        if (styles) {
            if (!Array.isArray(styles)) styles = [styles];
            for (let style of styles) {
                style = style.toLowerCase();
                if (!(style in this.STYLES)) continue;
                opening.push(this.STYLES[style]);
                closing.push(this.CLOSE[style]);
            }
        }
        return { opening, closing };
    }

    /**
    * Apply the background
    * @param {string} [background] The background to apply
    * @param {ColorsFormatData} [data={}] The data
    * @returns {ColorsFormatData}
    * @private
    */
    static background(background, { opening = [], closing = [] } = {}) {
        if (background && background.toLowerCase() in this.BACKGROUNDS) {
            opening.push(this.BACKGROUNDS[background.toLowerCase()]);
            closing.push(this.CLOSE.background);
        }
        return { opening, closing };
    }

    /**
	 * Apply the text format
	 * @param {string} [text] The text format to apply
	 * @param {ColorsFormatData} [data={}] The data
	 * @returns {ColorsFormatData}
	 * @private
	 */
    static text(text, { opening = [], closing = [] } = {}) {
        if (text && text.toLowerCase() in this.TEXTS) {
            opening.push(this.TEXTS[text.toLowerCase()]);
            closing.push(this.CLOSE.text);
        }
        return { opening, closing };
    }
}

/**
 * Whether the class should be constructed with colors
 * @type {?boolean}
 * @static
 * @private
 */
Colors.useColors = null;

/**
 * The close codes
 * @type {Object}
 * @static
 * @private
 */
Colors.CLOSE = {
    normal: 0,
    bold: 22,
    dim: 22,
    italic: 23,
    underline: 24,
    inverse: 27,
    hidden: 28,
    strikethrough: 29,
    text: 39,
    background: 49
};

/**
 * The style codes
 * @type {object}
 * @static
 * @private
 */
Colors.STYLES = {
    normal: 0,
    bold: 1,
    dim: 2,
    italic: 3,
    underline: 4,
    inverse: 7,
    hidden: 8,
    strikethrough: 9
};

/**
 * The text codes
 * @type {object}
 * @static
 * @private
 */
Colors.TEXTS = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    lightgray: 37,
    lightgrey: 37,
    gray: 90,
    grey: 90,
    lightred: 91,
    lightgreen: 92,
    lightyellow: 93,
    lightblue: 94,
    lightmagenta: 95,
    lightcyan: 96,
    white: 97
};

/**
 * The background codes
 * @type {object}
 * @static
 * @private
 */
Colors.BACKGROUNDS = {
    black: 40,
    red: 41,
    green: 42,
    yellow: 43,
    blue: 44,
    magenta: 45,
    cyan: 46,
    gray: 47,
    grey: 47,
    lightgray: 100,
    lightgrey: 100,
    lightred: 101,
    lightgreen: 102,
    lightyellow: 103,
    lightblue: 104,
    lightmagenta: 105,
    lightcyan: 106,
    white: 107
};

/**
 * @typedef {Object} ColorsFormatOptions
 * @property {(string|string[])} [style] The style or styles to apply
 * @property {string} [background] The format for the background
 * @property {string} [text] The format for the text
 */

/**
 * @typedef {Object} ColorsFormatData
 * @property {string[]} opening The opening format style
 * @property {string[]} closing The closing format style
 * @private
 */

module.exports = Colors;