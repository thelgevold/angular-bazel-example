def _sources_aspect_es6_impl(target, ctx):
  result = depset()
  if hasattr(ctx.rule.attr, "deps"):
    for dep in ctx.rule.attr.deps:
      if hasattr(dep, "node_sources"):
        result += dep.node_sources
  # Note layering: until we have JS interop providers, this needs to know how to
  # get TypeScript outputs.
  if hasattr(target, "typescript"):
    result += target.typescript.es6_sources
  elif hasattr(target, "files"):
    result += target.files
  return struct(node_sources = result)

sources_aspect_es6 = aspect(
    _sources_aspect_es6_impl,
    attr_aspects = ["deps"],
)