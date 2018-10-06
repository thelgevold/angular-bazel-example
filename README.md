[![CircleCI](https://circleci.com/gh/alexeagle/angular-bazel-example.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-bazel-example)

# Example of building an Angular app with Bazel

**This is experimental! There may be breaking changes.**

This is part of the ABC project. The overall goal is to make it possible to
develop Angular applications the same way we do at Google.
See http://g.co/ng/abc for an overview.

You can read the documentation in the wiki of this repository to understand how
this works.

Follow https://github.com/angular/angular/issues/19058 for updates.

## Installation

Install Bazel from the distribution, see [install] instructions.
On Mac, if you have Homebrew installed you can

```bash
brew tap bazelbuild/tap
brew tap-pin bazelbuild/tap
brew install bazel
```

Bazel will install a hermetic version of Node, npm, and Yarn when
you run the first build.

[install]: https://bazel.build/versions/master/docs/install.html

Also add `ibazel` to your `$PATH`:

```
yarn global add @bazel/ibazel
```

or

```
npm install -g @bazel/ibazel
```

## Setup

Before building the app, we install packages, just as with any npm-based development workflow.

```bash
$ yarn install
```

or 

```bash
$ npm install
```

For the time being, you need to run your locally installed `yarn` or `npm` to install dependencies
as shown above. This is because we pull down the `@bazel/typescript` bazel dependency from npm and
that dependency needs to be in place before we can build the project. We're working to
resolve this bootstrapping issue. Soon you will be able to skip this step and just do your first
Bazel build without needing any install step first.

## Development

Next we'll run the development server:

```bash
$ yarn serve
```

> This script runs `ibazel`, which is a "watch mode"
> for Bazel. That means it will watch any files that are inputs to the devserver,
> and when they change it will ask Bazel to re-build them. The server stays
> running, and when the re-build is finished, it will trigger the LiveReload in
> the browser.

This command prints a URL on the terminal. Open that page to see the demo app
running. Now you can edit one of the source files (`src/lib/file.ts` is an easy
one to understand and see the effect). As soon as you save a change, the app
should refresh in the browser with the new content. Our intent is that this time
is less than two seconds, even for a large application.

Control-C twice to kill the devserver and also stop `ibazel`.

