# bramwillemse.nl
[![Netlify Status](https://api.netlify.com/api/v1/badges/e80b820a-f761-4c5c-a82b-91a188c84108/deploy-status)](https://app.netlify.com/sites/bw-home/deploys)

## Requirements
Globally installed (it's a lot):
1. Git LFS - Install and configure large media modules [as documented by Netlify](https://docs.netlify.com/large-media/requirements-and-limitations/#requirements)
2. Node.js
2. Hugo
5. Netlify CLI

## Getting started
1. Run `yarn install` or `npm install`
3. Run `netlify link`

## Local development
1. Run `yarn dev:webpack` - runs Webpack server and compiles assets
2. Run `yarn dev:hugo` - runs Hugo watch (watches and generates static pages on change)

## Production build
1. Run `yarn build:webpack`
2. Run `yarn build:hugo`


