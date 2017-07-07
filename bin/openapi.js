#!/usr/bin/env node
const minimist = require('minimist');
const app = require('../main');

const argv = minimist(process.argv.slice(2));
const config = require('../config/' + app.configModuleName('openapi'));

/**
 * Main.
 */
switch (argv._.shift()) {
  default:
    const renderOptions = Object.assign({}, config.render);

    app.cleanDir(config.buildDir)
      .then(() => app.renderOpenApiFile(config.jsonFile, renderOptions)
        .then((stream) => app.writeStreamToFile(config.htmlFile, stream)
          .then(() => console.info('OpenAPI rendering finished')).catch((err) => app.errorHandler(err))
        ).catch((err) => app.errorHandler(err))
      ).catch((err) => app.errorHandler(err));
    break;

  case 'mocks':
    const mocksOptions = Object.assign({}, config.mocks);

    app.serveOpenApiMocks(config.jsonFile, mocksOptions)
      .then(() => {
        console.log('Pokemock ready at http://localhost:' + mocksOptions.serverPort);
        console.log('Swagger UI at http://localhost:' + mocksOptions.serverPort + '/ui');
      })
      .catch((err) => app.errorHandler(err));
    break;
}
