// fileTransformer.js
/*eslint import/no-extraneous-dependencies:0*/
const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    },
};