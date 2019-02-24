const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({ files: './src/*.js' }).then(data => console.log('Finished Builds Docs')).catch(err => console.error(err));