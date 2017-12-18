load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
  name = "build_bazel_rules_nodejs",
  remote = "https://github.com/bazelbuild/rules_nodejs",
  tag = "0.1.0",
)

git_repository(
  name = "build_bazel_rules_typescript",
  remote = "https://github.com/gregmagolan/rules_typescript.git",
  tag = "abc-demo-build-1",
)

local_repository(
  name = "angular",
  path = "node_modules/@angular/bazel",
)

git_repository(
  name = "io_bazel_rules_sass",
  remote = "https://github.com/bazelbuild/rules_sass.git",
  tag = "0.0.3",
)

git_repository(
  name = "bazel_rules_abc_demo",
  remote = "https://github.com/gregmagolan/bazel_rules_abc_demo",
  tag = "0.0.3",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")
sass_repositories()
