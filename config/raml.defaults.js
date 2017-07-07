const raml2html = require('raml2html');

const srcDir = __dirname + '/../src/raml';
const buildDir = __dirname + '/../build/raml';

module.exports = {

  // The src directory.
  srcDir: srcDir,

  // The RAML source file.
  ramlFile: srcDir + '/api.raml',

  // The build directory.
  buildDir: buildDir,

  // The HTML output file.
  htmlFile: buildDir + '/index.html',

  // The render options.
  render: raml2html.getConfigForTheme(),

  // The mocks options.
  mocks: {
    serverPort: 3000,
    rejectOnErrors: true,
  },
};
