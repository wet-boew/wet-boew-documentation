# How to build WET

You can find a fully built version of WET [here](http://wet-boew.github.io/v4.0-ci/docs/versions/dwnld-en.html).

If you want to build your own version of WET, follow these steps:

1) Make sure you have NPM installed.
2) Download the WET source files [here](http://wet-boew.github.io/v4.0-ci/docs/versions/dwnld-en.html).
3) Navigate to the WET directory and run `npm install`

## Getting Started 

Once all node modules are finished installing, run the command `npm run devBuild`.

This will build the basic files required in a folder called *dist*. This includes all JS, CSS, and a few default pages. No files are minified or linted.

When you make changes to the WET source, these files will need to be rebuilt to reflect those changes. This can be done manually or automatically.

### Manually

Run the commands `npm run js` or `npm run css`, every time you make a change to update the appropriate files.

### Automatically

Run the command `npm run watch`. Grunt will then look out for file changes and rebuild the appropriate files on its own. Rebuilding should finish within seconds of the change.

## Building Docs and Demos

If you must build documentation or demo pages, run the commands `npm run docs` or `npm run demos`.

## Linting

Two commands are provided for linting files: `npm run prelint` and `npm run postlint`. 

`prelint` will lint JS and SCSS files.
`postlint` will lint HTML files.

## Full Build

The files built by `npm run devBuild` are intended for development purposes only. To make a build that is ready for distrubution, run the `npm run fullBuild` command. This will minify all files and run several tests. This can take several minutes.

## TL;DR

1) Create base files with `npm run devBuild`
2) Run `npm run watch` to watch for changes to source
3) Make desired changes to source and they will be reflected in the build
4) Run `npm run fullbuild` when finished to create the final package