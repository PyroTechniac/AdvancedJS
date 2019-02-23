const AdvancedJS = require('../index');

const set = new AdvancedJS.Adset();
for (let i = 0; i < 11; i++) {
    set.add(i);
}
console.log(set.get({ value: '5', mode: 'loose' }));