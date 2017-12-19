workspace(name = "treeview")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/thelgevold/rules_nodejs.git",
    commit = "adcd7d2f21256dddb583f5df129543a575c96218",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "npm_install")
node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    commit = "596bd0d16d9957d34a6447843dd98fb74bb75b1c",
)

load("@build_bazel_rules_typescript//:setup.bzl", "ts_setup_workspace")

ts_setup_workspace()

local_repository(
    name = "angular",
    path = "node_modules/@angular/bazel",
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.3",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()
