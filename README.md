
Experimental Production bundling with Rollup:

Install dependencies:

```
bazel run @yarn//:yarn
```

Generate rollup bundle:

```
bazel build //src:bundle
```

Test using lite-server:

```
bazel run //src:web
```



