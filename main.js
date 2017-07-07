const aglio = require('aglio');
const createPokemockApp = require('pokemock/createDefaultApp');
const drakov = require('drakov');
const express = require('express');
const fs = require('fs-extra');
const inliner = require('html-inline');
const morgan = require('morgan');
const path = require('path');
const pokemock = require('pokemock');
const raml2html = require('raml2html');
const serveStatic = require('serve-static');
const spectacleDocs = require('spectacle-docs');

/**
 * Expose methods.
 */
module.exports = createApplication;
module.exports.configModuleName = configModuleName;
module.exports.errorHandler = errorHandler;
module.exports.cleanDir = cleanDir;
module.exports.writeDataToFile = writeDataToFile;
module.exports.writeStreamToFile = writeStreamToFile;
module.exports.renderApibFile = renderApibFile;
module.exports.serveApibMocks = serveApibMocks;
module.exports.renderOpenApiFile = renderOpenApiFile;
module.exports.serveOpenApiMocks = serveOpenApiMocks;
module.exports.renderRamlFile = renderRamlFile;

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

/**
 * Retrieve config module name.
 *
 * @param {string} prefix
 *
 * @returns {string}
 */
function configModuleName(prefix) {
  try {
    fs.accessSync(__dirname + '/config/' + prefix + '.config.js', fs.constants.R_OK);
  } catch (e) {
    return prefix + '.defaults';
  }

  return prefix + '.config';
}

/**
 * Error handler.
 *
 * @param {Error} err
 */
function errorHandler(err) {
  console.log(err.stack);
  process.exit(1);
}

/**
 * Ensure directory usage.
 *
 * @param {string} dir
 *
 * @return {Promise}
 */
function ensureDir(dir) {
  return new Promise((fulfill) => fs.ensureDir(dir, (err) => {
    if (err) {
      throw err;
    }

    fulfill();
  }));
}

/**
 * Clean directory.
 *
 * @param {string} dir
 *
 * @return {Promise}
 */
function cleanDir(dir) {
  const promise = new Promise((fulfill) => fs.remove(dir, (err) => {
    if (err) {
      throw err;
    }

    fulfill();
  }));

  return promise.then(() => ensureDir(dir));
}

/**
 * Write data to file.
 *
 * @param {string} file
 * @param {string} data
 *
 * @return {Promise}
 */
function writeDataToFile(file, data) {
  return new Promise((fulfill) => fs.writeFile(file, data, (err) => {
    if (err) {
      throw err;
    }

    fulfill();
  }));
}

/**
 * Write stream to file.
 *
 * @param {string} file
 * @param {Stream} stream
 *
 * @return {Promise}
 */
function writeStreamToFile(file, stream) {
  return new Promise((fulfill) => fulfill(stream.pipe(fs.createWriteStream(file))));
}

/**
 * Render blueprint.
 *
 * @param {string} input
 * @param {Object} options
 *
 * @return {Promise}
 */
function renderApib(input, options = {}) {
  return new Promise((fulfill) => aglio.render(input, options, (err, output, warnings) => {
    if (err) {
      throw err;
    }

    if (warnings) {
      warnings.forEach(function (warning) {
        console.warn(`WARNING: ${warning.code} - ${warning.message} (${warning.location[0].index}:${warning.location[0].length})`);
      });
    }

    fulfill(output);
  }));
}

/**
 * Render blueprint file.
 *
 * @param {string} file
 * @param {Object} options
 *
 * @return {Promise}
 */
function renderApibFile(file, options = {}) {
  const promise = new Promise((fulfill) => fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    }

    fulfill(data);
  }));

  return promise.then((data) => renderApib(data.toString(), options));
}

/**
 * Serve blueprint mocks.
 *
 * @param {string} file
 * @param {Object} options
 *
 * @return {Promise}
 */
function serveApibMocks(file, options = {}) {
  options.sourceFiles = file;

  return new Promise((fulfill) => {
    drakov.run(options);

    fulfill();
  });
}

/**
 * Render OpenAPI file.
 *
 * @param {string} file
 * @param {Object} options
 *
 * @return {Promise}
 */
function renderOpenApiFile(file, options = {}) {

  const promise = new Promise((fulfill) => spectacleDocs({
    specFile: file,
    targetDir: options.workingDir,
    disableJs: true
  }).then(() => fulfill(
    fs.createReadStream(options.workingDir + '/index.html').pipe(inliner({
      basedir: options.workingDir,
      ignoreScripts: true
    }))
  )));

  return cleanDir(options.workingDir).then(() => promise);
}

/**
 * Serve OpenAPI mocks.
 *
 * @param {string} file
 * @param {Object} options
 *
 * @return {Promise}
 */
function serveOpenApiMocks(file, options = {}) {
  const app = createPokemockApp(file);
  const connections = {};

  return new Promise((fulfill) => {
    app.server = app.listen(options.serverPort, () => fulfill());

    app.server.on('connection', (connection) => {
      const key = connection.remoteAddress + ':' + connection.remotePort;

      connections[key] = connection;

      connection.on('close', () => {
        delete connections[key];
      });
    });

    app.server.destroy = (callback) => {
      app.server.close(callback);

      for (let key in connections) {
        connections[key].destroy();
      }
    };
  });
}

/**
 * Render RAML file.
 *
 * @param {string} file
 * @param {Object} options
 *
 * @return {Promise}
 */
function renderRamlFile(file, options = {}) {
  return raml2html.render(file, options, false);
}
