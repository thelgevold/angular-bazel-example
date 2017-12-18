load(":source_aspects.bzl", "sources_aspect_es6")

def _es6_consumer(ctx):
  files = depset()

  for d in ctx.attr.deps:
    if hasattr(d, "node_sources"):
      files += d.node_sources
    elif hasattr(d, "files"):
      files += d.files
      print("files")

  for f in files.to_list():
    print(f.path)
    

  return [DefaultInfo(
      files = files,
      runfiles = ctx.runfiles(files.to_list()),
  )]

es6_consumer = rule(
    implementation = _es6_consumer,
    attrs = {
        "deps": attr.label_list(
            allow_files = True,
            aspects = [sources_aspect_es6],
          ),
    }
)