## Try it

```bash
# Install packages, uses hermetic version of node and yarn
$ bazel run @yarn//:yarn
$ npm run build
# Make changes, observe the development round-trip time
```

The dev server currently doesn't rebundle and refresh, but this will be added later. 

To run the app just do npm run serve 
