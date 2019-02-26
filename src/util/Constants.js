exports.DEFAULTS = {

    CONSOLE: {
        stdout: process.stdout,
        stderr: process.stderr,
        timestamps: true,
        utc: false
    }
};

exports.TIME = {
    SECOND: 1000,
    MINUTE: 1000 * 60,
    HOUR: 1000 * 60 * 60,
    DAY: 1000 * 60 * 60 * 24,

    DAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    TIMESTAMP: {
        TOKENS: {
            /* eslint-disable id-length */
            Y: 4,
            Q: 1,
            M: 4,
            D: 4,
            d: 4,
            X: 1,
            x: 1,
            H: 2,
            h: 2,
            a: 1,
            A: 1,
            m: 2,
            s: 2,
            S: 3,
            Z: 2,
            l: 4,
            L: 4,
            T: 1,
            t: 1
            /* eslint-enable id-length */
        }
    },

    CRON: {
        partRegex: /^(?:(\*)|(\d+)(?:-(\d+))?)(?:\/(\d+))?$/,
        wildcardRegex: /\bh\b|\B\?\B/g,
        allowedNum: [[0, 59], [0, 23], [1, 31], [1, 12], [0, 6]],
        predefined: {
            '@annually': '0 0 1 1 *',
            '@yearly': '0 0 1 1 *',
            '@monthly': '0 0 1 * *',
            '@weekly': '0 0 * * 0',
            '@daily': '0 0 * * *',
            '@hourly': '0 * * * *'
        },
        tokens: {
            jan: 1,
            feb: 2,
            mar: 3,
            apr: 4,
            may: 5,
            jun: 6,
            jul: 7,
            aug: 8,
            sep: 9,
            oct: 10,
            nov: 11,
            dec: 12,
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        }
    }
};

exports.TIME.CRON.tokensRegex = new RegExp(Object.keys(exports.TIME.CRON.tokens).join('|'), 'g');