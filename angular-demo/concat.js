const fs = require('fs')

const start = new Date();

let content = fs.readFileSync('angular-demo/devsources.MF', {encoding: 'utf-8'})

let files = content.split('\n');

let src = files.filter(file => file.trim().length > 0 
                               && !file.endsWith('.ngsummary.js'));

let code = '';
src.forEach(file => {
   let content = fs.readFileSync(`../${file}`, {encoding: 'utf-8'})
   code += '\n\n' + content;
});

fs.writeFileSync('bundle.js', code, 'utf8');
console.log(`bundled JS in ${new Date() - start}ms`);