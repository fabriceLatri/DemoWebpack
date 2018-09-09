const path = require('path');

module.exports = {
    entry: "./assets/js/app.js",
    watch: true,
    output: {
        path: path.resolve('./dist'),
        filename: "bundle.js"
        },
};