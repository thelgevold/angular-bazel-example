const fs = require('fs')
var UglifyJS = require("uglify-js");

const start = new Date();

let content = fs.readFileSync('angular-demo/devsources.MF', {encoding: 'utf-8'})

let files = content.split('\n');

let src = files.filter(file => file.trim().length > 0 && !file.endsWith('.ngsummary.js'));

let appCode = {};
src.forEach(file => {
   let content = fs.readFileSync(`../${file}`, {encoding: 'utf-8'})
   appCode[file] = content;
});

var options = {
    compress: false,
    mangle: false,
    keep_fnames: true,
    sourceMap: false,
    toplevel: false,
    ie8: false,
    output: {
      beautify: false
    }
};

var result = UglifyJS.minify(appCode, options);
console.log(`bundled JS in ${new Date() - start}ms`);
fs.writeFileSync('bundle.js', result.code, 'utf8');