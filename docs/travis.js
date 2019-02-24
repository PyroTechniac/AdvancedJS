const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({ files: './src/*.js' }).then(data => console.log(data)).catch(err => console.error(err));