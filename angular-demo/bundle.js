const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

class NormalizePaths {
  resolveId(importee, importer) {

    console.log(importee);
    console.log(importer);

    if(!importee.startsWith('./')) {
      return  `bazel-bin/angular-demo/${importee.replace('./', '').replace('.closure.js', '')}.closure.js`;
    }

    
  }
  
}
const normalizePaths = (config) => new NormalizePaths(config);

const inputOptions = {input: 'bazel-bin/angular-demo/main.closure.js',
                      plugins: [normalizePaths(),
                                nodeResolve({
                                  jsnext: true, module: true
                                })
                      ]
};
const outputOptions = {
  file: 'dist/bundle.js',
  format: 'iife'
};

function build() {
  // create a bundle
  const bundle = rollup.rollup(inputOptions)
                       .then(bundle => {
                             bundle.write(outputOptions);
                       });

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  
}

build();