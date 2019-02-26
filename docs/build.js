const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({ files: './src/**' }).then(data => fs.writeFileSync('./docs/docs.md', data));