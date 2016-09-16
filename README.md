# examen 

# Introduction

Online Quiz System for G.C.E. Advanced Level, Sri Lanka. Examen allows authorized users to upload individual questions or whole question 
paper and students to view and answer questions online. Students can use Examen anytime, 
anywhere because Examen select questions based on students' preferred subjects and time allocations.

`examen` provides the following features:
- Allows authorized users (Teachers) to upload questions individually or as a whole paper
- Allows Teachers to upload images for questions and answers
- Allows Teachers to find the number of times particular questions have been tried 
out and the percentage of correct answers students have provided
- Students can try questions as a whole paper or as individual question based on specified time duration and subject. 
Examen will automatically select set of questions to match with the time and subject provided by the student

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/shavindraSN/examen.git
cd examen
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
# prod build with AoT compilation
npm run build.prod.exp

# dev build of multiple applications (by default the value of --app is "app")
npm start -- --app baz
npm start -- --app foo
npm start -- --app bar
```

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular2-seed/wiki) of the project.

# Running tests

```bash
npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

<!-- # Progressive Web Apps

`angular2-seed` supports progressive web apps with [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit).

The seed can generate a file `manifest.appcache` which lists all files included in a project's output, along with SHA1 hashes of all file contents. This file can be used directly as an AppCache manifest (for now, `index.html` must be manually edited to set this up).

The manifest is also annotated for use with `angular2-service-worker`. Some manual operations are currently required to enable this usage. The package must be installed, and `worker.js` manually copied into the project src directory:

```bash
cp node_modules/angular2-service-worker/dist/worker.js src/client
```

In order to generate the manifest file run:

```bash
# ENV can be both prod or dev
npm run generate.manifest -- --env ENV
```

Then, the commented snippet in `main.ts` must be uncommented to register the worker script as a service worker. -->


# Contributing
Please see the [CONTRIBUTING](https://github.com/shavindraSN/examen/README.md) file for guidelines.

# Contributors
[<img alt="shavindraSN" src="https://avatars1.githubusercontent.com/u/20218999?v=3" width="117">](https://github.com/shavindraSN) |[<img alt="kenthellck" src="https://avatars0.githubusercontent.com/u/13234259?v=3" width="117">](https://github.com/kenthellck) |[<img alt="ArchchanaKugathsan" src="https://avatars0.githubusercontent.com/u/16607165?v=3" width="117">](https://github.com/ArchchanaKugathsan) |[<img alt="SumeeraShakila" src="https://avatars2.githubusercontent.com/u/16667546?v=3" width="117">](https://github.com/SumeeraShakila) |
:---: |:---: |:---: |:---:  |
[shavindraSN](https://github.com/shavindraSN) |[kenthellck](https://github.com/kenthellck) |[ArchchanaKugathsan](https://github.com/ArchchanaKugathsan) |[SumeeraShakila](https://github.com/SumeeraShakila) |



# License

MIT
