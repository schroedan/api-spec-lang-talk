const srcDir = __dirname + '/../src/apib';
const buildDir = __dirname + '/../build/apib';

module.exports = {

  // The src directory.
  srcDir: srcDir,

  // The apib source file.
  apibFile: srcDir + '/apiary.apib',

  // The build directory.
  buildDir: buildDir,

  // The HTML output file.
  htmlFile: buildDir + '/index.html',

  // The render options.
  render: {
    filterInput: true,
    includePath: process.cwd(),
    theme: 'default',
    themeVariables: 'default',
    themeCondenseNav: true,
    themeFullWidth: false,
    themeTemplate: 'default',
    themeStyle: 'default',
  },

  // The mocks options.
  mocks: {
    serverPort: 3000,
    method: ['DELETE'],
    header: ['Authorization'],
    public: false,
    autoOptions: true,
    debugMode: false,
  },
};
