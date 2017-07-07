#!/usr/bin/env node
const minimist = require('minimist');
const app = require('../main');

const argv = minimist(process.argv.slice(2));
const config = require('../config/' + app.configModuleName('apib'));

/**
 * Main.
 */
switch (argv._.shift()) {
  default:
    const renderOptions = Object.assign({}, config.render);

    app.cleanDir(config.buildDir)
      .then(() => app.renderApibFile(config.apibFile, renderOptions)
        .then((output) => app.writeDataToFile(config.htmlFile, output)
          .then(() => console.info('Blueprint rendering finished')).catch((err) => app.errorHandler(err))
        ).catch((err) => app.errorHandler(err))
      ).catch((err) => app.errorHandler(err));
    break;

  case 'mocks':
    const mocksOptions = Object.assign({}, config.mocks);

    app.serveApibMocks(config.apibFile, mocksOptions)
      .catch((err) => app.errorHandler(err));
    break;
}
