# react-redux-router-express-boilerplate

## Getting Started

`npm install`

`npm run dev:watch` - Runs `webpack` for client and server side files.  Also, `nodemon` watches for any server side changes.

## Features

Server side files are built to `server/build/serverBundle.js`.

Client side files are built to `build/`.

`dist` should contain production ready files.

All `react-router` routes are available in `client/components/Routes.jsx`.  Refer to [`react-router`](https://github.com/reactjs/react-router) for more information.

`nodemon` only watches `server/build/` directory.
