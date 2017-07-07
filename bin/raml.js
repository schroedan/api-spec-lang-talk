#!/usr/bin/env node
const minimist = require('minimist');
const app = require('../main');

const argv = minimist(process.argv.slice(2));
const config = require('../config/' + app.configModuleName('raml'));

/**
 * Main.
 */
switch (argv._.shift()) {
  default:
    const renderOptions = Object.assign({}, config.render);

    app.cleanDir(config.buildDir)
      .then(() => app.renderRamlFile(config.ramlFile, renderOptions)
        .then((result) => app.writeDataToFile(config.htmlFile, result)
          .then(() => console.info('RAML rendering finished')).catch((err) => app.errorHandler(err))
        ).catch((err) => app.errorHandler(err))
      ).catch((err) => app.errorHandler(err));
    break;
}
