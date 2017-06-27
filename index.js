const interopRequire = require('interop-require')

module.exports = {
  presets: [
    [
      interopRequire('babel-preset-env'),
      {
        targets: {
          node: 'current'
        }
      }
    ],
    interopRequire('babel-preset-stage-0'),
    interopRequire('babel-preset-flow')
  ],
  plugins: [interopRequire('babel-plugin-package-name-import')]
}
