const srcDir = __dirname + '/../src/openapi';
const buildDir = __dirname + '/../build/openapi';
const workingDir = __dirname + '/../.openapi';

module.exports = {

  // The src directory.
  srcDir: srcDir,

  // The JSON source file.
  jsonFile: srcDir + '/swagger.json',

  // The build directory.
  buildDir: buildDir,

  // The HTML output file.
  htmlFile: buildDir + '/index.html',

  // The render options.
  render: {
    workingDir: workingDir,
  },

  // The mocks options.
  mocks: {
    serverPort: 3000,
  },
};
