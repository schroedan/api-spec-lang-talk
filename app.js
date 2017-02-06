const path = require('path');
const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');

/**
 * Expose `createApplication()`.
 */
module.exports = createApplication;

/**
 * Create express application.
 *
 * @return {Object}
 */
function createApplication() {
  const app = express();

  app.use(morgan('short'));
  app.use(serveStatic(path.resolve(__dirname, 'public')));

  return app;
}
