const { Admap, Adset, Basicmap, Basicset, CustomError } = require('../src/index');
const admap = new Admap();
const adset = new Adset();
const basicmap = new Basicmap();
const basicset = new Basicset();
try {
    throw new CustomError('This is a test', 'TestError');
} catch (error) {
    console.log(error);
}