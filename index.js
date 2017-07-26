const interopRequire = require('interop-require')

module.exports = function(context, options) {
  return {
    presets: [
      [
        interopRequire('babel-preset-env'),
        Object.assign({
          targets: {
            node: 'current'
          }
        }, options)
      ],
      interopRequire('babel-preset-stage-0'),
      interopRequire('babel-preset-flow')
    ],
    plugins: [interopRequire('babel-plugin-package-name-import')]
  }
}
