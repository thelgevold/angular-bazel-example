const express = require('express')
const livereload = require('livereload')
const fs = require('fs')
const {createInterface} = require('readline')
const app = express()

// fixme: using FAILURE here to match current ibazel
// should be SUCCEEDED
const IBAZEL_NOTIFY_BUILD_SUCCESS = 'IBAZEL_BUILD_COMPLETED FAILURE';

const lrserver = livereload.createServer({debug: true})
const rl = createInterface({input: process.stdin, terminal: false});
rl.on('line', chunk => {
  if (chunk === IBAZEL_NOTIFY_BUILD_SUCCESS) {
    lrserver.refresh('./bundle.js')
  }
});
rl.on('close', () => {
  // Give ibazel 5s to kill our process, otherwise do it ourselves
  setTimeout(() => {
    console.error('ibazel failed to stop devserver; probably a bug');
    process.exit(1);
  }, 5000);
});

app.use(express.static('./airplane'))
app.use('/node_modules', express.static('./node_modules'))

app.get('/bundle.js', function (req, res) {
  const start = new Date();
  var lineReader = createInterface({
    input: fs.createReadStream('airplane/devsources.MF')
  });

  lineReader.on('line', function (file) {
    // look up one directory, because the manifest contains workspace names
    let content = fs.readFileSync(`../${file}`, {encoding: 'utf-8'})
        // Remove 'use strict'.
        .replace(/('use strict'|"use strict");?/, '');
    content = JSON.stringify(`${content}\n//# sourceURL=http://concatjs/base/${file}\n`);
    content = `//${file}\neval(${content});\n`;
    res.write(content, 'utf-8')
  });
  lineReader.on('close', () => {
    console.log(`bundled JS in ${new Date() - start}ms`)
    res.end()
  });
})

app.listen(3000, function () {
  console.log('Airplane app listening on port 3000!')
})
