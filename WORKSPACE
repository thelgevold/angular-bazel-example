# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(name = "angular_bazel_example")

# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
# This commit matches the version of buildifier in angular/ngcontainer
# If you change this, also check if it matches the version in the angular/ngcontainer
# version in /.circleci/config.yml
BAZEL_BUILDTOOLS_VERSION = "49a6c199e3fbf5d94534b2771868677d3f9c6de9"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
    strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
    sha256 = "edf39af5fc257521e4af4c40829fffe8fba6d0ebff9f4dd69a6f8f1223ae047b",
)

# Runs the TypeScript compiler
local_repository(
    name = "build_bazel_rules_typescript",
    path = "node_modules/@bazel/typescript",
)

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
rules_typescript_dependencies()

# Runs the Sass CSS preprocessor
http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.11.0.zip",
    strip_prefix = "rules_sass-1.11.0",
    sha256 = "dbe9fb97d5a7833b2a733eebc78c9c1e3880f676ac8af16e58ccf2139cbcad03",
)

# The @angular repo contains rule for building Angular applications
http_archive(
    name = "angular",
    url = "https://github.com/angular/angular/archive/6.1.8.zip",
    strip_prefix = "angular-6.1.8",
    sha256 = "5ac6694f7c694afe34767aff4a0dd0408e25b0493cea675c2bb075c123adc46a",
)

# The @rxjs repo contains targets for building rxjs with bazel
local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

####################################
# Load and install our dependencies downloaded above.

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    package_json = ["//:package.json"],
    preserve_symlinks = True,
    node_version = "10.9.0",
    yarn_version = "1.9.2",
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()
browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace", "check_rules_typescript_version")

ts_setup_workspace()

# Enforce that the version of @bazel/typescript installed by npm is compatible with the rules.
# 0.16.0: tsc_wrapped uses user's typescript version & check_rules_typescript_version
check_rules_typescript_version("0.16.0")

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

#
# Load and install our dependencies from local repositories
#

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()


git_repository(
    name = "io_bazel_rules_dotnet",
    remote = "https://github.com/bazelbuild/rules_dotnet",
    commit = "bae7320775e43cd2c32d8abb3593c4a82527504e",
)


load("@io_bazel_rules_dotnet//dotnet:defs.bzl", "dotnet_register_toolchains", "dotnet_repositories", "nuget_package")
#
#nuget_package(
#    name = "Microsoft.AspNet.WebApi.SelfHost",
#    package = "Microsoft.AspNet.WebApi.SelfHost",
#    version = "5.2.6",
#    sha256 = "fa3e0cfbb2caa9946d2ce3d8174031a06320aad2c9e69a60f7739b9ddf19f172",
#    core_lib = "lib/netstandard2.0/System.Web.Http.SelfHost.dll",
#    net_lib = "lib/net45/System.Web.Http.SelfHost.dll",
#    mono_lib = "lib/net45/System.Web.Http.SelfHost.dll",
#    core_deps = [
#    ],
#    net_deps = [
#    ],
#    mono_deps = [
#    ],
#    core_files = [
#        "lib/netstandard2.0/System.Web.Http.SelfHost.dll",
#        "lib/netstandard2.0/System.Web.Http.SelfHost.xml",
#    ],
#    net_files = [
#        "lib/net45/System.Web.Http.SelfHost.dll",
#        "lib/net45/System.Web.Http.SelfHost.xml",
#    ],
#    mono_files = [
#        "lib/net45/System.Web.Http.SelfHost.dll",
#        "lib/net45/System.Web.Http.SelfHost.xml",
#    ],
#)
#
##nuget_package(
#    name = "Microsoft.AspNet.WebApi.SelfHost",
#    package="Microsoft.AspNet.WebApi.SelfHost",
#    version="5.2.6",
#    sha256 = "fa3e0cfbb2caa9946d2ce3d8174031a06320aad2c9e69a60f7739b9ddf19f172",
#    #core_lib = "lib/netstandard2.0/Newtonsoft.Json.dll",
#    net_lib = "lib/net45/System.Web.Http.SelfHost.dll",
#    mono_lib = "lib/net45/System.Web.Http.SelfHost.dll",
#    core_deps = [
#    ],
#    net_deps = [
#    ],
#    mono_deps = [
#    ],
#    core_files = [
#        
#    ],
#    net_files = [
#       
#    ],
#    mono_files = [
#        
#    ],
#)
#
#dotnet_nuget_new(
#        name = "Microsoft.AspNet.WebApi.SelfHost",
#        package="Microsoft.AspNet.WebApi.SelfHost",
#        version="5.2.6",
#        sha256="fa3e0cfbb2caa9946d2ce3d8174031a06320aad2c9e69a60f7739b9ddf19f172",
#        build_file_content = """
#package(default_visibility = [ "//visibility:public" ])
#load("@io_bazel_rules_dotnet//dotnet:defs.bzl", "dotnet_import_library")
#
#dotnet_import_library(
#    name = "System.Web.Http.SelfHost",
#    src = "lib/net45/System.Web.Http.SelfHost.dll"
#)
#    """
#)

dotnet_register_toolchains("host")

dotnet_repositories()